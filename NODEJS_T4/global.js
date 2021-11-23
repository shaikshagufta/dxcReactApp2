//console.log(global);
// setTimeout runs only once
global.setTimeout(()=>{
    console.log('in the timeout')
}, 3000); 
 setTimeout(() => {
    console.log('in the timeout');
    clearInterval(int);
}, 3000);
// runs repeatedly
const int = setInterval(() => {
    console.log('in the interval- setInterval')
}, 1000); 

//ctrl+c to cancle out the program

 console.log(__filename);
console.log(__dirname); 

 // no access to DOM methods
console.log(querySelector);
console.log(document.querySelector);