function getAccountInfo(data){
 
 console.log("getAccountInfo", data);
 let account = null;
 
 if(data.hasOwnProperty("to"))
  account = data.to;
 if(data.hasOwnProperty("from"))
  account = data.from;
 if(data.hasOwnProperty("account"))
  account = data.account;
 if(data.hasOwnProperty("owner"))
  account = data.owner;
 if(data.hasOwnProperty("voter"))
  account = data.voter;
 if(data.hasOwnProperty("receiver"))
  account = data.receiver;
 if(data.hasOwnProperty("poster"))
  account = data.poster;
 if(data.hasOwnProperty("proposer"))
  account = data.proposer;
 
 return account; 
}


//Exporting functions
module.exports.getAccountInfo = getAccountInfo;
