import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// Import the timeline library
import { VerticalTimelineModule } from 'angular-vertical-timeline';

import { AppComponent } from './app.component';

import { TimelineComponent }   from '../timeline/timeline.component';
import { MapComponent }     from '../map/map.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
{ path: 'timeline', component: TimelineComponent },
{ path: 'map', component: MapComponent },
];

@NgModule({
  declarations: [
    AppComponent,TimelineComponent, MapComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    VerticalTimelineModule,
    FormsModule,
     RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

