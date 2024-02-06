let score=prompt("enter the score");
score=parseFloat(score);
if(score>=95)
{
    alert("grade is A+");

}
else if(score>=90 && score<95)
{
    alert("grade is A");
}
else if(score>=80 && score<90)
{
    alert("grade is B+");
}
else if(score>=70 && score<80)
{
    alert("grade is B");
}
else if(score>=60 && score<70)
{
    alert("grade is C");
}
else{
    alert("grade is D");
}
