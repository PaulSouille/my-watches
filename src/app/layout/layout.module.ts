import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { DividerComponent } from './components/divider/divider.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';


@NgModule({
    declarations: [
        HeaderComponent,
        DividerComponent,
        FooterComponent
    ],
    imports: [
        MenubarModule,
        CardModule
    ],
    exports: [
        HeaderComponent,
        DividerComponent,
        FooterComponent
    ],
    providers: [],
    bootstrap: [],
})
export class LayoutModule { }
