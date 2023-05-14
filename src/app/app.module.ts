import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { LayoutModule } from './layout/layout.module';
import { WatchModule } from './module/watch.module';
@NgModule({
    declarations: [
        AppComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LayoutModule,
        ButtonModule,
        WatchModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
