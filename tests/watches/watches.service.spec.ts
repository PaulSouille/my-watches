import { TestBed } from '@angular/core/testing';

import { WatchesService } from '../../src/services/watches/watches.service';

describe('WatchesService', () => {
    let service: WatchesService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(WatchesService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
