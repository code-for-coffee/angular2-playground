import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';

let boot = document.addEventListener('DOMContentLoaded', () => {
    bootstrap(AppComponent);
});

module.exports = boot;


// (function(app){
//     document.addEventListener('DOMContentLoaded', function() {
//        ng.platformBrowserDynamic
//            .platformBrowserDynamic()
//            .bootstrapModule(app.AppModule);
//     });
// })(window.app || (window.app = {}));