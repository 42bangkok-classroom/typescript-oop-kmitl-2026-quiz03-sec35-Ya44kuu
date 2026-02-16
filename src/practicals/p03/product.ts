export class Product {
    name?:string;
    private _price?:number = 0;
    constructor(name:string){
        this.name = name;
    }
    getPrice():number | undefined{
        return this._price;
    }
    setPrice(amount:number){
        this._price = amount;
    }
}

