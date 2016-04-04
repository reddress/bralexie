var app = app || {};

(function($) {
  'use strict';

  app.AccountView = Backbone.View.extend({
    tagName: 'li',
    template: _.template($('#account-template').html()),

    events: {
      'keypress .edit': 'updateOnEnter',
      'blur .edit': 'close',
      'click .destroy': 'clear',
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    initialize: function() {
      this.listenTo(this.model, 'destroy', this.remove);  // view function that removes el from the DOM
      this.listenTo(this.model, 'change', this.render);
    },

    close: function() {
      var value = this.$input.val();
      var trimmedValue = value.trim();

      if (trimmedValue) {
        console.log("saving account");
        this.model.save({ name: trimmedValue });
      }
    },
    
    updateOnEnter: function(e) {
      if (e.which === ENTER_KEY) {
        this.close();
      }
    },

    clear: function() {
      this.model.destroy();
    },
    
  });
})(jQuery);
