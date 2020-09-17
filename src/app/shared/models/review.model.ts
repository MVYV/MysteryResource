export class ReviewModel {
    constructor(
        public id?: number,
        public author?: string,
        public title?: string,
        public text?: string,
        public link?: string,
        public rating?: number,
    ) {
    }
}
