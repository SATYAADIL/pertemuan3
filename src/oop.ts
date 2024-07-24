class Person {

    name: string
    age: number

    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    sapa() {
        console.log(`halo, nama saya $(this.name)dan saya berumur ${this.age}tahun.`);
        
    }
}

class employee extends Person {
    jobTitle: string 

    constructor(name: string, age: number, jobTitle: string){
        super(name, age)
        this.jobTitle = jobTitle;

    }

    work(){
        console.log(`${this.name} bekerja sebagai ${this.jobTitle}`);
        
    }
}
let employee2 = new employee ('Satya adil',21,'direktur shoope');
employee2.sapa();
employee2.work();

