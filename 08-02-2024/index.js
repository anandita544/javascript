// const myobj={"name":"john"
// ,"age":12,
// }      //property-key
// const myobj={name:"john"
// ,age:12,password:"30494f",
// posts=["p1","p2"],
// "getposts":function(){
//     return ("hello"),
//     "getposts":function(){
//         return this.posts;
//     }
    
// }

// }  
// console.log(myobj.name);
// console.log(myobj["name"]);
// //for..in
// for(let key in myobj){
//     console.log(key);
// }
// for(let key in myobj){
//     console.log(myobj[key[]]);
// }
// console.log(myobj.posts);
// //console.log(myobj.getposts);
// //console.log(myobj.getposts());
const newobj={
    age:34;
};
newobj.anme="kim";
newobj.getname=function()
{
    return this.name;
}
//constructor
function Student(name,age)
{
    this.name=name;
    this.age=age;
    this.getname=function(){
        return this .name;
    }
}
const st1=new Student("john",13);