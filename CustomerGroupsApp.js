//Initialize
EcwidApp.init({
    app_id:'customer-group-pricing',
    autoloadedflag:true,
    autoheight:true,


});
EcwidApp.ready();
//Get Store Data
// var storeData = EcwidApp.getPayload();
// var storeId = storeData.access_token;
// var language = storeData.lang;
// var ViewMode = storeData.view_mode;
var xhttp = new XMLHttpRequest();
var storeId = 98501509;
var public_token = 'Bearer public_PUb7yJJDWc5RYj1nL7aXHJFT5j5bn2hW';


function startApp(){
    var requestURL = 'https://app.ecwid.com/api/v3/'+storeId+'/customer_groups';
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", requestURL, true);
    xhttp.setRequestHeader("Authorization", public_token)
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
        var apiResponse = xhttp.responseText;
        console.log(apiResponse); // prints response in format of Search Products request in Ecwid API
        }
    };
//Determine if theres a public and private token
    if(storeData.public_token !== undefined){
        var publicToken = storeData.public_token;

    }
    if(storeData.private_token !== undefined){
        var privateToken = storeData.private_token;
    }
    if(storeData.app_state !== undefined){
        var appState = storeData.app_state;
    }
}


//////////////////////////////////////////////////////////
//For User/App verification and data saving/loading






//For a new user who installs the app
function saveSettings(cx_GrID){
    //Saves data for app storage
    

}
// Executes if we have a user who logs in to the app not the first time. We load their preferences from Application storage with Ecwid JS SDK and display them in the app interface
function getCustomer(){
    // Retrieve all keys and values from application storage, including public app config. Set the values for select, input and textarea elements on a page in a callback
    EcwidApp.getAppStorage(function(allValues){
        setValuesForPage(allValues);
    });
}
function displayForGroup(grID){
    //displays the categories for the customer based on their group id
    //For regular customers group ID 0
    //const cats = ['163181566','163191831','163183556','163184815','163184814','163191832', '163191833', '163196808']; //Category ID's


    if(grID = '0'){
        
        for(let i = 0; i < cats.length; i++){
            var currentCat = cats[i];
            var requestURL = 'https://app.ecwid.com/api/v3/'+storeId+'/categories/'+currentCat;
            var xhttp = new XMLHttpRequest();
            xhttp.open("PUT", requestURL, true);
            xhttp.setRequestHeader("Authorization", private_token)
            xhttp.send();
    
            xhttp.onreadystatechange = function() {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                var apiResponse = xhttp.responseText;
                console.log(apiResponse); // prints response in format of Search Products request in Ecwid API
                }
            };
        }
    }
    //For Blooms
    if(grID = '23865254'){

    }
    //For Blooms tier 2
    if(grID = '23865251'){

    }
    //For plumbers
    if(grID = '23865252'){

    }
}
// Executes when we need to save data. Gets all elements' values and saves them to Application storage and public app config via Ecwid JS SDK

//Main app function to determine if the user is new or just logs into the app
EcwidApp.getAppStorage('installed', function(value){
    if(value!=null){
        getUserData();
    }else{
        createUserData();
    }

})


////////////////////////////////////////////////////
//For the actual customer pricing information

var cxGroups;
var categories = '';
//Function to get Customer Groups
function getCxGroups(id){
    //document.querySelector()
    const options = {
        method: 'GET',
        headers: {accept: 'application/json', Authorization: 'Bearer e***s0'}
      };
      
      fetch('https://app.ecwid.com/api/v3/'+storeId+'/customer_groups', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
        cxGroups = stringify(response);

}

//Function to get Categories 
function getCategories(){
    var requestURL = 'https://app.ecwid.com/api/v3/'+storeId+'/categories';
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", requestURL, true);
    xhttp.setRequestHeader("Authorization", token)
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
        var apiResponse = xhttp.responseText;
        console.log(apiResponse); // prints response in format of Search Products request in Ecwid API
        }
    };
}
//Function to find what cateogires are applied to what groups
function matchCategories(cx_id,categoryData){

}
//Function to display categories, will be in for loop
function hideCategories(cx_id,categories){
    //Finds the categories that are marked hi_{cx_id} and hides them with css code
}
//Update/Save category data
function saveCategories(cx_id,catData){

}
//run calculations

if(cxGroups !== ''){
    //Gets list of categories
    
    //Finds what categories are applied to the customer group

    //Displays Categories

    //When the save button is pressed updates the categories that have been selected
    var selGroup=document.getElementById("groupOptions");
    for(var i = 0; i < cxGroups.length; i++){
        var opt = options[i];
        var ops = document.createElement("option");
        ops.textContent = opt;
        ops.value = opt;
        selGroup=appendChild(ops);
    }

}else{
    
    
}