import {NgModule} from '@angular/core';
import {IndexComponent} from './index/index.component';
import {LandingRoutingModule} from './landing-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        LandingRoutingModule
    ],
    declarations: [IndexComponent]
})
export class LandingModule {
}
