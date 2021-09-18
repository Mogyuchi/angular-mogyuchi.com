import { Component, HostListener } from '@angular/core';
import { RouterOutlet, ROUTER_CONFIGURATION } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [slideInAnimation],
})
export class AppComponent {
  title = 'もぎゅち';

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
}
