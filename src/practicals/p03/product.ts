export class Product {
    name?:string;
    protected price:number = 0;
    constructor(name:string){
        this.name = name;
    }
    getPrice():number | undefined{
        return this.price;
    }
    setPrice(amount:number){
        this.price = amount;

    }
}

