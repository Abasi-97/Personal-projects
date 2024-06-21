let btn = document.querySelector('button');
let output = document.querySelector('h3');

btn.addEventListener('click', ()=>{
    let weight = parseFloat(document.querySelector('#weight').value);
    let height = parseFloat(document.querySelector('#height').value);
    calcBMI(weight, height);
})

function calcBMI(x, y){
    let BMI = Math.round(x/Math.pow(y,2));
    console.log(BMI);
    

    if(BMI < 16){
        output.innerHTML = `Your BMI is ${BMI}. You are very thin.
        Just eat a lot more. You'll be fine!`
    }
    else if(BMI <= 18.5){
        output.innerHTML = `Your BMI is ${BMI}. Eat a little more. 
        You'll be ok!`
    }
    else if(BMI <= 25){
        output.innerHTML = `Your BMI is ${BMI}. You are just fine!`
    }
    else if(BMI <= 30){
        output.innerHTML = `Your BMI is ${BMI}. You are overweight. 
        Excercise more and eat less energy dense foods!`
    }
    else if(BMI <= 35){
        output.innerHTML = `Your BMI is ${BMI}. You are obese class I.`
    }
    else if(BMI <= 40){
        output.innerHTML = `Your BMI is ${BMI}. You are obese class II.`
    }
    else if(BMI > 40){
        output.innerHTML = `Your BMI is ${BMI}. You are obese class III.`
    }

}