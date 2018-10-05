function create() {
    // -------------------------------------
        var name     = document.getElementById("createName").value;
        var email    = document.getElementById("createEmail").value;
        var password = document.getElementById("createPassword").value;
        var status   = document.getElementById('status');    

        var url = '/account/create/' + name + '/' + email + '/' + password;
        
        //console.log(name);
        //console.log(email);
        //console.log(password);
        //console.log(url);
        
        superagent
        .get(url)
        .end(function(err, res){
            if(err){console.log(err)}
            else{console.log(res);
                status.innerHTML = JSON.stringify(res.body)
                showAlert(res.body,'Success');
            }
        });  
    }
    // -------------------------------------  
    function login() {

        var email     = document.getElementById('email');
        var password = document.getElementById('password');
      superagent.get('/account/login/'+email.value+'/'+password.value)
      .then(function(res) {
        console.log(res);
        if(res.type == 'text/html'){
          showAlert(res.text,'Warning');
        }
        else{
          showAlert(JSON.stringify(res.body),'Success');
        }
      });
    }