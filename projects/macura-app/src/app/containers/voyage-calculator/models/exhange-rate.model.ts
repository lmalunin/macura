export interface IExchangeRatesModel {
    sourceCurrency?: string,
    paymentCurrencies?: [{ fromCurrency: string, toCurrency: string, exchangeRate: number }]
}

export class ExchangeRatesModel implements IExchangeRatesModel {
    sourceCurrency: undefined;
    paymentCurrencies: undefined;
}