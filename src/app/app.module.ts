import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './features/app/app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LandingModule} from './features/landing/landing.module';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LandingModule,
        RouterModule.forRoot([])
        ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
