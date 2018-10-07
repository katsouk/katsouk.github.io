function create() {
    // -------------------------------------
        var name     = document.getElementById("createName").value;
        var email    = document.getElementById("createEmail").value;
        var password = document.getElementById("createPassword").value;
        var status   = document.getElementById('status');    

        var url = '/account/create/' + name + '/' + email + '/' + password;
        
        console.log(name);
        console.log(email);
        console.log(password);
        console.log(url);
        
        superagent
        .get(url)
        .end(function(err, res){
            if(err){console.log(err)}
            else{console.log(res);
                status.innerHTML = JSON.stringify(res.body)
                showAlert(res.text,'Success');
            }
        });
    };
    // -------------------------------------  
    function login() {

        var email    = document.getElementById('loginEmail');
        var password = document.getElementById('loginPassword');
        var status   = document.getElementById('status');    
        var url      = '/account/login/' + email + '/' + password;

        console.log(email);
        console.log(password);
        console.log(status);

        superagent
        .get(url)
        .end(function(err, res){
            if(err){console.log(err)}
            else{console.log(res);
                status.innerHTML = JSON.stringify(res.text)
                showAlert(res.text,'Success');
            }
        });  
    };
    
    function deposit() {
        // -------------------------------------
        var email    = document.getElementById("depositEmail").value;
        var amount   = document.getElementById("depositAmount").value;
        var status   = document.getElementById('status').value;    
        var url      = '/account/deposit/' + email + '/' + amount;
    
        console.log(email);
        console.log(amount);
        console.log(status);

        superagent
        .get(url)
        .end(function(err,res){
            if(err){console.log(err);}
            else {console.log(res);}
            status.innerHTML = JSON.stringify(res.text);
    });
    }
    
    function withdraw() {
        // -------------------------------------
        var status   = document.getElementById('status').value;    
        var email    = document.getElementById("withdrawEmail").value;
        var amount   = document.getElementById("withdrawAmount").value;
        var url      = '/account/withdraw/' + email + '/' + amount;
    
        console.log(email);
        console.log(amount);
        console.log(status);

        superagent
        .get(url)
        .end(function(err,res){
            if(err){console.log(err);}
            else {console.log(res);}
            status.innerHTML = JSON.stringify(res.text);
        });
    }
    
    function transactions() {
        // -------------------------------------
        var status   = document.getElementById('status').value;    
        var email    = document.getElementById("transactionsEmail").value;
        var url      = '/account/transactions/' + email;
    
        console.log(email);
        console.log(status);

        superagent
        .get(url)
        .end(function(err,res){
            if(err){console.log(err);}
            else {console.log(res);}
            status.innerHTML = JSON.stringify(res.text);
        });
    }
    
    function balance() {
        // -------------------------------------
        var status   = document.getElementById('status').value;    
        var email    = document.getElementById("balanceEmail").value;
        var url      = '/account/balance/' + email;
    
        console.log(email);
        console.log(status);

        superagent
        .get(url)
        .end(function(err,res){
            if(err){console.log(err);}
            else {console.log(res);}
            status.innerHTML = JSON.stringify(res.text);
        });
    }
    
    function allData() {
        // -------------------------------------
            var status  = document.getElementById('status');
            var url     = '/account/all';
    
            console.log(url);
            console.log(status);

            superagent
            .get(url)
            .end(function(err,res){
                if(err){console.log(err);}
                else {console.log(res);}
                status.innerHTML = JSON.stringify(res.body);
            });
    }
    
    
