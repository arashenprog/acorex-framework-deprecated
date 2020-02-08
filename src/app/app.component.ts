import { Component } from '@angular/core';
import { AXDataSourceReadParams, AXSectionList } from 'acorex-ui';
import { } from 'projects/acorex-ui/src/lib/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'acorex-framework';

  dataSource: any[] = [
    { id: '1', title: 'Same Title 1', number: 1000 },
    { id: '2', title: 'Same Title 2', number: 2000 },
    { id: '3', title: 'Same Title 3', number: 3000 },
    { id: '4', title: 'Same Title 4', number: 4000 }
  ]

  handleDataReceived = (e: AXDataSourceReadParams) => {
    return Promise.resolve(this.dataSource);
  }

  handleSelectChange(e) {
    console.log(e);
  }
  items: AXSectionList[] = [
    {
      value: '1',
      text: 'Items 1',
    },
    {
      value: '2',
      text: 'Items 2',
    },
    {
      value: '3',
      text: 'Items 3',
    },
  ]

  selectedValues = [];

  handleSelectedValuesChange(e) {
    console.log(e);

  }
}
