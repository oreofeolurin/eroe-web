import {Inject, NgModule, PLATFORM_ID} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {environment} from '../../../environments/environment';
import {isPlatformBrowser} from '@angular/common';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatSliderModule} from '@angular/material';

@NgModule({
    imports: [
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        MatProgressBarModule,
        MatAutocompleteModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        MatCheckboxModule,
        MatSliderModule
    ],
    exports: [
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        MatProgressBarModule,
        MatAutocompleteModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        MatCheckboxModule,
        MatSliderModule
    ],
})
export class MaterialModule {
    constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer, @Inject(PLATFORM_ID) platformId: Object) {
        if (isPlatformBrowser(platformId)) {
            matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl(`${environment.STATIC_DOMAIN}/images/icons/mdi.svg`));
        }

    }
}
