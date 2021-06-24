interface ICostItemModel {
    id: number,
    name: string,
    costItemAlias: {
        accountingCode: string
    },
    annotation: {
        id: number,
        name: string
    },
    costs: Array<{
        daStage: string,
        persona: string,
        type: string,
        amount: number
    }>,
    comments: Array<{
        id: number,
        daStage: string,
        persona: string,
        author: string,
        comment: string,
        type: string,
        date: string
    }>
}

class CostItemModel implements ICostItemModel {
    // @ts-ignore
    annotation: { id: number; name: string };
    // @ts-ignore
    comments: Array<{ id: number; daStage: string; persona: string; author: string; comment: string; type: string; date: string }>;
    // @ts-ignore
    costItemAlias: { accountingCode: string };
    // @ts-ignore
    costs: Array<{ daStage: string; persona: string; type: string; amount: number }>;
    // @ts-ignore
    id: number;
    // @ts-ignore
    name: string;

}

export { ICostItemModel, CostItemModel };
