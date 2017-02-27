export class Brand {
    constructor(
        public id:string,
        public name:string,
        public description: string,
        public picture:Object,
        public website: Array<Object>,
        public affiliateNetwork:string,
        public created: Date,
        public modified: Date,
        public category: Array<Object>
    ) {}
}