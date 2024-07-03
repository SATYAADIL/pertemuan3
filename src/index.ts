let a : string = "reikhan"
console.log(a)

//implist
let x: number = 90;
var y: string = "plugin"
console.log(x,y);

//implist
let k = 20;
let o = "web"
console.log(k,o);

//type data any
let kelas :any;
kelas = true;
console.log(kelas);

//union 
let mouse : number;
mouse = 20;
console.log(mouse);


//aliases
type ID = number;

let userID: ID ;
userID = 69;
console.log(userID)

//void
function oke(name: string): void{
    console.log(`hello, ${name}!`)
}
oke("onoy onoy onoy onoy");


//array

let list : number[]
list = [1,2,3,4,]

//generic array
let list1 : Array<number>;
list1 = [1,2,3,4,]
console.log(list,list1);

//tuple
let person: [string,number,number]
person = ["zulfan",20,20]
console.log (person);

//object

//for loop
for(let i = 0; i<5; i++){
    console.log (`loop ke ${i + 1}`);
}

//while loop
let counter : number = 0;
while(counter <=5){
    counter++
    console.log(counter)
}

let nilai = 90
if(nilai>75){
    console.log("KONGRAT NT LULUS");
} else {
    console.log("NT ORA LULUS")
}

let day: number=4;
let dayName: string
switch(day){
    case 1:
        dayName = "senin";
        break;
        case 2:
            dayName = "selasa";
        break;
    case 3:
        dayName = "rabu";
        break;
    case 4:
        dayName = "kamis";
        break;
    case 5:
        dayName = "jumat";
        break;
        default:
            dayName = "hari lainya";
} 
console.log(`hari ini adalah ${dayName}`)



let person1 : {
    name : string,
    age  : number,
    address : string
}
person1 = {
    name : "onoy",
    age : 20,
    address : "TEGAL"
}
console.log(person1);



