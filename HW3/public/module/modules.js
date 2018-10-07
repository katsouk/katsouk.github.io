var ui = {};

ui.navigation = `

<nav class="navbar navbar-expand-lg navbar-dark bg-info mb-3">
<a class="navbar-brand" href="#" onclick="defaultModule()">Bad Bank</a>

<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <div class="navbar-nav">
        <a class="nav-item nav-link" href="#" id="createAccount" onclick="loadCreateAccount()">Create Account</a>
        <a class="nav-item nav-link" href="#" id="Login" onclick="loadLogin()">Login</a>
        <a class="nav-item nav-link" href="#" id="Deposit" onclick="loadDeposit()">Deposit</a>
        <a class="nav-item nav-link" href="#" id="Withdraw" onclick="loadWithdraw()">Withdraw</a>
        <a class="nav-item nav-link" href="#" id="Transactions" onclick="loadTransactions()">Transactions</a>
        <a class="nav-item nav-link" href="#" id="Balance" onclick="loadBalance()">Balance</a>
        <a class="nav-item nav-link" href="#" id="AllData" onclick="loadAllData()">All Data</a>
    </div>
    </div>
</nav>
`;

ui.createAccount = `

<div class="card bg-light mb-3" style="max-width: 40rem;">
  <div class="card-header">Create a new account</div>
  <div class="card-body">
    <p class="card-text">
    
    <form>
        <div class="form-group row">
        <label for="createName1" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
            <input type="name" class="form-control" id="createName" placeholder="Name">
            </div>
        </div>

        <div class="form-group row">
        <label for="createEmail1" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
                <input type="email" class="form-control" id="createEmail" placeholder="Email">
            </div>
        </div>

        <div class="form-group row">
        <label for="createPassword1" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
            <input type="password" class="form-control" id="createPassword" placeholder="Password">
            </div>
        </div>

        <div class="form-group row">
            <div class="col-sm-10">
            <button type="submit" class="btn btn-primary" onclick="create()">Create Account</button>
            <div id="status"></div>
            </div>
        </div>
    </form>
    
    </p>
  </div>
</form>


`;

ui.login = `

<form onsubmit="login()">

<div class="card bg-light mb-3" style="max-width: 40rem;">
  <div class="card-header">Log in to your account</div>
  <div class="card-body">
    <p class="card-text">
    
    <form>
    <div class="form-group row">
    <label for="loginEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
            <input type="email" class="form-control" id="loginEmail" placeholder="Email">
        </div>
    </div>

    <div class="form-group row">
    <label for="loginPassword" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
        <input type="password" class="form-control" id="loginPassword" placeholder="Password">
        </div>
    </div>

    <div class="form-group row">
        <div class="col-sm-10">
        <button type="submit" class="btn btn-primary" onclick="login()">Login</button>
        <div id="status"></div>
        </div>
    </div>
</form>    
    </p>
  </div>
</form>

`;

ui.deposit = `

<form onsubmit="deposit()">

<div class="card bg-light mb-3" style="max-width: 40rem;">
  <div class="card-header">Deposit funds</div>
  <div class="card-body">
    <p class="card-text">
    
    <form>
    <div class="form-group row">
    <label for="depositEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
            <input type="email" class="form-control" id="depositEmail" placeholder="Email">
        </div>
    </div>

    <div class="form-group row">
    <label for="depositEmail" class="col-sm-2 col-form-label">Amount</label>
        <div class="col-sm-10">
        <input type="number" class="form-control" id="depositAmount" placeholder="Amount">
        </div>
    </div>

    <div class="form-group row">
        <div class="col-sm-10">
        <button type="submit" class="btn btn-primary" onclick="deposit()">Deposit</button>
        <div id="status"></div>
        </div>
    </div>
</form>    
    </p>
  </div>
</form>

`;

