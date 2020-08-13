class Person {
    constructor(name,age){
        this.name = name;
        this.age=age;
    }

    greeting() {
        console.log(`Hi, I'm ${this.name} and i have ${this.age}`);
    }
}

module.exports = Person;