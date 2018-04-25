import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ModuleWithProviders } from "@angular/compiler/src/core";
import { DataSerive } from './data.service';

@NgModule({
    declarations: [],
    imports:
    [],
    exports: [],
    providers: []
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                { provide: DataSerive}
            ]
        };
    }
}
