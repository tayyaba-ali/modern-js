// // "use strict"

// // // Variable scoping

// // // var myName = "Tayyaba";
// // // var myName = "Maryam"

// // // console.log(myName);

// // // let myName = "Tayyaba"
// // // myName = "Maryam"

// // // myRollNo = 90;

// // // const pi = 3.142;
// // // console.log(pi+585);

// // // var function scope

// // // function abc(){
// // //     var num = 90;
// // //     console.log(num);

// // // }

// // // console.log(num);

// // // abc()

// // // if(true){
// // //     var num = 90
// // // }

// // // console.log(num);

// // // let const block scope

// // // function abc() {
// // //     let num = 90
// // //     console.log(num);

// // // }

// // // if (true) {
// // //     let myName = "Tayyaba"
// // // }
// // // console.log(myName);

// // // abc()

// // // Template literals

// // let firstName = "Tayyaba"
// // let lastName = "Ali"

// // // console.log("My name is " + firstName +" "+
// // //     lastName
// // // );

// // // console.log(`My name is ${firstName} ${lastName}`);

// // // Destructuring
// // // const arr = ["red","blue","green","pink","orange"]

// // // let value1 = arr[0]
// // // let value2 = arr[1]

// // // let [,,value2,,value3] = arr

// // // console.log(value2,value3);

// // // const arr1 = [["one","two"],"three"]

// // // let [[num1,num2],var2] = arr1

// // // console.log(num2);

// // // Destructuring in objects

// // const car = {
// //     name: "corola",
// //     model: [2024,2022],
// //     wheels: {
// //         number: 4,
// //         color: "black"
// //     },
// //     engine: true
// // }

// // // let carName = car.name;
// // // let carModel = car.model

// // let { engine: carEngine, model:[,model2022], wheels:{color,number} } = car
// // console.log(model2022);

// // Default parameters

// // function abc(a=9,b=2){

// //     return a+b
// // }

// // var sum = abc(6)

// // console.log(sum);

// // const users=[
// //     {firstName:"Tayyaba",rollNO:90309,age:23},
// //     {firstName:"Maryam",rollNO:8794,age:20},
// //     {firstName:"Mehak",rollNO:23846,age:20}
// // ]

// // let [{rollNO:zipcode},{firstName},{age}] = users

// // console.log(zipcode,age,firstName);

// // Ternary operator

// // let age = 5;
// // let drink;

// // var number;

// // drink = age > 5 ? "coffeee" : age == 5 ? "water" : "milk";

// // console.log(drink);

// // if(age>=5){
// //     drink="coffee"
// // }
// // elseif(age==5){
// // drink="water"
// // }
// // else{
// //     drink="milk"
// // }

// // Rest parameter

// // function numbers(...numbers) {
// //     let result = 0;

// //     for (let num of numbers) {
// //         result = result + num
// //     }
// //     return result
// //     // console.log(num1);
// //     // console.log(num2);

// // }
// // console.log(
// //     numbers(1, 2, 3));

// // primitive vs reference or non-primitive data type
// // string
// // numbers
// // boolean
// // undefined
// // BigInt
// // null
// // symbol
// // NaN

// // Reference
// // array objects functions

// // console.log(typeof function(){
// //     console.log("hello");

// // });

// // let num1 = 7;
// // let num2 = num1
// // console.log("printing before increment");
// // console.log(num1);
// // console.log(num2);

// // num1++
// // num = num+1

// // console.log("printing after increment");
// // console.log(num1);
// // console.log(num2);

// // let arr1 = [7,6,8]
// // let arr2 = arr1

// // console.log("printing before pushing");
// // console.log(arr1);
// // console.log(arr2);

// // arr1.push(9)

// // console.log("printing after pushing");
// // console.log(arr1);
// // console.log(arr2);

// // let string = "class"
// // let upperCased = string.toUpperCase()
// // console.log(string)

// // console.log(upperCased);

// // spread operator

