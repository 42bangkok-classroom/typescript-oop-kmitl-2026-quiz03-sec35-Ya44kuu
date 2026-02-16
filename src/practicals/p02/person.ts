export class Person {
    firstname?:string;
    lastname?:string;
    private age: number = 0;
    static COUNTRY: string = "Thailand";
    getAge():number{
        return this.age;
    }
    setAge(age:number){
        this.age = age
    }

    getFullName():string{
        return `${this.firstname} ${this.lastname}`;
    }
}