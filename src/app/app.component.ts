import { Component, OnInit } from '@angular/core';
import { HopeService } from './hope.service';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // title = 'app works!';
  contactUs;
  config: any;
  constructor(
    private configSrvc: ConfigService,
    private hopeService: HopeService
    ) {}
    ngOnInit() {
      this.config = this.configSrvc.config;
      this.hopeService.saveData(this.config);
      // console.log('Configurations: '+ JSON.stringify(this.config));
      // this.contactUs=this.hopeService.getData().contactUs;
    }
}

