let arr1= [80, 90, 49, 50 ]
let n = 2

function x(arr1, n){
    let sum = 0
for(let i = 0; i < n; i++){
sum+= arr1[i]

}

return sum

}
console.log(x(arr1, n));



// =================================================================

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function x(arr2){
let sum = []
for(let i = 0; i<arr2.length; i++){
if(arr2[i] % 2 == 0){
    sum.push(arr2[i])
}
}
return sum
}
console.log( x(arr2));


// ====================================================================


let arr3= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function x(arr3){
    let sum = []
    for(let i = 0 ;i < arr3.length; i++){
        sum.push(10*arr3[i])

    }
    return sum
}
console.log(x(arr3));

// =======================================

let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function x(arr4){
let sum = []
for(let i = 0; i<arr4.length; i++){
if(arr4[i] % 2-1 == 0){
    sum.push(arr4[i])
}
}
return sum
}
console.log( x(arr4));


// ==========================

let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function x(arr5){
let sum = []
for(let i = 0; i<arr5.length; i++){

    sum.unshift(arr5[i])

}
return sum
}
console.log( x(arr5));

// =====================================

let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function x(arr6){
let sum = []
for(let i = 0; i<arr6.length; i++){
if(arr6[i] % 2-1 == 0){
    sum.unshift(Math.max(arr6[i]))
}
}
return sum
}
console.log( x(arr6));



// ===========================


let arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function x(arr7){
let sum = []
for(let i = 0; i<arr7.length; i++){
if(arr7[i] % 2 == 0){
    sum.unshift(arr7[i])
}
}
return sum
}
console.log( x(arr7));


// =========================================


let arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function x(arr8){
    let sum=[]
    for(i = 0; i < arr8.length; i++){
        if(arr8[i] > 0){
            sum.push(arr8[i]/2)
        }
    }
return sum

}


console.log(x(arr8));



// ============================================



 const carFactory ={
    origin:"Japan",
    Created:1934,
    granCars:"Nissan GTR, Nissan Altima, Nissan 350z and others",
    mainResoirce:"Metall",
    area:"500 0m2",
    mainCarcolors:"white, black, red, green",
    mainExpartiyor:"Europe, America, Russia",

 }