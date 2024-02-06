let value=prompt("enter the value");

if(value==" " && value=='0' || value=='null' || value=='undefined' || value=='NaN'  || value=='false' )
{
    alert("value is falsy");
}
else
{
    alert("value is truthy");
}