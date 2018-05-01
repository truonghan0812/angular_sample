import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ModuleWithProviders } from "@angular/compiler/src/core";
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [],
    imports: [HttpClientModule],
    exports: [],
    providers: [DataService]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
