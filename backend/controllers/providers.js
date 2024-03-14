const providers = require( '../models/providers' );

//list form
module.exports.list = function(req, res){
    res.render('providers/providers', {
        title: "Service Providers",
        providers : providers
    });
}

//details form
module.exports.details = function(req, res){
    let id = req.params.id;  // get the provider ID from the URL parameter
    let provider = providers.find( provider => provider.id == id );   // find the provider with that ID in our list
    res.render('providers/providers-details', {
        id: id,
        title: "Providers Details",
        company : provider.company
    })
}

//edit form
module.exports.edit = function(req, res){
    let id = req.params.id;  // get the provider ID from the URL parameter
    let provider = providers.find( provider => provider.id == id );   // find the provider with that ID in our list
    res.render('providers/providers-edit', {
        id: id,
        title: "Edit",
        provider : provider
    });
}

//update form
module.exports.update = function(req, res){
    let id = req.params.id;  // get the provider ID from the URL parameter
    let provider = providers.find( provider => provider.id == id );   // find the provider with that ID in our list

    provider.firstname = req.body.firstname;
    provider.lastname = req.body.lastname;
    provider.position = req.body.position;
    provider.company.company_name = req.body.company_name;
    provider.company.address = req.body.address;
    provider.company.address2 = req.body.address2;
    provider.company.city = req.body.city;
    provider.company.state = req.body.state;
    provider.company.postal_code = req.body.postal_code;
    provider.company.phone = req.body.phone;
    provider.company.email = req.body.email;
    provider.company.description = req.body.description;
    provider.company.tagline = req.body.tagline;
   

    
    res.render('providers/providers-update', {
        id: id,
        title: "Update",
        provider : provider
    });
}


//add form
module.exports.addform = function(req, res){
    res.render('providers/providers-add-form', {
        title: "Add",
    });
}

//add provider
module.exports.add = function(req, res){
    //create a random id
    let min = 100000;
    let max = 999999;
    let id = Math.floor(Math.random() * (max - min + 1) ) + min;
     
   //create new provider object
   let provider = {
    id: id,
    firstname: req.body.firstname, 
    lastname: req.body.lastname,
    position :req.body.position,
    company : {
        company_name : req.body.company_name,
        address : req.body.address,
        address2 : req.body.address2  ,       
        city : req.body.city,   
        state : req.body.state,      
        postal_code : req.body.postal_code,
        phone : req.body.phone,       
        email : req.body.email,       
        description : req.body.description,
        tagline : req.body.tagline    
    
    }
}
    //add new provider to list
    providers.push(provider);
    res.render('providers/providers-add', {
        title: 'Added successfully'
    })
}
/*****************************delete PROVIDER DETAILS***********************************/
module.exports.delete = function(req, res){
    let id = req.params.id;  // get the provider ID from the URL parameter
    let provider = providers.find( provider => provider.id == id )   // find the provider with that ID in our list
    let company = provider.company.company_name;
    let idx = providers.indexOf(providers.find(providers => providers.id == id));// find the index of the provider
    //remove the element at the index of "idx"
    providers.splice(idx,1);
    
    res.render('providers/providers-delete', {
        title: "Delete",
        company : company
    });
}