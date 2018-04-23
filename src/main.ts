import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
declare var window: any;
window.$ = window.jQuery = require('jquery')
window.Popper = require('popper.js')
// require('./bootstrap/bootstrap')
// require('bootstrap')
import './bootstrap/bootstrap.scss'



// Enables HMR
declare var module: any;
if (module.hot) {
  module.hot.accept();
}

platformBrowserDynamic().bootstrapModule(AppModule);
