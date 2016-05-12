import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AskMeAnythingAppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(AskMeAnythingAppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase('https://piotr-ama.firebaseIO.com')
]);