// // let arr1 = [8,7,2]
// // let arr3 = [9,7,0]
// // // let arr2 = arr1.slice(0)
// // // let arr2 = [].concat(arr1)
// // let arr2 = [...arr1,...arr3,9]
// // console.log(arr1);
// // console.log(arr3);

// // console.log(arr2);

// // console.log(arr1 == arr2);

// // Higher order functions

// // function abc(get){

// // function outer(){
// //     console.log("return");

// // }
// // return outer
// // }

// // function function2(){
// //   return "function2"

// // }
// // let functionReturned = abc(function2)
// // functionReturned()

// // let arr =["apple", "mango", "banana"];
// //  let myArr = arr[Symbol.iterator]();

// // console.log(myArr.next().value);
// // console.log(myArr.next().value);
// // (myArr.next())
// // console.log(myArr.next())

// // Closures

// // Lexical scope /environment

// // let a = 20;
// // function outerFunction(){
// //     function innerFunction(){
// //         function innerMostFunction(){
// //             console.log(a);

// //         }
// //         innerMostFunction()
// //     }
// //     innerFunction()
// // }

// // outerFunction()

// // function outerFunction(number2){
// //     let number1 = 10
// //    function innerFunction(){
// //        let number3 = 90
// //        console.log(number1+number2+number3);

// //     }
// //     return innerFunction
// // }

// // let returningFunction = outerFunction(20)
// // console.log(returningFunction());

// // function declaration // Named function
// // function abc(){
// // return "hello"
// // }
// // abc()

// // Function expression / Anonymous function
// // let abc = function () {
// //   return "hello";
// // };

// // console.log(abc());

// // Arrow function / lamba function

// // let abc = num1=>num1

// // console.log(abc(2));

// // optional chaining

// // const employee = {
// //  employeeName : "Shabana",
// //  empolyeId:321,
// //  gender: "female",
// //  address:{
// //     street: "mt ana"
// //  }
// // }

// // console.log(employee?.address?.area?.area);

// // Params destructuring
// // function userBio({firstName,id}) {
// //     console.log(firstName,id);

// // }

// // const users = [
// //   {
// //     firstName: "laiba",
// //     lastName: "Sadiq",
// //     id: 783,
// //   },
// //   {
// //     firstName: "javeria",
// //     lastName: "saleem",
// //     id: 783,
// //   },
// //   {
// //     firstName: "sadia",
// //     lastName: "gulaam nabi",
// //     id: 783,
// //   },
// // ];

// // for (let user of users) {
// // //   let { firstName, id } = user;

// //   userBio(user);
// // }

// // Callback
// // function appKaFunction(callback) {
// //   // ...

// //   console.log(
// //     "bartan dhore ho ammi ke dant sunrhe non extistent susraal ke tane sunrhe ho "
// //   );

// //   callback()
// // }

// // function dostKaFunction(){
// //     console.log("assignment chaap do mera dost nh ha yaar");

// // }

// // appKaFunction(dostKaFunction)

// // Array methods

// // forEach,map,filer,reduce,sort

// // const numbers = [1,2,3,4];

// // Array methods
// // For Each
// // numbers.forEach((value,index)=>{
// //     console.log(value,index);

// // })

// // map

// // const numbers = [1, 2, 3, 4];

// // let result = numbers.map(function (value, index) {
// //   if (value % 2 === 0) {
// //     return value;
// //   }

// //   return "no value"
// // });

// // console.log(result);

// // const numbers = [ 1,2,3,4]

// // let finalArray = []

// // numbers.forEach((value)=>{
// //     finalArray.push(value*value)

// // })
// // // console.log(numbers);
// // console.log(finalArray);

// // const names = ["tayyaba","rabia","laiba","javeria"]

// //  console.log(names.map(name=>name.toUpperCase()));

// // console.log(names);

// // filter

// // const arr = [1,3,4,8,5,7];
// // let result = arr.filter(value =>{
// //    return value%2!==0
// // })

// // console.log(result);

// // sort

// // const numbers = [5,10,78,100,50]

// // numbers.sort((a,b)=>{
// //     return b-a
// // })

// // console.log(numbers);

