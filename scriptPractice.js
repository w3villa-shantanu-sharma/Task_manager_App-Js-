
// let bigInt = 1234567890123456789012345678901234567890n;
// console.log(bigInt);
// console.log(typeof bigInt);


//About the argument keyword 

// function add(){
//     let sum = 0;

//     for(let i = 0; i< arguments.length; ++i){
//         sum += arguments[i];
//     }
//     return sum;
// }






// fetch('https://dog.ceo/api/breeds/image/random').then((response) => response.json()).then((json) => {
//             console.log("got the data");
//             console.log(json.message);
//             image.src = json.message;
        
        
//         })




// function cookFood(callback) {
//     setTimeout(() => {
//         console.log(" Food Cooked");
//         callback();
//     }, 1000);
// }

// function serveFood(callback) {
//     setTimeout(() => {
//         console.log(" Food Served");
//         callback();
//     }, 1000);
// }

// function eatFood(callback) {
//     setTimeout(() => {
//         console.log(" Eating Food");
//         callback();
//     }, 1000);
// }

// // Callback Hell (Pyramid of Doom)
// orderFood(() => {
//     cookFood(() => {
//         serveFood(() => {
//             eatFood(() => {
//                 console.log("Finished Eating");
//             });
//         });
//     });
// });



// const promise = new Promise( (res , rej)=>{
//     const x = 30;
//     const y = 20;

//     if(x > y){
//         res("Success");
//     }else{
//         rej("Failed");
//     }
// });
// console.log(promise);

// const p = new Promise((res , rej) =>{
//     setTimeout(()=>{
//         res('Success');
//     }  , 4000);
//     setTimeout(()=>{
//         rej('Failed');
//     }, 6000)
// })


// async function sendData() {
//         let userData = {
//             name: "John Doe",
//             email: "john@example.com"
//         };
    
//         try {
//             let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(userData)
//             });
    
//             let data = await response.json();
//             console.log("Response:", data);
//         } catch (error) {
//             console.error("Fetch Error:", error);
//         }
//     }
    
//     sendData();




// /Recursion 

// function recursiveFunction(n){
//     if(n <2) {
//         return n;
//     }
//     return recursiveFunction(n-1) + recursiveFunction(n-2);
// }
// console.log(recursiveFunction(7)); // Output: 13


// function factorial(n){
//     if( n == 0){
//         return 1;
//     }
//     return n * factorial(n-1);
// }

// console.log(factorial(5)); // Output: 120

































// function linearsearch(arr , target){
//     for(let i = 0; i<arr.length; ++i){
//         if(arr[i] === target){
//             return i;

//         }
//     }
//     return -1;

// }

// let arr = [1 , 29 , 93 , 84 ,498 , 23 , 45 , 67 , 89];
// let target = 23;
// let res = linearsearch(arr , target);
// console.log(res);