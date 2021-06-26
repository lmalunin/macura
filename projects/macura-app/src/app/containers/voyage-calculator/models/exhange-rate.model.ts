export interface IExchangeRatesModel {
    sourceCurrency?: string,
    paymentCurrencies?: [{ fromCurrency: string, toCurrency: string, exchangeRate: number }]
}