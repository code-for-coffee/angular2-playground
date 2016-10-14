System.register(["angular2/platform/browser", "./app.component"], function($__export) {
  "use strict";
  var bootstrap,
      AppComponent,
      boot;
  return {
    setters: [function($__m) {
      bootstrap = $__m.bootstrap;
    }, function($__m) {
      AppComponent = $__m.AppComponent;
    }],
    execute: function() {
      boot = document.addEventListener('DOMContentLoaded', function() {
        bootstrap(AppComponent);
      });
      module.exports = boot;
    }
  };
});
