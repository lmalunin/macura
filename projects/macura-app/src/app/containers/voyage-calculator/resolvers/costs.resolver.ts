import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICostsModel } from '../models';
import { CostsServices } from '../services';

@Injectable({
    providedIn: 'root'
})
export class CostsResolver implements Resolve<ICostsModel> {

    constructor(private costsService: CostsServices, private store: Store) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICostsModel> {
        debugger
        return this.costsService.fetchAll();
    }

}