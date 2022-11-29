import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Watch } from './watches.interface';
@Injectable({
    providedIn: 'root',
})
export class WatchesService {
    listWatches(): Observable<Watch[]> {
        return of([
            { name: 'test', description: 'description' },
            { name: 'test', description: 'description' },
        ]);
    }
}
