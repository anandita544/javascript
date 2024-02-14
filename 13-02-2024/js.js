
// geName:function(){
//     return this .name;}
//     const obj{
//     name:"anandita",
//    getName:getName
// }
// const obj2{
//     name:"kim",
//     getName:getName


// }
// const o{
//     namee:"anandita",
//     getUpper:function(){
//     return this.namee.toUpperCase();
//     }
// }
// let fn=o.getUpper;
// console.log(o.getUpper);
// console.log(fn());
// function greet(greeting){
//     return greeting + this.naam;
// }
// const o{
//     naam:"john";
// }
// let helloGreet=greet.bind(o,"hello");
// console.log(helloGreet());
// // console.log(helloGreet("hello"));

//callbacks

// function useless(fn){
//     fn();
// }
// function func(){
//     console.log("useless called me");
// }
// useless(func);



// function squarIT(arr){
//     let squareedarr=[];
//     for(let num of arr)
//     {
//         // squareedarr.push(num*num);
//         let tarnsformed=num+num;
//         squareedarr.push(tarnsformed);
//     }
//     return squareedarr;
// }
// let arr=[1,2,3,4];
// let squared=squareIt(arr);
// console.log(squared);



function greeter(greeting) {
    return function (name) {

    }
}