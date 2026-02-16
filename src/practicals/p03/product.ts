export class Product {
    name?:string;
    protected price:number=0;
    static DISCOUNT_PERCENT:number = 10;
    constructor(name:string,price:number){
        this.name = name;
        this.price = price;
    }
    getPrice():number | undefined{
        return this.price;
    }
    setPrice(amount:number){
        this.price = amount;

    }
}

