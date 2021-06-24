import { ICostItemModel } from './cost-item.model';

interface ICostsModel {
    daCurrency: {
        currency: string
    },
    baseCurrency: {
        "currency": string,
        "exchangeRate": number
    },
    costs: Array<{
        id: number,
        name: string,
        displayOrder: number,
        costItems: Array<ICostItemModel>,
    }>
}

class CostsModel implements ICostsModel {
    // @ts-ignore
    baseCurrency: { currency: string; exchangeRate: number };
    // @ts-ignore
    costs: Array<{ id: number; name: string; displayOrder: number; costItems: Array<ICostItemModel> }>;
    // @ts-ignore
    daCurrency: { currency: string };

}

export { ICostsModel, CostsModel }