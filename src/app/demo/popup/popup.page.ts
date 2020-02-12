import { Component, OnInit } from '@angular/core';
import { AXPopupService } from 'acorex-ui';
import { InputPage } from '../input/input.page';

@Component({
    templateUrl: './popup.page.html',
    styleUrls: ['./popup.page.scss']
})
export class PopupPage implements OnInit {
    constructor(private popup: AXPopupService) { }

    ngOnInit(): void { }
    onOpenPopupClick() {
        this.popup.open(InputPage, 'Input Demo');
    }
}
