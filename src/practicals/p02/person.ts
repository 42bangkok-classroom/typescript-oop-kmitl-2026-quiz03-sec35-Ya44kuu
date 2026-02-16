export class Person {
    firstname?:string;
    lastname?:string;
    private _age?:number;
    static COUNTRY: string = "Thailand";
    getAge():number|undefined{
        return this._age;
    }
    setAge(age:number){
        this._age = age
    }

    getFullName():string{
        return `${this.firstname} ${this.lastname}`;
    }
}