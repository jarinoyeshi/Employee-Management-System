const axios = require('axios');

exports.index=  (req, res) =>{
    res.render('index');
}

exports.home=  (req, res) =>{
        // Make a get request to /api/users
        axios.get('http://localhost:3000/api/users')
        .then(function(response){
            res.render('home', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.updateUser = (req, res) =>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("updateUser", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.addUser=  (req, res) =>{
    res.render('addUser');
}

exports.deleteUser=  (req, res) =>{
    axios.get('http://localhost:3000/api/users')
    .then(function(response){
        res.render('home', { users : response.data });
    })
    .catch(err =>{
        res.send(err);
    })

}

exports.updateUser=  (req, res) =>{
    res.render('updateUser');
}

