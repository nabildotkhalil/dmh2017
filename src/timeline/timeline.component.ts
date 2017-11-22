import { Component } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {
  title = 'app';

  constructor(private http: HttpClient){
  }

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'app_id': 'b366af3b',
    'app_key': '',
    'resourceVersion':'v1',
    'Access-Control-Allow-Headers':'X-Requested-With, accept, content-type',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Origin': '*',
    'accept':'*/*'
    })
  };

  ngOnInit(): void {
    this.http.get('https://api-acc.schiphol.nl/waittimes/currentpredictionswithdetails/API_all_current_predictions', this.httpOptions).subscribe(data => {
      console.log(data);
    });
  }


}
