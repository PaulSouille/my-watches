import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Watch } from 'src/services/watches/watches.interface';
import { WatchesService } from 'src/services/watches/watches.service';

@Component({
    selector: 'app-watches',
    templateUrl: './watches.component.html',
    styleUrls: ['./watches.component.css'],
})
export class WatchesComponent implements OnInit {
    constructor(private watchesService: WatchesService) {}
    matVersion = '5.1.0';
    breakpoint = 0;
    watches$!: Observable<Watch[]>;
    ngOnInit() {
        this.breakpoint = window.innerWidth <= 400 ? 1 : 4;
        this.watches$ = this.watchesService.listWatches();
    }

    onResize(event: any) {
        this.breakpoint = event.target.innerWidth <= 400 ? 1 : 4;
    }

}
