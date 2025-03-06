// Class name should be same as file name
class Employee {
    // Properties
    public firstName: string;
    public lastName: string;

    // Constructor
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myEmployee = new Employee("De", "El");
console.log(myEmployee.lastName);
console.log(myEmployee.firstName);