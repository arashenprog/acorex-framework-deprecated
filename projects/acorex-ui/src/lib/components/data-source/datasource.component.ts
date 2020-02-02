import { Component, ContentChild, EventEmitter } from "@angular/core";
import { AXDataSourceReadParams, AXDataSourceRead } from './read-param';



@Component({
    selector: "ax-data-source",
    template: "<ng-content></ng-content>"
})
export class AXDataSourceComponent {

    @ContentChild(AXDataSourceRead, { static: true })
    read: AXDataSourceRead;

    onDataReceived: EventEmitter<any> = new EventEmitter<any>();
    onFetchStart: EventEmitter<void> = new EventEmitter<void>();

    ngOnInit(): void {
        if (this.read) {
            this.read.dataReceived.subscribe(c => {
                this.onDataReceived.emit(c);
            })
        }
    }

    fetch(params: AXDataSourceReadParams = {}) {
        this.onFetchStart.emit();
        if (this.read) {
            this.read.fetch(params);
        }
    }
}
