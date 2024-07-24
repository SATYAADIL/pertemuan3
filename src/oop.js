"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`halo, nama saya $(this.name)dan saya berumur ${this.age}tahun.`);
    }
}
class employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age);
        this.jobTitle = jobTitle;
    }
    work() {
        console.log(`${this.name} bekerja sebagai ${this.jobTitle}`);
    }
}
let employee1 = new employee('Satya adil', 21, 'direktur shoope');
employee1.greet();
employee1.work();
