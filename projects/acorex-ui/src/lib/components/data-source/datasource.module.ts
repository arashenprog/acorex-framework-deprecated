import { NgModule } from '@angular/core';
import { AXDataSourceComponent } from './datasource.component';
import { AXDataSourceRemoteRead } from './remote-read.component';
import { AXDataSourceCallbackRead } from './callback-read.component';
import { AXHttpModule } from '../../core';

@NgModule({
    declarations: [AXDataSourceComponent, AXDataSourceRemoteRead, AXDataSourceCallbackRead],
    imports: [AXHttpModule],
    exports: [AXDataSourceComponent, AXDataSourceRemoteRead, AXDataSourceCallbackRead],
    providers: [],
})
export class AXDataSourceModule { }