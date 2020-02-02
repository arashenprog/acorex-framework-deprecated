import { Component, Input, EventEmitter } from '@angular/core';
import { AXDataSourceReadParams, AXDataSourceRead } from './read-param';
import { AXHttpService } from '../../core';




@Component({
    selector: 'ax-remote-read',
    template: "",
    providers: [{ provide: AXDataSourceRead, useExisting: AXDataSourceRemoteRead }]
})
export class AXDataSourceRemoteRead extends AXDataSourceRead {

    constructor(private http: AXHttpService) {
        super();
    }

    @Input()
    url: string;

    @Input()
    params: any;

    @Input()
    headers: any;

    @Input()
    method: "get" | "post" = "get";



    dataReceived: EventEmitter<any> = new EventEmitter<any>();

    fetch(params: AXDataSourceReadParams = {}) {
        if (!this.params) this.params = {};
        //if (this.remoteOperation) {
        Object.assign(this.params, params);
        //}
        this.http.request({
            url: this.url,
            method: this.method,
            params: this.params,
            headers: this.headers
        }).result(c => {
            this.dataReceived.emit(c);
        })
    }

}
