import { TestBed } from '@angular/core/testing';
import { fromCostsServices } from './index';


describe('CostsService', () => {
    let service: fromCostsServices.CostsServices;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(fromCostsServices.CostsServices);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
