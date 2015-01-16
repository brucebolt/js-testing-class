var app = {};

app.Account = function Account(balance) {
  this._balance = balance;
};

app.Account.prototype = {
  deposit: function (n) {
    this._balance += n;
    return this._balance;
  },
  balance: function () {
    return this._balance;
  },
  withdraw: function (n) {
    this._balance -= n;
    return this._balance;
  },
};

if(typeof module != "undefined") {
  module.exports = app;
}

