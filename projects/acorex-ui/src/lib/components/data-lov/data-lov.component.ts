import { Component, OnInit, Input, HostListener, EventEmitter, Output, ContentChildren, QueryList, ContentChild } from '@angular/core';

import { AXDataLovPopupComponent } from './data-lov-popup/data-lov-popup.component';
import { AXGridDataColumn } from '../data-grid/columns/column.component';
import { AXDataSourceComponent } from '../data-source/datasource.component';
import { AXBaseTextComponent } from '../../core';
import { AXPopupService } from '../popup';
@Component({
    selector: 'ax-lov',
    templateUrl: './data-lov.component.html',
    styleUrls: ['./data-lov.component.scss']
})
export class AXLOVComponent {
    constructor(private popup: AXPopupService) {

    }

    @Input()
    size: 'sm' | 'md' | 'lg' | 'full' = 'md';

    @Input()
    mode: 'inline' | 'hidden' = 'inline'

    @ContentChild(AXDataSourceComponent, { static: true })
    dataSource: AXDataSourceComponent;

    @ContentChildren(AXGridDataColumn)
    private columns: QueryList<AXGridDataColumn>;

    @Output()
    onSelectionChange: EventEmitter<any> = new EventEmitter<any>();

    @Input()
    selectionMode: 'single' | 'multiple' = 'single'

    handleButtonClick(e) {
        this.open();
    }


    public open(): Promise<any> {

        return new Promise((resolve) => {
            this.popup.open(AXDataLovPopupComponent, {
                data: {
                    dataSource: this.dataSource,
                    selectionMode: this.selectionMode,
                    columns: this.columns.toArray()
                },
                title: this.label,
                size: this.size,
            }).closed(c => {
                if (c.data) {
                    this.onSelectionChange.emit(c.data);
                    if (resolve) {
                        resolve(c.data);
                    }
                }
                else {
                    if (resolve) {
                        resolve();
                    }
                }
            })
        });
    }
}
