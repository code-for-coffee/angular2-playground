(function(app) {
    app.AppComponent =
        ng.core.Component({
            selector: 'playground-app',
            template: '<h3>Playground</h3><p>Fun!</p>'
        })
        .Class({
            constructor: function() {}
        });
})(window.app || (window.app = {}));