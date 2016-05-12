import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { HomeComponent } from './+home';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from '@angular/router';
import { AboutComponent } from './+about';

@Component({
  moduleId: module.id,
  selector: 'ask-me-anything-app',
  templateUrl: 'ask-me-anything.component.html',
  styleUrls: ['ask-me-anything.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/', component: HomeComponent},
  {path: '/about', component: AboutComponent}
])
export class AskMeAnythingAppComponent {
  constructor(private router:Router) {
  }
  
  isActive(route) {
    return location.pathname === route;
  }  
}
