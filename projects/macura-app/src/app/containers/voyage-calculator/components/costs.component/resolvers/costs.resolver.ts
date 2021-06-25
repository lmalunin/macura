import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ICostsModel } from '../models';
import { CostsServices } from '../services';

@Injectable()
export class CostsResolver implements Resolve<ICostsModel> {

    constructor(private costsService: CostsServices) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICostsModel> {
        return this.costsService.fetchAll();
    }

}