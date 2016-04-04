var app = app || {};

(function($) {
  'use strict';

  app.AppView = Backbone.View.extend({
    el: '.bralexie-app',

    events: {
      'keypress .new-account': 'createOnEnter',
    },
    
    initialize: function() {
      this.$main = this.$('.main');
      this.$input = this.$('.new-account');
      this.$list = $('.account-list');

      this.listenTo(app.accounts, 'add', this.addOne);
      this.listenTo(app.accounts, 'reset', this.addAll);  // triggered at the end of fetching accounts

      app.accounts.fetch({ reset: true });
    },

    render: function() {
      this.$main.show();
    },

    newAttributes: function() {
      return {
        name: this.$input.val().trim(),
        order: app.accounts.nextOrder(),
      };
    },

    createOnEnter: function(e) {
      if (e.which === ENTER_KEY) {
        console.log("app-view: creating account");
        app.accounts.create(this.newAttributes());
        this.$input.val('');
      }
    },
    
    newAttributesInConsole: function(accountType, name, balance) {
      return {
        accountType: accountType,
        name: name,
        balance: balance,
        order: app.accounts.nextOrder(),
      };
    },
    
    createInConsole: function(accountType, name, balance) {
      app.accounts.create(this.newAttributesInConsole(accountType, name, balance));
    },

    addOne: function(account) {
      var view = new app.AccountView({ model: account });
      this.$list.append(view.render().el);
    },

    addAll: function() {
      this.$list.html('');
      app.accounts.each(this.addOne, this);
    },

  });

})(jQuery);
