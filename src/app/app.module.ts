import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { WatchDetailsComponent } from '../components/watch-details/watch-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DividerComponent } from '../components/divider/divider.component';
import { WatchListComponent } from '../components/watch-list/watch-list.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        WatchDetailsComponent,
        DividerComponent,
        WatchDetailsComponent,
        WatchListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
