// SERVER
    var express = require('express');
    var app     = express();
    var low     = require('lowdb');
    var fs      = require('lowdb/adapters/FileSync');
    var adapter = new fs('db.json');
    var db      = low(adapter);

// DIRECTORY
    app.use(express.static('public'));

    // DATA STRUCTURE (JSON)
    db.defaults({accounts:[
        {name       : 'Kate Soukup',
        email       : 'ksoukup@mit.edu',
        balance     : 0,
        password    : 'password',
        transactions: []}
    ]}).write();
 
//Create Accounts tab
    app.get('/account/create/:name/:email/:password', function (req, res){   

        var name        = req.params.name;
        var email       = req.params.email;
        var password    = req.params.password;
        //var exists;       
        //var error;

        try{
            db.get('accounts').push({account}).write();      
            res.send('Created account: ' + email);
          }catch (e) {
            res.send('Could not create ' + email);
          }
      });

//Create Login tab
    app.get('/account/login/:email/:password', function (req, res) {

    var email       = req.params.email;
    var password    = req.params.password;

    try{
      var account = db.get('accounts').find({email:email, password:password}).value();
      if(account == null){
        res.send('Could ot find ' + email);
      } 
      else{
        res.send('Successfully logged into ' + email);
      }
    }catch(e) {
      res.send('Failed to access ' + email);
    }
    });

//Get email address
    app.get('/account/get/:email', function (req, res) {

    var email       = req.params.email;

    try{
        var account = db.get('accounts').find({email:email}).value();
        res.send(account);
        if(account ==null)
            {res.send('Could ot find ' + email);}
        else
            {res.send(account);}
    }
    catch (e) 
        {res.send('Failed to access ' + email);}
});

//Deposit money
    app.get('/account/deposit/:email/:amount', function (req, res) {
        
    var email          = req.params.email;
    var newamount      = req.params.amount;
    var transactions   = account.transactions;

    try{
      var account = db.get('accounts').find({email:email}).value();
      //console.log(account);
      if(account == null){
        {res.send('Could not find ' + email);}
      }else{
        var newamount = parseInt(account.balance) + parseInt(newamount);
        transactions.push({Action: 'Deposit', Amount: newamount,  Description: "Deposited " + newamount})
        account = db.get('accounts')
            .find({ email: email })
            .assign({balance: newamount, transactions: transactions})
            .write();
        res.send('Deposited ' + newamount);
      }
    }catch (e) {
      res.send('Error');
    }
});

//Withdraw Money

app.get('/account/withdraw/:email/:amount', function (req, res) {

    var email          = req.params.email;
    var newamount      = req.params.amount;
    var transactions   = account.transactions;

    try{
      var account = db.get('accounts').find({email:email}).value();
      //console.log(account);
      if(account == null){
        {res.send('Could not find ' + email);}
      }else{
        var newamount = parseInt(account.balance) - parseInt(newamount);
        transactions.push({Action: 'Withdraw', Amount: newamount,  Description: "Withdrew " + newamount})
        account = db.get('accounts')
            .find({email:email})
            .assign({balance: newamount, transactions: transactions})
            .write();
        res.send('Withdrew ' + newamount);
      }
    }catch (e) {
      res.send('Error');
    }
});
//All Data Tab
    app.get('/account/all', function (req, res) {
    
    var accounts = db.get('accounts').value();
    res.send(accounts);
    }); 

app.listen(80, function(){
  console.log('Running on port:80');
});
