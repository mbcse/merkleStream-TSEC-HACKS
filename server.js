var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
const IPFS = require("ipfs-api");
var multer = require("multer");
var fs = require("fs");
const uuidv1 = require("uuid/v1");
const fetch = require("node-fetch");
var mongoose=require("mongoose");
var likedb=require("./models/likeDb");
const { json } = require("express");
var app = express();
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "bedium",
// });

var dburl =
  "mongodb+srv://mohit:12345@bedium.jzl5s.mongodb.net/bedium?retryWrites=true&w=majority";
mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once("open", function () {
  console.log("Local Database Connected");
});

//Database Connection
// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Database Connected!");
// });

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//App Uses
app.use(bodyParser.json({ type: "application/*+json" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
//app.use(session({secret: "hello-my-10133690-key-mbcse",resave: false,
//saveUninitialized: true}));
const ipfs = new IPFS({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
});

//multer file upload destination configuration
var documentuploadstorage = multer.diskStorage({
  destination: "./public/image_uploads",
  filename: (req, file, cb) => {
    cb(null, "doc" + "_" + Date.now() + path.extname(file.originalname));
  },
});

var documentupload = multer({ storage: documentuploadstorage });

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/write", (req, res) => {
  res.render("write_post");
});

app.post("/gethash", documentupload.single("file"), (req, res) => {
  let ipfsfilen = fs.readFileSync(
    "./public/image_uploads/" + req.file.filename
  );
  let ipfsbuffer = Buffer.from(ipfsfilen);
  var hashimage = "";
  ipfs.files.add(ipfsbuffer, function (err, file) {
    if (err) {
      console.log(err);
    }
    console.log("ImageFile Hash" + file);
    hashimage = file[0].hash;

    var data = req.body.markdown;
    var hashmarkdown = "";
    let mName = "content" + uuidv1() + ".md";

    fs.writeFile("./public/contentFiles/" + mName, data, (err) => {
      if (err) console.log(err);
      console.log("Successfully Written to File.");
      let ipfsfilem = fs.readFileSync("./public/contentFiles/" + mName);
      let ipfsbufferm = Buffer.from(ipfsfilem);
      ipfs.files.add(ipfsbufferm, function (err, file) {
        if (err) {
          console.log(err);
        }
        console.log("markdownFilehash" + file);
        hashmarkdown = file[0].hash;

        console.log("hashes  " + hashimage + "  " + hashmarkdown);
        res.json({ imageHash: hashimage, markdownHash: hashmarkdown });
      });
    });
  });
});

app.get("/viewpost/:id/:hash", (req, res) => {
  console.log(req.params.id);
  console.log(req.params.hash);
  console.log(req.params);
  var content = "";
  ipfs.files.get(req.params.hash, function (err, files) {
    if (err) throw err;
    console.log(files);
    files.forEach((file) => {
      console.log("file", file);
      console.log(file.content.toString("binary"));
      content = file.content.toString();
      content = "`" + content + "`";
      console.log(content);
      res.render("single-post-2.ejs", { content: content, id: req.params.id });
    });
  });
});

app.get("/myaccount", (req, res) => {
  res.render("profile");
});

app.get("/seeprofile", (req, res) => {
  var address = req.query.address;
  console.log(address);
  var sen = JSON.stringify({ user: address });
  res.render("publicprofile", { obj: sen });
});

app.get("/like/:address", async(req, res) => {
  var id = req.params.address;
  var user=await likedb.findOne({address:id});
  console.log(user);
  if(user.length==0){
    var newuser= new likedb({address:id,likes:1});
    await newuser.save();
  }else{
  user.likes+=1;
  await user.save();
  }
  res.json({status:true});
  // con.query(
  //   "insert into like_data values(?,?) ON DUPLICATE KEY UPDATE likes = likes + 1; ",
  //   [id, 1],
  //   (err, resu) => {
  //     if (err)
  //       //res.redirect("/");
  //       res.json({ status: false });
  //     else res.json({ status: true });
  //     //res.redirect("/");
  //   }
  // );
});

app.get("/getlikecount/:address", async(req, res) => {
  var id = req.params.address;
  console.log(id);
  var user=await likedb.find({address:id});
  res.json({likes:user.likes});
  // con.query("select likes from like_data where user=?", [id], (err, resu) => {
  //   if (err) {
  //     res.json({ likes: 0 });
  //   } else {
  //     if (resu[0]) {
  //       res.json({ likes: resu[0].likes });
  //     } else {
  //       res.json({ likes: 0 });
  //     }
  //   }
  // });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server started at port ", process.env.PORT || 5000);
});
