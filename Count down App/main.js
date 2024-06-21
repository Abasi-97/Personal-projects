//capturing the form elements
//by first selecting the parent form element
let formContainer = document.querySelector('.form-container');
let timeSelect = document.forms['time-select'];
let deg = 360;
//then going into the inner children of the main form parent to select the select-tags
//automatically, the options of the select-tag 
//elements with names hour, minute & second are selected can be accessed
let hours = timeSelect.hour;
let minutes = timeSelect.minute;
let seconds = timeSelect.second;
//selecting buttons
let start = document.querySelector('.start');
let pause = document.querySelector('.pause');
let reset = document.querySelector('.reset');
//selecting the circle
let circle = document.querySelector('.circle');
let circleInterval = null;
//making the hour, minute and seconds variables
let hrVal = 0;
let minVal = 0;
let secVal = 0;
let millsec = 1000;
let totalMillsec;
let millsecTotal;
//making containers for the time stamps
let sec = document.querySelector('.second');
let min = document.querySelector('.minute');
let hr = document.querySelector('.hour');
//make the interval
let interval = null;
//capturing the option values for each select element,
//and assigning them to the span elements with class names 
//hour, minute & seconds
hours.onchange = function(){
    hrVal = parseInt(this.value);
    if(hrVal < 10){
        hr.innerHTML = '0' + hrVal
    }else{
        hr.innerHTML = hrVal;
    }
    this.setAttribute('disabled', 'true');
}
minutes.onchange = function(){
    minVal = parseInt(this.value);
    if(minVal < 10){
        min.innerHTML = '0' + minVal;
    }else{
        min.innerHTML = minVal;
    }
    this.setAttribute('disabled', 'true');
}
seconds.onchange = function(){
    secVal = parseInt(this.value);
    
    if(secVal < 10){
        sec.innerHTML = '0' + secVal;
    }else{
        sec.innerHTML = secVal;
    }
    this.setAttribute('disabled', 'true');
}
//adding event listners for buttons
start.addEventListener('click', () =>{
    
    let secToMillsec = parseInt(seconds.value) * 1000;
    let minToMillsec = parseInt(minutes.value) * 60 * 1000;
    let hrToMillsec = parseInt(hours.value) * 60 * 60 * 1000;
    let totalMillsec = secToMillsec + minToMillsec + hrToMillsec;
   
    circle.style.display = 'flex';
    formContainer.style.display = 'none';
    circle.style.position = formContainer.style.position;
    start.disabled = true;
    if(circleInterval === null){
        circleInterval = setInterval(()=>{
            deg--;
            circle.style.background = `conic-gradient(yellow ${deg}deg, transparent 0deg)`;
        }, totalMillsec/360);
    }
    if(interval === null){
        
        interval = setInterval(()=>{
            millsec = millsec - 4;
            console.log(millsec);
            
            if(millsec <= 0){
                secVal = secVal - 1;
                millsec = 1000;
            }
            if(secVal === 0 && minVal != 0){
                minVal--;
                secVal = 60;
            }
            if(minVal === 0 && hrVal != 0 && secVal === 0){
                hrVal--;
                minVal = 59;
                secVal = 60;
            }
            if(hrVal != 0 && secVal == 0 && minVal != 0){
                secVal = 60;
            }
            if(secVal == 0 && minVal == 0 && hrVal == 0){
                clearInterval(interval);
            }
            
            if(secVal <= 0 && minVal <= 0 && hrVal <= 0){
                clearInterval(interval);
                secVal = 0;
                minVal = 0;
                hrVal = 0;
                //location.reload();
            }
            
            if(secVal < 10){
                sec.innerHTML = '0' + secVal;
            }else{
                sec.innerHTML = secVal;
            }
            if(minVal < 10){
                min.innerHTML = '0' + minVal;
            }else{
                min.innerHTML = minVal;
            }
            if(hrVal < 10){
                hr.innerHTML = '0' + hrVal
            }else{
                hr.innerHTML = hrVal;
            }
            
        },1);
    };
});
pause.addEventListener('click',()=>{
    start.disabled = false;
    if(interval != null){
        clearInterval(interval);
        interval = null;
    };
    if(circleInterval != null){
        clearInterval(circleInterval);
        circle.style.background = `conic-gradient(yellow ${deg}deg, transparent 0deg)`;
        circleInterval = null;
    }
});
reset.addEventListener('click',()=>{
    location.reload();
});