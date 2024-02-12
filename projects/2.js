const form=document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#results');
    
    
        if(height===' '|| height<0 || isNaN(height) ){
            results.innerHTML=(`PLEASE ENTER A VALID HEIGHT ${height}`);

        }
        else if(weight===' '|| weight<0 || isNaN(weight) ){
            results.innerHTML=(`PLEASE ENTER A VALID WEIGHT ${weight}`);


        }
        else{
            const BMI=(weight / ((height*height)/10000)).toFixed(2);
            results.innerHTML=(` BMI IS ${BMI}`);
            if(BMI<18.6)
            {
                results.innerHTML="<span>under weight</span>"
            }
            else if(BMI>18.6 && BMI<24.9)
            {
                results.innerHTML=("normal weight");
            }
            else{
                
                results.innerHTML=("overweight weight");
            }

        }
    


});