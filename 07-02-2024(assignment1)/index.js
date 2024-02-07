alert("1.add 2.sub 3.mul 4. div");
let choice=prompt("enter ur choice");
choice=parseInt(choice);
let input;
let input1;
let add;
let div;
let mul;
let sub;
function addition(input,input1)
{
     input=prompt("enter a number1");
     input1=prompt("enter a number2");
     add=input+input1;
     alert(add);
     return add;
    
}
function subtraction(input,input1){
    input=prompt("enter a number1");
    input1=prompt("enter a number2");
    sub=input-input1;
    alert(sub);
    return sub;
    
}
function multiplication(input,input1){
    input=prompt("enter a number1");
    input1=prompt("enter a number2");
    mul=input*input1;
    alert(mul);
    return mul;
    
}
function division(input,input1){
    input=prompt("enter a number1");
    input1=prompt("enter a number2");
    div=input/input1;
    alert(div);
    return div;
   
}
switch(choice)
{
    case 1:
        addition();
        
        break;
    case 2:
        subtraction();
        
        break;
    case 3:
        multiplication();
        
        break;
    case 4:
        division();
        
        break;
     default:
        alert("operation is not possible");   
}