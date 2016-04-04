var app = app || {};

(function() {
  'use strict';

  var accountTypeSigns = {
    'bens': 1,
    'despesas': 1,
    'obrigacoes': -1,
    'receitas': -1,
    'patrimonio': -1,
    
    'sem tipo': 1,  // FIXME change to 0 later
  };
  
  app.Account = Backbone.Model.extend({
    defaults: {
      accountType: 'sem tipo',
      name: 'Conta sem nome',
      balance: 0,
    },

    debit: function(amount) {
      console.log(this.account);
      var currentBalance = this.get('balance');
      this.set('balance', currentBalance +
               (accountTypeSigns[this.get('accountType')] * amount));
      this.save();
    },

    credit: function(amount) {
      this.debit(-amount);
    },
  });
})();

      
