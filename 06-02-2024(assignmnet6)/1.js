let add;

alert("1.add 2.subtract 3.multiply 4. divide");
let choice=prompt("enter ur choice");
let num1=prompt("enter first number");
let num2=prompt("enter second number");
num1=parseFloat(num1);
num2=parseFloat(num2);
switch(choice)
{
    case "add":
        alert(num1+num2);
        break;
    case "subtract":
        alert(num1-num2);
        break;
    case "multiply":
        alert(num1*num2);
        break;
    case "divide":
        alert(num1/num2);
        break;
    default:    
         alert("sorry! operation is not defined");

}
