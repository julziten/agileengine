import { Component, OnInit } from '@angular/core';
import { SynServiceService } from './syn-service/syn-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Simple Text Editor';
  constructor(private service: SynServiceService) {}

  ngOnInit(){
    // this.service.getApiEndpoint().subscribe((data) => console.log(data));
  }
}
