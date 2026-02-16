export class Student {
    firstname?:string;
    lastname?:string;

    printName():string{
        return this.firstname + " " + this.lastname;
    }
}
