import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private http: HttpClient){
  }

  ngOnInit(): void {
    this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
      console.log(data);
    });
  }


}
