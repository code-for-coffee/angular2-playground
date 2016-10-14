import {Component} from 'angular2/core';

class AppComponent {
    static get annotations() {
        return [
            new Component({
                selector: "my-app",
                template: '<h1>My First Angular 2 App</h1>'
            }),
        ];
    }

    constructor () {}
}

export {AppComponent};


// (function(app) {
//     app.AppComponent =
//         ng.core.Component({
//             selector: 'playground-app',
//             template: '<h3>Playground</h3><p>Fun!</p>'
//         })
//         .Class({
//             constructor: function() {}
//         });
// })(window.app || (window.app = {}));