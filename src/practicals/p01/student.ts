export class Student {
    firstname?:string;
    lastname?:string;

    printName():string{
        console.log(this.firstname, " ",this.lastname);
        return "";
    }
}
