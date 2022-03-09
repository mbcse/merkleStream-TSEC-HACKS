const portis = new Portis('880e94d6-4279-402a-8ce8-ade1a5059ad8', 'rinkeby');
App={
	loading:false,
	setLoading: (boolean) => {
        App.loading = boolean;
        const loader = $("#loader");
        const content = $("#content");
        if (boolean) {
          loader.show();
          // content.hide();
        } else {
          loader.hide();
          // content.show();
        }
    },
	loadWeb3:async()=>{
		// if (window.ethereum) {
		// 	console.log("Metamask Detected");
		// 	// window.web3 = new Web3(portis.provider);
		// 	window.web3 = new Web3(window.ethereum);
		// 	try {
		// 	$("#msg").text("Please connect your metamask")  
		// 	var res = await ethereum.enable();
		// 	App.network=await web3.eth.net.getNetworkType();
		// 	console.log(App.network);
		// 	} catch (error) {
		// 	$("#generalMsgModal").modal("show");
		// 	$("#generalModalMessage").text("Permission Denied, Metamask Not connected!");
		// 	}
		// }
		
		// else {
		// 	console.log(
		// 	"Non-Ethereum browser detected. You should consider trying MetaMask!"
		// 	);
		// 	$("#generalMsgModal").modal("show");
		// 	$("#generalModalMessage").html("Non-Ethereum browser detected. You should consider trying MetaMask! <br> <a href='https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en'>Download Here</a>");
		// }

		window.web3 = new Web3(portis.provider);
	},

	loadAccount:async()=>{
		var accounts=await web3.eth.getAccounts();
		App.userAccount=accounts[0];
		console.log(App.userAccount);
	},
	loadContracts:async()=>{
		var bediumABI=[
			{
				"constant": false,
				"inputs": [
					{
						"name": "_likes",
						"type": "uint256"
					}
				],
				"name": "getPaid",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_amount",
						"type": "uint256"
					}
				],
				"name": "redeemToOwner",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_hash",
						"type": "string"
					}
				],
				"name": "setCoverImage",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_fileHash",
						"type": "string"
					},
					{
						"name": "_videoHash",
						"type": "string"
					},
					{
						"name": "_title",
						"type": "string"
					}
				],
				"name": "setNewPost",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_hash",
						"type": "string"
					}
				],
				"name": "setUserImage",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_name",
						"type": "string"
					}
				],
				"name": "setUserName",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_amount",
						"type": "uint256"
					}
				],
				"name": "transferDai",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_to",
						"type": "address"
					}
				],
				"name": "transferSubscription",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "Balance",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "_id",
						"type": "uint256"
					}
				],
				"name": "CheckAuthorOwner",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "checkSubscribed",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "getNextPayTime",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "getPaidAmount",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "getPAYDetails",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					},
					{
						"name": "",
						"type": "bool"
					},
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "_id",
						"type": "uint256"
					}
				],
				"name": "getPost",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					},
					{
						"name": "",
						"type": "address"
					},
					{
						"name": "",
						"type": "string"
					},
					{
						"name": "",
						"type": "string"
					},
					{
						"name": "",
						"type": "string"
					},
					{
						"name": "",
						"type": "string"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "getSubscriptionPeriod",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "getTotalPost",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "_user",
						"type": "address"
					}
				],
				"name": "getUserDetails",
				"outputs": [
					{
						"name": "",
						"type": "string"
					},
					{
						"name": "",
						"type": "string"
					},
					{
						"name": "",
						"type": "string"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "_user",
						"type": "address"
					}
				],
				"name": "getUserPostsArray",
				"outputs": [
					{
						"name": "",
						"type": "uint256[]"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "_user",
						"type": "address"
					}
				],
				"name": "getUserTotalPosts",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "MyCTokensBalance",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			}
		];
		App.bediumAddress="0xC077c22A6beD0CDEE81a6018e57Bc6cAf611669a";
		App.bediumContract= new web3.eth.Contract(bediumABI, App.bediumAddress);
		console.log(App.bediumContract);
		portis.showPortis();
		var daiABI=[{"inputs":[{"internalType":"uint256","name":"chainId_","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"guy","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":true,"inputs":[{"indexed":true,"internalType":"bytes4","name":"sig","type":"bytes4"},{"indexed":true,"internalType":"address","name":"usr","type":"address"},{"indexed":true,"internalType":"bytes32","name":"arg1","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"arg2","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"}],"name":"LogNote","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"guy","type":"address"}],"name":"deny","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"move","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"bool","name":"allowed","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"pull","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"push","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"guy","type":"address"}],"name":"rely","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"wards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
		App.daiContract= new web3.eth.Contract(daiABI,"0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735");
	},
	codeIndex:async()=>{
		var totalPost=0;
		var posts=document.getElementById('posts');
		var content="";
		App.bediumContract.methods.getTotalPost().call({from:App.userAccount},(err,resu)=>
		{
			  for(var i=1;i<=resu;i++){
				App.bediumContract.methods.getPost(i).call({from:App.userAccount},(err,result)=>{
					  
					  console.log(result[2]);
					  var title=result[3];
					  var imagehash=result[2];
					  App.bediumContract.methods.getUserDetails(result[1]).call({from:App.userAccount},(err,user)=>{
							  content=`<div class="col-lg-4 col-md-6">
										  <div class="card h-500">
											  <div class="single-post post-style-1">
  
												<video controls width="250">

											
												<source src="https://gateway.pinata.cloud/ipfs/`+result[3] +`">
											
												Sorry, your browser doesn't support embedded videos.
												</video>
  
												  <div class="blog-info">
  
													  <h4 class="title"><a href="/viewpost/`+result[0]+`/`+result[2]+`"><b>`+result[4]+`</b></a></h4>
  
													  <ul class="post-footer">
														  <li><a href="#likess"><i class="ion-heart"></i>`+(httpGetLikes("/getlikecount/"+result[1]).likes|| 0)+`</a></li>
														  <li><a href="#"><i class="ion-chatbubble"></i>6</a></li>
														  <li><a href="#"><i class="ion-eye"></i>138</a></li>
													  </ul>
  
												  </div>
											  </div>
										  </div>
									  </div>`
									  posts.innerHTML+=content;
						  });	
  
					  });
  
			  }
			  
			  
			
		});


		function httpGetLikes(theUrl){
			var xmlHttp = new XMLHttpRequest();
			xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
			xmlHttp.send( null );
			return JSON.parse(xmlHttp.responseText);
	    }
	},
	codeProfile:async()=>{
		var totalPost=0;
		var posts=document.getElementById('posts');
		var content="";
  
		try{
		App.bediumContract.methods.getUserTotalPosts(App.userAccount).call({from:App.userAccount},(err,resu)=>
		{
			
			  userpostcount.innerHTML=resu;
			  App.bediumContract.methods.getUserPostsArray(App.userAccount).call({from:App.userAccount},(err,arr)=>{
  
			 
				  for(var i=0;i<resu;i++){
						  App.bediumContract.methods.getPost(parseInt(arr[i])).call({from:App.userAccount},(err,result)=>{
						  console.log("hello")
						  console.log(result[2]);
						  var title=result[3];
						  var imagehash=result[2];
							  
						  content=`<div class="col-lg-4 col-md-6">
										  <div class="card h-500">
											  <div class="single-post post-style-1">
  
												<video controls width="250">

												
												<source src="https://gateway.pinata.cloud/ipfs/`+result[3] +`">
											
												Sorry, your browser doesn't support embedded videos.
												</video>
  
												  <div class="blog-info">
  
													  <h4 class="title"><a href="/viewpost/`+result[0]+`/`+result[2]+`"><b>`+result[4]+`</b></a></h4>
  
													  <ul class="post-footer">
														  <li><a href="#"><i class="ion-heart"></i>`+(httpGetLikes("/getlikecount/"+App.userAccount)||0)+`</a></li>
														  <li><a href="#"><i class="ion-chatbubble"></i>6</a></li>
														  <li><a href="#"><i class="ion-eye"></i>138</a></li>
													  </ul>
  
												  </div>
											  </div>
										  </div>
									  </div>`
									  posts.innerHTML+=content;
						  });
  
				  }
			  
			  });
			
		});
		}catch(e){
			console.log(e);
			
		}
  
  //**************************************************************************************************      
  var name=document.getElementById('name');
	  var userimage=document.getElementById('userimage');
	  var usercoverimage=document.getElementById('usercoverimage');
	  var userpostcount=document.getElementById('userpostcount');
	  var ethaddress=document.getElementById('ethaddress');
	  ethaddress.innerHTML=App.userAccount;
  
	  try{
			  App.bediumContract.methods.getUserDetails(App.userAccount).call({from:App.userAccount},(err,user)=>{
			  console.log(user[0]);
			  name.innerHTML=user[0];
			  userimage.src="https://gateway.ipfs.io/ipfs/"+user[1];
			  coverimage.src="https://gateway.ipfs.io/ipfs/"+user[2];
			  });
	  }catch(e){
			  alert(e);
	  }  
	   
  
  
  //************************************************************************************************** 
	  const reader = new FileReader();
	  const ipfs = window.IpfsApi('ipfs.infura.io', 5001,{ protocol: 'https'});
	  console.log(ipfs);
  //*************************************************************************************************
	  document.getElementById('profilebtn').addEventListener('click',()=>{
  
		  const photo = document.getElementById("userimageupload");
		  reader.readAsArrayBuffer(photo.files[0]);
		  reader.onloadend = function() {
			  const buf = buffer.Buffer(reader.result); // Convert data into buffer
			  console.log(buf);
				  ipfs.files.add(buf, (err, result) => { // Upload buffer to IPFS
				  if(err) {
					  console.error(err)
				  }
				  console.log(result[0].hash);
				  App.bediumContract.methods.setUserImage(result[0].hash).send({from:App.userAccount},(err,res)=>{}).on('receipt',(rc)=>{
					  document.getElementById('profilemessage').innerHTML="Updated Successfully";
				  });
  
			  });
		  }
	  });
  //**************************************************************************************************************
  document.getElementById('coverbtn').addEventListener('click',()=>{
  
		  const photo = document.getElementById("coverimageupload");
		  reader.readAsArrayBuffer(photo.files[0]);
		  reader.onloadend = function() {
			  const buf = buffer.Buffer(reader.result); // Convert data into buffer
			  console.log(buf);
				  ipfs.files.add(buf, (err, result) => { // Upload buffer to IPFS
				  if(err) {
					  console.error(err)
				  }
				  console.log(result[0].hash);
				  App.bediumContract.methods.setCoverImage(result[0].hash).send({from:App.userAccount},(err,res)=>{}).on('receipt',(rc)=>{
					  document.getElementById('covermessage').innerHTML="Updated Successfully";
				  });
  
			  });
		  }
  });
  //***************************************************************************************************************
  document.getElementById('namebtn').addEventListener('click',()=>{
  
			  var name = document.getElementById("usernameupload");
			  
			  App.bediumContract.methods.setUserName(name.value).send({from:App.userAccount},(err,res)=>{}).on('receipt',(rc)=>{
					  document.getElementById('namemessage').innerHTML="Updated Successfully";
				  });
  
			  
  });
  //******************************************************************************************************************
  App.bediumContract.methods.checkSubscribed().call({from:App.userAccount},(err,status)=>{
	  if(status){
		  document.getElementById('isusersubscribed').innerHTML="Yes";
		  document.getElementById('subscribebtn').style.display="none";
		  document.getElementById('transferbtn').style.display="block";
		  App.bediumContract.methods.getSubscriptionPeriod().call({from:App.userAccount},(err,period)=>{
			  document.getElementById('subscriptiontime').innerHTML=new Date(period*1000);    
		  });
	  }            
		  
	  else
		  document.getElementById('isusersubscribed').innerHTML="No";   
	   
  });
  
  //******************************************************************************************************************
  var messagediv=document.getElementById('message');
	  var barContainer=document.getElementById('statusBar');
			  barContainer.style.display="none";
  
			  var statusText=document.getElementById('proStatus');
			  var probarDiv=document.getElementById('progressBar');
			  var statusShowValue=document.getElementById('barStatusValue');
			  var statusValue=0;
  
			  var putStatusValue=function(val,text){
				  proStatus.innerHTML=text;
				  statusShowValue.innerHTML=val+"%";
				  probarDiv.style.width=val+"%";  
			  }
			  var progressInterval;
			  var updatebar=function(){
							  if(statusValue>=0 && statusValue<10){
							  putStatusValue(statusValue, "Please Approve Spending of 1 Dai");
							  }
							  else if(statusValue>=10 && statusValue <40){
								  putStatusValue(statusValue, "Processing");
							  } 
  
							  else if(statusValue>=40 && statusValue <60){
								  putStatusValue(statusValue, "Sending Dai, Please Approve");
							  }
							  else if(statusValue>=60 && statusValue <80){
								  putStatusValue(statusValue, "Thankyou! Transfering Dai");
							  }
  
							  else if(statusValue>=80 && statusValue <=95){
								  putStatusValue(statusValue,"Completing Transaction, Please Approve");
							  }
							  else{
								  //putStatusValue(100,"Done! Thankyou For Subscribing!!");
								  clearInterval(progressInterval);
							  }
  
							  statusValue++;
  
			  }
  
			  var startUpload=function(){
					  barContainer.style.display="block";   
					  messagediv.style.display="none";           
					  progressInterval = setInterval(updatebar, 1500);
					  
				  }
  
  //*************************************************************************************************************************
  document.getElementById('subscribe').addEventListener('click',()=>{
														  
			  startUpload();
			  App.daiContract.methods.approve(App.bediumAddress,'1000000000000000000').send({from:App.userAccount},(err,txh)=>{
				  if(err)
					  alert("Something went wrong Try Again");  
				  statusValue=11;
				  putStatusValue(statusValue,"Thankyou!");	  
				  }).on('receipt',(rc)=>{
									  statusValue=41;
									  putStatusValue(statusValue,"Sending Dai, Please Approve");
								  App.bediumContract.methods.transferDai('1000000000000000000').send({from:App.userAccount},(err,txh)=>{
									  if(err)
										  alert("Something went wrong Try Again");
										  statusValue=70;
										  putStatusValue(statusValue,"Thankyou!");	
									  }).on('receipt',(rc)=>{		
										  statusValue=100;
										  putStatusValue(statusValue,"Thankyou!");
										  document.getElementById('headingmessage').innerHTML="Subscribed!";
															  document.getElementById('close').style.display="block";
															  document.getElementById('cancel').style.display="none";
															  document.getElementById('subscribe').style.display="none";
										  // App.bediumContract.methods.transferToCompound('1000000000000000000').send({from:App.userAccount},(err,txh)=>{
										  // statusValue=96;
										  // putStatusValue(statusValue,"Thankyou! Subscribing You! Please wait...");
										  // }).on('receipt',(rc)=>{
  
										  //     statusValue=100;
										  //     putStatusValue(statusValue,"Done! Thankyou For Subscribing!!");
											  
										  //     App.bediumContract.methods.getPost(id).call({from:App.userAccount},(err,postDetails)=>{
									  
														
										  //                     document.getElementById('headingmessage').innerHTML="Subscribed!";
										  //                     document.getElementById('close').style.display="block";
										  //                     document.getElementById('cancel').style.display="none";
										  //                     document.getElementById('subscribe').style.display="none";
  
															  
										  //     });
										  // });
									  
									  });
				  });
  
		  });
  
  
  
		  document.getElementById('cancel').addEventListener('click',()=>{
			  window.location.href = "/myaccount";
		  });
  
  //****************************************************************************************************
  document.getElementById('transfer').addEventListener('click',()=>{
			   var toAddress=document.getElementById('toAddress').value;
			   document.getElementById('toaddressinputdiv').style.display="none";
			   document.getElementById('Tmessage').innerHTML="Transfering Subscription to "+toAddress+"....."; 
			   App.bediumContract.methods.transferSubscription(toAddress).send({from:App.userAccount},(err,result)=>{
  
			   }).on('receipt',(rc)=>{
				  document.getElementById('Tmessage').innerHTML="Subscription Transfered"; 
				  document.getElementById('Tclose').style.display="block";
				  document.getElementById('Tcancel').style.display="none";
				  document.getElementById('transfer').style.display="none";
			   });
  });
  
  //*************************************************************************************************************
  document.getElementById('userlikes').innerHTML=httpGetLikes("/getlikecount/"+App.userAccount);
  //**************************************************************************************************************************
  var likes=httpGetLikes("/getlikecount/"+App.userAccount);
  document.getElementById('getpaidbtn').addEventListener('click',()=>{
		  
		  App.bediumContract.methods.getNextPayTime().call({from:App.userAccount},(err,time)=>{
			if(time<=Math.floor(Date.now()/1000) && likes>10){
				App.bediumContract.methods.getPaid(likes).send({from:App.userAccount},(err,res)=>{
				  if(err){
					alert("ERROR! SOMETHING WENT WRONG!!");
				  }
				}).on('receipt',(rc)=>{
				  alert("TRANSFERED YOUR PAYEMENT, KEEP WRITING");
				}); 
  
			}
			else{
			  alert("ERROR: YOU ARE ALREADY PAID FOR THIS MONTH OR NOT ENOUGH LIKES!");
			}
		  })
  
  
  });
  //***************************************************************************************************************************
  App.bediumContract.methods.getPaidAmount().call({from:App.userAccount},(err,amount)=>{
	  document.getElementById('earnedAmount').innerHTML=amount+" DAI";
  }); 
//****************************************************************************************************
  function httpGetLikes(theUrl){
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
	xmlHttp.send( null );
	return JSON.parse(xmlHttp.responseText).likes;
}
	},
	codePublicProfile:async()=>{
		
		_userAddres=_userAddres.user;
		  var totalPost=0;
		  var posts=document.getElementById('posts');
		  var content="";
	
		  try{
		  App.bediumContract.methods.getUserTotalPosts(_userAddres).call({from:App.userAccount},(err,resu)=>
		  {
				console.log(resu);
				userpostcount.innerHTML=resu;
				App.bediumContract.methods.getUserPostsArray(_userAddres).call({from:App.userAccount},(err,arr)=>{
	
			  
					for(var i=0;i<resu;i++){
							App.bediumContract.methods.getPost(parseInt(arr[i])).call({from:App.userAccount},(err,result)=>{
							
							console.log(result[2]);
							var title=result[3];
							var imagehash=result[2];
								
							content=`<div class="col-lg-4 col-md-6">
											<div class="card h-100">
												<div class="single-post post-style-1">
	
												<video controls width="250">

											
												<source src="https://gateway.pinata.cloud/ipfs/`+result[3] +`">
											
												Sorry, your browser doesn't support embedded videos.
												</video>
	
													<div class="blog-info">
	
														<h4 class="title"><a href="/viewpost/`+result[0]+`/`+result[2]+`"><b>`+result[4]+`</b></a></h4>
	
														<ul class="post-footer">
															<li><a href="#"><i class="ion-heart"></i>`+httpGetLikes("/getlikecount/"+_userAddres)+`</a></li>
															<li><a href="#"><i class="ion-chatbubble"></i>6</a></li>
															<li><a href="#"><i class="ion-eye"></i>138</a></li>
														</ul>
	
													</div>
												</div>
											</div>
										</div>`
										posts.innerHTML+=content;
							});
	
					}
				
				});
			  
		  });
		  }catch(e){
			  console.log(e);
			  
		  }
//<div class="blog-image"><img src="https://gateway.ipfs.io/ipfs/`+result[3] +`"alt="Blog Image"></div>	
//<a class="avatar" href="#"><img src="images/icons8-team-355979.jpg" alt="Profile Image"></a>	
	//**************************************************************************************************      
	var name=document.getElementById('name');
		var userimage=document.getElementById('userimage');
		var usercoverimage=document.getElementById('usercoverimage');
		var userpostcount=document.getElementById('userpostcount');
		var ethaddress=document.getElementById('ethaddress');
		ethaddress.innerHTML=_userAddres;
	
		try{
		  console.log("working")
				App.bediumContract.methods.getUserDetails(_userAddres).call({from:App.userAccount},(err,user)=>{
				  console.log(user);
				console.log(user[0]);
				name.innerHTML=user[0];
				userimage.src="https://gateway.ipfs.io/ipfs/"+user[1];
				coverimage.src="https://gateway.ipfs.io/ipfs/"+user[2];
				});
		}catch(e){
				alert(e);
		}  
	
	document.getElementById('userlikes').innerHTML=httpGetLikes("/getlikecount/"+_userAddres);
	function httpGetLikes(theUrl){
				var xmlHttp = new XMLHttpRequest();
				xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
				xmlHttp.send( null );
				return JSON.parse(xmlHttp.responseText).likes;
		}
	},
	codeOpenPost:async()=>{

	},
	codeWritePost:async()=>{
		var simplemde = new SimpleMDE({ element: document.getElementById("tarea") });
          // setInterval(()=>{
          //     console.log(simplemde.value());
          // },3000);

//*********************************************************************************************************************            

          var barContainer=document.getElementById('statusBar');
          barContainer.style.display="none";

          var statusText=document.getElementById('proStatus');
          var probarDiv=document.getElementById('progressBar');
          var statusShowValue=document.getElementById('barStatusValue');
          var statusValue=0;

          var putStatusValue=function(val,text){
              proStatus.innerHTML=text;
              statusShowValue.innerHTML=val+"%";
              probarDiv.style.width=val+"%";  
          }
          var progressInterval;
          var updatebar=function(){
                          if(statusValue>=0 && statusValue<10){
                          putStatusValue(statusValue, "Connecting To Server...");
                          }
                          else if(statusValue>=10 && statusValue <60){
                              putStatusValue(statusValue, "Sending File to Ipfs and getting Hash....");
                          } 

                          else if(statusValue>=60 && statusValue <80){
                              putStatusValue(statusValue, "Connecting To Ethereum Netwrok....");
                          }

                          else if(statusValue>=80 && statusValue <=99){
                              putStatusValue(statusValue,"Uploading to Blockchain....");
                          }
                          else{
                              putStatusValue(100,"Done! Post Uploaded Successfully");
                              clearInterval(progressInterval);
                          }

                          statusValue++;

          }

          var startUpload=function(){
                  barContainer.style.display="block";            
                  progressInterval = setInterval(updatebar, 2000);
                  
              }
//********************************************************************************************************************************   
document.getElementById('post').addEventListener("click", ()=>{
	startUpload();
	var title=document.getElementById('title').value;
	var fd = new FormData();
	 var files = $('#image')[0].files[0];
	 fd.append('file',files);
	 fd.append('markdown',simplemde.value());
	 
	 $.ajax({
		 url: '/gethash',
		 type: 'post',
		 data: fd,
		 contentType: false,
		 processData: false,
		 success: function(response){
			 statusValue=65;
			 putStatusValue(statusValue,"Connecting To Ethereum Netwrok");
			 console.log(response);
			 if(response.markdownHash != "" && response.imageHash!=""){
				 
				 App.bediumContract.methods.setNewPost(response.markdownHash, response.imageHash, title).send({from:App.userAccount}, (err,transactionHash)=>{
					 if(err){
						 console.log(err);
					 }
					 statusValue=88;
					 putStatusValue(statusValue,"Updating Blockchain");
					 console.log(transactionHash);
				 }).on('receipt',(rc)=>{
				   statusValue=100;
				   putStatusValue(statusValue,"Done! Post Uploaded Successfully");
				 });

				 
			 }else{
				 alert('Something Went wrong');
			 }
		 },
	 });
});
	
    },
	loadProfile:async()=>{
		await App.loadWeb3();
		await App.loadAccount();
		await App.loadContracts();
		App.setLoading(true);
		await App.codeProfile();
		App.setLoading(false);
	},
	loadPublicProfile:async()=>{
		await App.loadWeb3();
		await App.loadAccount();
		await App.loadContracts();
		App.setLoading(true);
		await App.codePublicProfile();
		App.setLoading(false);
	},
	loadIndex:async()=>{
		await App.loadWeb3();
		await App.loadAccount();
		await App.loadContracts();
		App.setLoading(true);
		await App.codeIndex();
		App.setLoading(false);
	},
	loadWritePost:async()=>{
		await App.loadWeb3();
		await App.loadAccount();
		await App.loadContracts();
		App.setLoading(true);
		await App.codeWritePost();
		App.setLoading(false);
	},
	loadOpenPost:async()=>{
		await App.loadWeb3();
		await App.loadAccount();
		await App.loadContracts();
		App.setLoading(true);
		await App.codeOpenPost();
		App.setLoading(false);
	}
};


// web3.eth.getAccounts().then((accounts)=>{
// 	App.userAccount=accounts[0];
// 	console.log(App.userAccount);
// })






// var web3=null;
// if(Web3.givenProvider==null){
//     alert("Please Install Metamask")
// }
// else
// {
//    window.ethereum.enable();
//    web3=new Web3(Web3.givenProvider);
//    console.log(window.web3.currentProvider.isMetaMask);
// }

// var App.userAccount ="";
// web3.eth.getAccounts().then((accounts)=>{
// 	App.userAccount=accounts[0];
// 	console.log(App.userAccount);
// })




