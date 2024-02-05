let celcius="celcius";
let fahernheit="fahernheit";
let kilomiles="kilomiles";
let miles="miles";
alert("1.celcius 2.fahernheit 3.kilomiles 4.miles");
let unit1=prompt("enter the  unit to convert from");
let unit2=prompt("enter the unit to convert to");
let num1=prompt("enter the value");
num1=parseInt(num1);
let num2;
if(num1==NaN)
{
    alert("undefined number")
}
else if(unit1==celcius && unit2==fahernheit)
{
  num2=num1*1.8+32;
  alert(num2);
}
else if(unit1==fahernheit && unit2==celcius)
{
    num2=(num1-32)*(5/9);
    alert(num2);
}

else if(unit1==miles && unit2==kilomiles)
{
    num2=num1*1.609;
    alert(num2);
}

else if(unit1==kilomiles && unit2==miles)
{
    num2=num1*0.6213;
    alert(num2);
}
else{
    alert("not possible to convert");
}