// // const names = ["Tayyaba","rabia","laiba","jaaveria","javeria"]

// // console.log(names.includes("hdsfkhsdf"));

// // names.sort();

// // console.log(names);

// // reduce

// // const numbers = [1,2,34]

// // let sum = numbers.reduce((accumulator,currentValue)=>{
// //     return accumulator+currentValue
// // },0)

// // console.log(sum);

// // accumualor        currentvalue       total
// // 1                      2              3
// // // 3                      34             37

// // const userCart = [
// //     {productId:1,productName:"iphone",price:2000000},
// //     {productId:2,productName:"computer",price:20000},
// //     {productId:3,productName:"straighner",price:6000},
// //     {productId:4,productName:"ac",price:100000},
// // ]

// // let prices = []
// // for(var product of userCart ){
// //     prices.push(product.price)
// // }
// // console.log(prices.reduce((previousProduct,nextproduct)=>{
// //     return previousProduct+nextproduct
// //  },0)
// //  );

// // console.log(prices);

// let userName = "Tayyaba";

// let key = "id";

// // const obj = {
// //     userName,
// //    [key]:90,
// //     employee: true,

// //     greet:()=>{
// //         console.log(this.userName);

// //     }

// // }
// // obj.greet()

// // function *abc(){
// // yield console.log("hello");
// // console.log("running");

// // yield console.log("running");
// // yield console.log("hi");

// // }

// // let generator = abc()
// // console.log(generator.next());
// // console.log(generator.next());
// // console.log(generator.next());
// // console.log(generator.next());
// // console.log(generator.next());
// // console.log(generator.next());
// // console.log(abc().next());

// // import { abc as hello, ourClass,obj } from "./file1.js";
// // import kuchBhi from "./file1.js"

// // kuchBhi()

// // console.log(ourClass);

// // hello()

// // console.log("first");
// // setTimeout(()=>{
// //     console.log("second");

// // },1000)

// // console.log("third");

// // promise

// const datas = [
//   { name: "Sadia", profession: "Graphic Designer " },
//   { name: "Tayyaba", profession: "web developer" },
//   { name: "Laiba", profession: "Javascript developer" },
// ];

// // let weather = true;
// async function abc() {
//    await addingData();

//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       datas.forEach(({ profession }) => {
//         document.write(`<li>${profession}</li>`);
//       });
//     }, 3000);

//     // if(weather){
//     //   reject("kise or din chlengen")
//     // }
//     // else{
//     //     resolve("chalo chlen")
//     // }
//   });
// }

// meetingPlan
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// abc()

// function addingData() {
//   setTimeout(() => {
//     datas.push({ name: "Arishah", profession: "teacher" });
//   }, 5000);
// }

// Pillars of OOP(object oriented programming)

// 1- Encapsulation
// 2- Inheritance
// 3- Abstraction
// 4- Polymorphism

// class Car {
//   engine = "2700CC";
//   model = 2024;

//   constructor(engine,model){
//    this.engine = engine;
//    this.model = model
//   }

// start(){
//     console.log(this.engine,this.model);
    
// }

// static end(){
//     console.log("ending");
    
// }

// }


// let car1 = new Car("1800CC",2021)

// let car2= new Car("3300CC",2020)


// console.log(car1);
// console.log(car2);


// car1.start();


// Car.end()



// Map data structure

// let obj =   new Map ()
// obj.set(12,"twelve")
// obj.set([1,2,3],"twelve")
// obj.set({name:"hello"},"twelve")


// let key2 = [1,2,3];



// obj.set(key2,"twelve")



// console.log(Object.keys(obj));

// for (let key in obj){
//     console.log(key);
    
// }


// console.log(obj);

// console.log(obj.get(obj.key2));

// Object.assign

// Math.pow

// Array.isArray(value)

// console.log(typeof []);
// console.log(typeof (1+"true"));

//  0 --->false
// 1 --- true

//  "1"+2+3


// console.log([2,3]);

// Array.prototype.abc= function(){
//     console.log("ab");
    
// }
