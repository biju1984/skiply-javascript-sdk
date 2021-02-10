const mockApi ='https://us-central1-rak-slack-poc.cloudfunctions.net/webApi/api/v1/mock-accounts';
const fetch = require("node-fetch");

// Defining async function 
async function getApi(mockApi) { 
    
    // Storing response 
    const response = await fetch(mockApi); 
    // Storing data in form of JSON 
    var data = await response.json(); 
    return data; 
} 
// Calling that async function 
async function doLogin(userName,pass){
    const backData = await getApi(mockApi);
    
    const result = backData.loginCred.filter(i=>i.userName===userName && i.password === pass);
    if (result.length===0) {
        return false;
    }
    else{
    return true;
    }
}
module.exports = doLogin;