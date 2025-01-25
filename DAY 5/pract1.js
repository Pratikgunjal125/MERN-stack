// console.log("hello World");

// var a=10;
// var b=20;
// var c= a+b;
// var d= a*b;
// console.log("Addition of 2 Nos : "+c)
// console.log("multiplication of 2 nos : "+d);
// console.log(4*4);

// const e=Math.pow(2,3); //2 raise to 3
// console.log(e);

//km to miles
// var km=12;
// var mile=km*0.621371;
// console.log("miles is : "+mile);

// var degree=37;
// var f=(degree*(9/5))+32;
// console.log("f is : "+f)

// var kg=100;
// var pound=kg*2.2;
// console.log("pound : "+pound);

// calculate the Body Mass Index BMI
// var weight=53;
// var height=1.57;
// var bmi=weight/(height*height);

// if (bmi < 18.5) {
//     category = 'Underweight';
//   } else if (bmi >= 18.5 && bmi < 24.9) {
//     category = 'Normal weight';
//   } else if (bmi >= 25 && bmi < 29.9) {
//     category = 'Overweight';
//   } else {
//     category = 'Obesity';
//   }
// console.log("BMI of persom is : "+category);

let unit = 350; // Input: number of units consumed
let bill = 0;

if (unit <= 100) {
    bill = 0; // No charge for the first 100 units
} else if (unit <= 200) {
    bill = (unit - 100) * 5; // ₹5 per unit for the next 100 units
} else {
    bill = (100 * 5) + ((unit - 200) * 10); // ₹5 for 101-200 and ₹10 for above 200
}

console.log("Your total electricity bill is: ₹" + bill);
