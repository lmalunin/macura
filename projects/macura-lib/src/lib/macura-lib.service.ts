import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MacuraLibService {

    constructor() {
    }

    currencyCalculator(currencyAmount: number, exchangeRate: number): number {
        return currencyAmount / exchangeRate;
    }
}