ui.withdraw = `

<form onsubmit="withdraw()">

<div class="card bg-light mb-3" style="max-width: 40rem;">
  <div class="card-header">Withdraw funds</div>
  <div class="card-body">
    <p class="card-text">
    
    <form>
    <div class="form-group row">
    <label for="inputEmail1" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
            <input type="email" class="form-control" id="withdrawEmail" placeholder="Email">
        </div>
    </div>

    <div class="form-group row">
    <label for="inputAmount" class="col-sm-2 col-form-label">Amount</label>
        <div class="col-sm-10">
        <input type="number" class="form-control" id="withdrawAmount" placeholder="Amount">
        </div>
    </div>

    <div class="form-group row">
        <div class="col-sm-10">
        <button type="submit" class="btn btn-primary" onclick="withdraw()">Withdraw</button>
        <div id="status"></div>
        </div>
    </div>
</form>
    
    
    </p>
  </div>
</form>

`;

ui.transactions = `

<form onsubmit="transactions()">

<div class="card bg-light mb-3" style="max-width: 40rem;">
  <div class="card-header">Show past transactions</div>
  <div class="card-body">
    <p class="card-text">
    
    <form>
    <div class="form-group row">
    <label for="inputEmail1" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
            <input type="email" class="form-control" id="transactionsEmail" placeholder="Email">
        </div>
    </div>
    <div class="form-group row">
        <div class="col-sm-10">
        <button type="submit" class="btn btn-primary" onclick="transactions()">Show Transactions</button>
        <div id="status"></div>
        </div>
    </div>

    </form>
    
    
    </p>
  </div>
</form>

`;

ui.balance = `

<form onsubmit="balance()">

<div class="card bg-light mb-3" style="max-width: 40rem;">
  <div class="card-header">Check account balance</div>
  <div class="card-body">
    <p class="card-text">
    
    <form>
    <div class="form-group row">
    <label for="inputEmail1" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
            <input type="email" class="form-control" id="balanceEmail" placeholder="Email">
        </div>
    </div>
    
    <div class="form-group row">
    <div class="col-sm-10">
    <button type="submit" class="btn btn-primary" onclick="balance()">Show Balance</button>
    <div id="status"></div>
    </div>
    </div>
    </form>
    </p>
  </div>
</form>

`;

ui.default = `

<div class="card bg-light mb-3" style="max-width: 18rem;"><div align="center">
  <div class="card-header">Welcome to Bad Bank</div>
  <div class="card-body">
    <h4 class="card-text">Why be average when you can be <b>BAD</b>?</p>
    <br>
    <img class="card-img-bottom" src="bank.png" alt="Bad Bank">
  </div></div>
</form>

`;

ui.allData = `

<form onsubmit="allData()">

<div class="card bg-light mb-3" style="max-width: 40rem;">
  <div class="card-header">Review all data</div>
  <div class="card-body">
    <p class="card-text">
    
    <form>
    <div class="form-group row">
    <label for="inputEmail1" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
            <input type="email" class="form-control" id="alldataEmail" placeholder="Email">
        </div>
    </div>

    <div class="form-group row">
        <div class="col-sm-10">
        <button type="submit" class="btn btn-primary" onclick="allData()">Show All Data</button>
        </div>
    </div>
</form>

    
    </p>
  </div>
</form>

`;

var target     = document.getElementById('target');
var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;



var loadCreateAccount = function(){
    target.innerHTML = ui.createAccount;
};

var loadLogin = function(){
    target.innerHTML = ui.login;
};

var loadDeposit = function(){
    target.innerHTML = ui.deposit;
};

var loadWithdraw = function(){
    target.innerHTML = ui.withdraw;
};

var loadTransactions = function(){
    target.innerHTML = ui.transactions;
};

var loadBalance = function(){
    target.innerHTML = ui.balance;
};

var defaultModule = function(){
    target.innerHTML = ui.default;
};

var loadAllData = function(){
    target.innerHTML = ui.allData;
};

defaultModule();
