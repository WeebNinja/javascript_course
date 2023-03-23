// var temp = "Hello"
// temp = "Google"
// // console.log(temp);

// let temp2 = 100
// temp2 = 50
// // console.log(temp2);

// const temp3 = true
// // temp3 = false
// // console.log(temp3);

// var temp4 
// const a = 10
// const b = 5
// let c = 5
// c = "ABC" 
// // console.log(a+b+c);

// const temp5 = [1,2,3,4,5,"A"]
// // console.log(temp5[0]);

// temp5.forEach(item => {
//     // console.log(item);
// })

// const filterTemp = temp5.filter(item => item >= 3)
// // console.log("Filter number more than 3 is:",filterTemp)

// const car1 = {color:"Red",brand:'Honda',model:'Accord'}
// car1.color = "Blue"
// // console.log(car1.color);

const car1={
    color:'Red',
    brand:'Honda',
    model:{
        a1:'Test1',
        a2:'Test2'
    },
}

for (const key in car1){
    if(Object.hasOwnProperty.call(car1,key)){
        const element = car1[key];
        //console.log(element)
    }
}

// for(const item of myCars){
//     console.log(item);
// }

// temp5.push(6)
// // console.log("Insert 6 to array",temp5)

// function sayHello(){
//     // console.log('Hi')
// }

// //NOTE : Fuction arg.
// const sayHello = (number,name) => {
//     // console.log(`Number is: ${number} by ${name}`);
// }
// sayHello(100)


// NOTE: Fuction return 
const firstName = "Nat"
const lastName = "Noppawong"

const mergeName = (firstName,lastName) =>{
    // NOTE: 1.
    //return firstName + " " + lastName

    // NOTE: 2.
    // const fullName = firstName+" "+lastName
    // return fullName 


    // NOTE: 3.
    return `${firstName} ${lastName}`
}

// const fullName = mergeName(firstName,lastName)
// console.log(mergeName(firstName,lastName));



// NOTE: Condition (if else)
// const number1 = 10
// if(number1 > 30){
//     console.log("number1 is more 30");
// }

// if(number1 < 30){
//     console.log("number1 is less 30");
// }else{
//     console.log("number1 is more 30");
// }


// if(number1 < 20){
//     console.log("number1 is less 20");
// }else if(number1<30){
//     console.log("number1 is less 30");
// }else if(number1<40){
//     console.log("number1 is less 40");
// }else{
//     console.log("number1 is more 40");
// }

// NOTE: Switch
// switch (number1) {
//     case 20:
//         console.log("number is less 20")
//         break;
//     case 30:
//         console.log("number is less 30")
//         break;
//     case 40:
//         console.log("number is less 40")
//         break;
//     default:
//         console.log("number is more 40")
//         break;
// }

// NOTE: Loops & Iteration
const myCars =[
    "Ford Rapter",
    "Honda CRV",
    "Toyota Fortuner",
    "Lambogini"
]

for(let index = 0;index<myCars.length;index++){
    const car = myCars[index];
    console.log(car)
}

let i = 0;
while (i == 10){
    console.log("The number is:",i);
    i++
}