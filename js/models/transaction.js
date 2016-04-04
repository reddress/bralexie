var app = app || {};

(function() {
  'use strict';

  app.Transaction = Backbone.Model.extend({
    defaults: {
      description: 'Transação sem nome',
      amount: 0,
      debit: 0,
      credit: 0,
      date: '2000-01-01 00:01',
    },
  });
})();
    
