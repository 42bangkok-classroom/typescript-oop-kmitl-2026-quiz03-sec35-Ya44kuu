export class Person {
    private adress?:string;
    firstname?:string;
    lastname?:string;
    age?:number;
    static COUNTRY: string = "Thailand";
    setAge(age:number){
        this.age = age
    }

    getFullName():string{
        return `${this.firstname} ${this.lastname}`;
    }
    getAge():number | undefined{
        return this.age;
    }
}