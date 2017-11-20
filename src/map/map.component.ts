import { Component } from '@angular/core';

@Component({
  styles: [`
    agm-map {
      height: 600px;
    }
  `],
  template: `
    <div>
     <!--img src="../assets/map_schiphol.png"/-->
     <agm-map [latitude]="lat" [longitude]="lng" [zoom]="18"></agm-map>
     </div>
    <a class="btn-primary" ngbButtonLabel routerLink="/timeline" routerLinkActive="active">Go back to timeline</a>
  `
})
export class MapComponent {
  lat: number = 52.30962393544346;
  lng: number = 4.763941168785095;
}

