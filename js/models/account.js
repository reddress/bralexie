var app = app || {};

(function() {
  'use strict';

  app.Account = Backbone.Model.extend({
    defaults: {
      accountType: 'sem tipo',
      name: 'Conta sem nome',
      balance: 0,
    },

  });
})();

      
