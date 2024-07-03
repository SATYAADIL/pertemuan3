function sapa(nama:string){
    console.log("Halo, aku" + nama);   
}
sapa("Yasir!")

function calculate (a:number, b:number, c:number):number{
    return a + b  + c
}
let hasil : number = calculate(3, 5, 1)
console.log("Hasil Penjumlahan: " + hasil);
let multiplication = (x:number, y:number) => {
    return x * y
}
let hasil2 = multiplication(5,8)
console.log("Hasil perkalian: "+ hasil2);

let cube = function(num:number){
    return num **3
}   
console.log(cube (1));

let ml : string = "clint"
console.log(ml);




