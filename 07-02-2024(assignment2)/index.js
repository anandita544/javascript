const items=[1,"anandita",2,"singh",3];


function sum()

{   let sum1=0;
    for(let i=0;i<items.length;i++)
    if(typeof(items[i])=="number")
    {
      sum1=sum1+items[i];
      
    
}

console.log(sum1);
}
sum();
