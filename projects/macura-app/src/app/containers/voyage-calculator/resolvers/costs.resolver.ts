import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICostsModel } from '../models';
import { CostsServices } from '../services/costs.service';

@Injectable()
export class CostsResolver implements Resolve<ICostsModel> {

    constructor(private costsService: CostsServices, private store: Store) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICostsModel> {
        return this.costsService.fetchAll();
    }

}