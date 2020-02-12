import { Component } from '@angular/core';
import { AXDataSourceReadParams, AXSelectionList, AXPopupService } from 'acorex-ui';
import { routes } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items: any[] = [];
  constructor() {
    this.items = routes;
  }
}
