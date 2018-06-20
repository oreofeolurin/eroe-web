import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    STATIC_DOMAIN = environment.STATIC_DOMAIN;


    constructor() {
    }

    ngOnInit() {
    }

}
