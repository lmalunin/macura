import { Component, Input, OnInit } from '@angular/core';
import { ICommentModel } from '../../models/comment.model';

@Component({
    selector: 'macura-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

    _comments: [ICommentModel] | undefined;

    get comments(): [ICommentModel] {
        return this._comments!;
    }

    @Input() set comments(value: [ICommentModel]) {
        this._comments = value;
    }

    constructor() {
    }

    ngOnInit(): void {
    }

}
