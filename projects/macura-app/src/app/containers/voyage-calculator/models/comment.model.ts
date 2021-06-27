export interface ICommentModel {
    id: number,
    daStage: string,
    persona: string,
    author: string,
    comment: string,
    type: string,
    date: string | Date
}

export class CommentModel {
    id: number | undefined;
    daStage: string | undefined;
    persona: string | undefined;
    author: string | undefined;
    comment: string | undefined;
    type: string | undefined;
    date: string | Date | undefined
}