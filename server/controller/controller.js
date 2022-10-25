

var Userdb = require('../model/model');

// create and save new user
exports.create = (req,res)=>{
        // validate request
        if(!req.body){
            res.status(400).send({ message : "Content can not be emtpy!"});
            return;
        }
    
        // new user
        const user = new Userdb({
            userid : req.body.userid,
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            phoneNumber: req.body.phoneNumber,
            email : req.body.email
        })
    
        // save user in the database
        user
            .save(user)
            .then(data => {
                //res.send(data)
                res.redirect('/addUser');
                console.log("user addes");
            })
            .catch(err =>{
                res.status(500).send({
                    message : err.message || "Some error occurred while adding user"
                });
            });



}

// retrieve and return all users/ retrive and return a single user
exports.find = (req, res)=>{
    Userdb.find()
    .then(user =>{
        res.send(user)
    })
    .catch(err=>{
        res.status(500).send({message:err.message||"cannot find data"})
    })
    
}

// Update a new idetified user by user id
exports.update = (req, res)=>{
    console.log("I dont know anything");

}

// Delete a user with specified user id in the request





exports.delete = (req, res)=>{
    const id = req.params.id;
    console.log("I dont know ");

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });

}