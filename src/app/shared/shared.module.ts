import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MaterialModule} from './material/material.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
    ],
    declarations: [
    ],
    exports: [
        CommonModule,
        MaterialModule
    ],
})
export class SharedModule {}

