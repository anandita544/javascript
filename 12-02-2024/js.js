//STAck memory and heap memory
//stack -> primitive
//heap ->composite(array,functions,objects)
// let arr1=[10,20,30,40,50];
// let arr2=arr1.slice(0,3);
// let arr1=[10,20];
// let [a,b]=arr1;
// ...rest operator
// let arr1=[10,20,30,40];
// let [a,b,...c]=arr1;
// let arr3=[...arr1];
let ol = { name: "john", age: 20 };
let { name: username, age, ...cred } = ol;
let o2 = { ...o1 };


function addPrefix(pfx, ...words) {
   let prefixwords = [];
   for let word of words{
      prefixwords.push(pfx + word);
   }
   return prefixwords;
}
console.log(addPrefix("mis", "guide", "lead", "treat"));
