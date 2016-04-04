var app = app || {};

(function() {
  'use strict';

  var Accounts = Backbone.Collection.extend({
    model: app.Account,

    localStorage: new Backbone.LocalStorage('bralexie-accounts'),

    nextOrder: function() {
      return this.length ? this.last().get('order') + 1 : 1;
    },
    
    comparator: 'order',
  });

  app.accounts = new Accounts();
})();
