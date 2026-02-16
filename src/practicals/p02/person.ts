export class Person {
    firstname?:string;
    lastname?:string;

    getFullName():string{
        return `${this.firstname} ${this.lastname}`;
    }
    getAge():number{

    }
}