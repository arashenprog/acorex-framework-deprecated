import { Component, OnInit } from '@angular/core';
import { TestComponent } from 'src/app/test.component';
import { AXDataSourceReadParams, AXPopupService, AXSelectionList } from 'acorex-ui';

@Component({
    templateUrl: './button.page.html',
    styleUrls: ['./button.page.scss']
})
export class ButtonPage  {
    constructor(private popup: AXPopupService) {

    }
    title = 'acorex-framework';

    dataSource: any[] = [
        { id: '1', title: 'Same Title 1', number: 1000 },
        { id: '2', title: 'Same Title 2', number: 2000 },
        { id: '3', title: 'Same Title 3', number: 3000 },
        { id: '4', title: 'Same Title 4', number: 4000 }
    ];


    selectedValues: any[] = ['2', '4'];

    handleDataReceived = (e: AXDataSourceReadParams) => {
        return Promise.resolve(this.dataSource);
    }

    handleSelectChange(e) {
        console.log(e);
    }
    items: AXSelectionList[] = [
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

    handleSelectedValuesChange(e) {
        console.log(e);

    }

    onOpenPopupClick() {
        this.popup.open(TestComponent, 'Hi');
    }
}
