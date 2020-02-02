import { Component, EventEmitter, Input } from '@angular/core';
import { AXDataSourceReadParams, AXDataSourceRead } from './read-param';




@Component({
    selector: 'ax-callback-read',
    template: "",
    providers: [{ provide: AXDataSourceRead, useExisting: AXDataSourceCallbackRead }]
})
export class AXDataSourceCallbackRead extends AXDataSourceRead {

    dataReceived: EventEmitter<any> = new EventEmitter<any>();

    @Input()
    provideData: (params: AXDataSourceReadParams) => Promise<any>;

    constructor() {
        super();
    }

    fetch(params: AXDataSourceReadParams) {
        if (this.provideData) {
            this.provideData(params).then(data => {
                this.dataReceived.emit(data);
            });
        }
    }
}