//setup server
var express = require('express');
var app     = express();
var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

// configure express to serve static files from public directory
// ------------------------------------------------------------------
app.use(express.static('public'));

// required data store structure
// YOUR CODE

db.defaults(
    {accounts:[
            {name        : '',
             email       : '',
             balance     : 0,
             password    : '',
             transactions: []
            }]
    }).write();


    app.get('/account/create/:name/:email/:password', function (req, res) {

        var account = {
            "name"          : name, 
            "email"         : email, 
            "balance"       : 0, 
            "password"      : password, 
            "transactions"  : []
        };

        db.get('accounts').push(account).write();
        console.log(db.get('accounts').value());
        res.send(db.get('accounts').value());

    });
        /*
        
        var name        = req.params.name;
        var email       = req.params.email;
        var password    = req.params.password;
        var currentacct = getAccount(email, {email: email});

        
        if(currentacct.indexOf(email) >= 0){
            console.log('Account already exists');
            res.send('Account already exists');
            return;
        

    
    

        app.get('/account/login/:email/:password', function (req, res) {
            try{
              var account = db.get('accounts').find({email:req.params.email, password:req.params.password}).value();
              if(account ==null){
                res.send('Account not found for '+req.params.email);
              }else{
                res.send(account);
              }
        
            }catch (e) {
              res.send('Account of '+req.params.name+ ' failed :'+e.message);
            }
        });
        

        
        // return success or failure string


        /*
        try{
          db.get('accounts').push({name:req.params.name,email:req.params.email, balance:0, password:req.params.password,transactions:[]}).write();
          res.send('Account of '+req.params.name+ ' created');
        }catch (e) {
          res.send('Account of '+req.params.name+ ' failed :'+e.message);
        }
    });
*/


  /*
    var accounts = {
            "name"          : req.params.name;
            "email"         : req.params.email;
            "balance"       : 0
            "password"      : req.params.password;
            "transactions"  : req.params.transactions;
          };

    var acctstatus = getAccount(email, req.params.email);

    if(acctstatus != null){
        res.send(name + " already exists.");
        return;

)};
*/






// start server
// -----------------------
app.listen(80, function(){
    console.log('Running on port 80')
})