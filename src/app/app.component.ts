import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
      <h1>
        Transfer with No Stress
      </h1>
    </div>
    <nav>
      <div class="btn-group" data-toggle="buttons">
        <label class="btn-primary" ngbButtonLabel>
        <a class="btn-primary" ngbButtonLabel routerLink="/timeline" routerLinkActive="active">Timeline</a>
        </label>
       <label class="btn-primary" ngbButtonLabel>
         <a class="btn-primary" ngbButtonLabel routerLink="/map" routerLinkActive="active">Map</a>
        </label>
      </div>
    </nav>


    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
