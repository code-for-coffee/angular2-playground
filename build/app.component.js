System.register(["angular2/core"], function($__export) {
  "use strict";
  var Component,
      AppComponent;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
    }],
    execute: function() {
      AppComponent = function() {
        function AppComponent() {}
        return ($traceurRuntime.createClass)(AppComponent, {}, {get annotations() {
            return [new Component({
              selector: "my-app",
              template: '<h1>My First Angular 2 App</h1>'
            })];
          }});
      }();
      $__export("AppComponent", AppComponent);
    }
  };
});
