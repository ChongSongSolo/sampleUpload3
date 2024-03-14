var providers = require('../models/providers.models');

//util funcitons
// check if list is empty
function isEmptyList(obj){
    return(!obj || obj.lenght == 0 ||  Object.keys(obj).length === 0) ;
}

//check for existing provider
function existsProvider(id){
    return providers.find( provider => provider.id == id);
}

//generate unique provider ID
function getUniqueId(providers){
    //create a random id
   let min = 100000;
   let max = 999999;
do{
    var id = Math.floor(Math.random() * (max - min + 1) ) + min;
} while(existsProvider(id));
   return  id;
}

// crud = create(post), read(get), update(put/patch), delete(delete)

//post
//uri: /api/providers
module.exports.create = function(req, res){
   // create reandom ID
   if (isEmptyList(req.body)){
    providers = []; 
   }

   var id = req.body.id;
   if (existsProvider(id)){
    res.status(400);
    res.send('Duplicate ID are not allowed.')
    id = getUniqueId(); //get new ID
   }

   var provider = req.body;  //get new provider
   provider.id = id;
  
    
  //create new provider object
//   let provider = {
//    id: id,
//    firstname: req.body.firstname, 
//    lastname: req.body.lastname,
//    position :req.body.position,
//    company : {
//        company_name : req.body.company.company_name,
//        address : req.body.company.address,
//        address2 : req.body.company.address2  ,       
//        city : req.body.company.city,   
//        state : req.body.company.state,      
//        postal_code : req.body.company.postal_code,
//        phone : req.body.company.phone,       
//        email : req.body.company.email,       
//        description : req.body.company.description,
//        tagline : req.body.company.tagline    
//    }
//  }
    providers.push(provider);
    res.status(200);
    res.send(providers);
}


//get all
//uri: /api/providers
module.exports.readAll = function(req, res){
    res.status(200);
    res.send(providers);

}

//get one
//uri: /api/providers/123
module.exports.readOne = function(req, res){
    let id = req.params.id;  // get the provider ID from the URL parameter
    let provider = providers.find( provider => provider.id == id );   // find the provider with that ID in our list
    res.status(200);
    res.send(provider);
}


//put
//uri: /api/providers/123
module.exports.update = function(req, res){
    let id = req.params.id;  // get the provider ID from the URL parameter
    let provider = providers.find( provider => provider.id == id );   // find the provider with that ID in our list

    provider.firstname = req.body.firstname;
    provider.lastname = req.body.lastname;
    provider.position = req.body.position;
    provider.company.company_name = req.body.company.company_name;
    provider.company.address = req.body.company.address;
    provider.company.address2 = req.body.company.address2;
    provider.company.city = req.body.company.city;
    provider.company.state = req.body.company.state;
    provider.company.postal_code = req.body.company.postal_code;
    provider.company.phone = req.body.company.phone;
    provider.company.email = req.body.company.email;
    provider.company.description = req.body.company.description;
    provider.company.tagline = req.body.company.tagline;
   

    
    res.status(200);
    res.send(provider);

}

//delete one
//uri: /api/providers/123
module.exports.deleteOne = function(req, res){
    let id = req.params.id;  // get the provider ID from the URL parameter
    let provider = providers.find( provider => provider.id == id );   // find the provider with that ID in our list
    let idx = providers.indexOf(provider);// find the index of the provider

    //remove the element at the index of "idx"
    providers.splice(idx,1);
    
    res.status(200);
    res.send(provider);
}

//delete All
//uri: /api/providers/
module.exports.deleteAll = function(req, res){
    providers=[];
    res.send("all deleted");
}

