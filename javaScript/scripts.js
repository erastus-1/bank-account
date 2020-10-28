$(document).ready(function () {
function Account(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  Account.prototype.balance = function () {
    return this.name + " " + this.balance + "" + this.deposit;
  }
  
  Account.prototype.deposit = function() {
      this.balance += depositAmount;
      console.info(`Deposit: ${this.name} new balance is ${this.balance}`);
      return true;
  }
      if(deposit===undefined){
        document.getElementById("current").innerHTML=""
    } else {
        document.getElementById("current").innerText=`${name} your account balance is ${balance}`
    }

  Account.prototype.withdraw = function() {
    if (this.balance -= withdrawAmount) {     
      console.info(`Withdraw: ${this.name} new balance is ${this.balance}`);
      return true;
    } else (this.balance < withdrawAmount); {
        console.log("this.name + you have insufficient funds")
    }
    return false;
  }

  if(withdraw===undefined){
    document.getElementById("current").innerHTML=""
} else {
    document.getElementById("current").innerText=`${name} your account balance is ${balance}`
}
  $("#Account").submit(function (event) {
    event.preventDefault();
    var nameEntered = $("#name").val();
    var balanceEntered = $("#balance").val();
    var depositEntered = $("#deposit").val();
    var withdrawEntered = $("#withdraw").val();
    name = nameEntered;
    balance = balanceEntered;
    deposit = depositEntered;
    withdraw = withdrawEntered

    if(balance===undefined){
        document.getElementById("current").innerHTML=""
    } else {
        document.getElementById("current").innerText=`${name} your account balance is ${balance}`
    }
  })

})