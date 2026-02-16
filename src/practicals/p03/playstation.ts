import { Product } from './product'

export class Playstation extends Product {
  // TODO: implement class properties, constructor with super(...), and methods
    gen: number;

    constructor(name: string, gen: number, price: number) {
        super(name);
        this.gen = gen;
        this.setPrice(price); 
    }
    getProfile():string{
      return `${this.name} (Gen ${this.gen})`;
    }
    getDiscountPrice():number{
      // 17091 (ถ้า Product.DISCOUNT_PERCENT = 10, คำนวณจาก 18990 - (18990 * 10 / 100))
      const discount = this.price - (this.price *10 /100)
      return discount;
    }
}