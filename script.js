let totalTk=500;
let egg=5;
let kitket=2;
let eggPrice=15;
let kitketPrice=40


let totalEggPrice=egg*eggPrice;
let totalKitPrice=kitket*kitketPrice;

let totalCost=totalEggPrice+totalKitPrice;

let restAmt=totalTk-totalCost;

console.log(restAmt);


let num1 = 67;
let num2 = 89;

if(num1 > num2){
    console.log("num1 is maximum number");
}
else{
    console.log("num2 is maximum number");
}


let num = 55478;

if((num%5 == 0) & (num%11 == 0)){
    console.log("This number is divisible by 5 and 11");
}
else{
    console.log("This number is not divisible by 5 and 11");

}

let year = 2030

if (year%4 == 0){
    console.log("This year is leap year");
}
else {
    console.log("This year is not leap year");
}