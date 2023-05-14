import { NgModule } from '@angular/core';
import { WatchListComponent } from './watch/watch-list/watch-list.component';
import { WatchDetailsComponent } from './watch/watch-details/watch-details.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
    declarations: [
        WatchListComponent,
        WatchDetailsComponent

    ],
    imports: [
        ButtonModule
    ],
    exports: [WatchListComponent,
        WatchDetailsComponent],
    providers: [],
    bootstrap: [],
})
export class WatchModule { }
