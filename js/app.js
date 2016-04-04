var app = app || {};
var ENTER_KEY = 13;

$(function() {
  'use strict';

  // FIXME: exporting this reference is unnecessary. Doing so to use view functions in console.
  var AppViewReference = new app.AppView();
  app.AppViewReference = AppViewReference;

  // UNCOMMENT LATER: new app.AppView();
});
