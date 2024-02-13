var Cxgroup;
const Products = [''];

var storeId = 98501509;
var public_token = 'Bearer public_PUb7yJJDWc5RYj1nL7aXHJFT5j5bn2hW';
var requestURLGroups = 'https://app.ecwid.com/api/v3/'+storeId+'/customer_groups';
//Get the customer groups
function getGroups(){
    const grOPT = {
        method: 'GET',
        headers: {accept:'application/json', Authorization public_token}
    };
    
    fetch(requestURLGroups, grOPT)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    
    //Some magic or some shit
}
const Groups = getGroups();
    
//Get the products to be enabled and disabled
function getProducts(){
    const productOPT = {
        method: 'GET',
        headers: {accept:'application/json', Authorization public_token}
    };
    
    fetch(requestURLGroups, productOPT)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}