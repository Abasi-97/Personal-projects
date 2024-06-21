let timeDisplay = document.querySelector('mark');
let passage = document.querySelector('p');
let beginBtn = document.querySelector('.begin');
let submit = document.querySelector('.Submit');
let message = document.querySelector('h3')
let typedText = document.querySelector('textarea');
let errorMark = document.querySelector('h4');
let sec = 0;
let min = 0;
let timer = null;
beginBtn.addEventListener('click',()=>{
    if(timer == null){
        timer = setInterval(()=>{
            sec++;
            if(sec == 60){
                min++;
                sec = 0;
            }
            timeDisplay.innerHTML=`${min}:${sec}`;
        },1000);
    }
})
submit.addEventListener('click', ()=>{
    if(timer !== null){
        clearInterval(timer);
        result(typedText);
    }
    
})
function result(typedText){
    let minute = min;
    let second = sec
    let timeSpent = (minute*60) + second;
    let time = Math.round(parseFloat(timeSpent/60));
    let typedWords = typedText.value.split(' ');
    let wpm = Math.round(parseFloat(typedWords.length/time));
    let passageWords = passage.innerText.split(' ');
    let errors = []
    console.log(passageWords);
    console.log(typedWords);
    
    for(let x = 0; x < typedWords.length; x++){
        if(typedWords[x] !== passageWords[x]){
            errors.push(typedWords[x]);
        }
    }
    
    
    
    
    let m = `Your typing speed is ${wpm} words per minute. You made ${errors.length} errors`;
    
    if(typedWords.length < passageWords.length){
        //errorMark.innerHTML = '';
        m = `you did not complete the passage. You probably did not add a space between two words or a word is missing.`
    }
    if(typedWords.length > passageWords.length){
        errorMark.innerHTML = '';
        m = `you typed more than what was required`
    }
    
    if(typedWords.length == 0){
        m = `you typed nothing!`
    }
    if(errors.length == 1){
        m = `Your typing speed is ${wpm} words per minute. You made an error. Scroll down to check error below`;
    }
    if(errors.length > 1){
        m = `Your typing speed is ${wpm} words per minute. You made ${errors.length} errors. Scroll down to check error below`;
    }

    
    
    for(let x = 0; x < typedWords.length; x++){
       errorMark.innerHTML += ` <span>${typedWords[x]}</span> `
    }
    let spans = document.querySelectorAll('span');
    console.log(spans.length);
    for(i = 0; i < spans.length; i++){
        if(spans[i].innerText !== passageWords[i]){
            spans[i].style.color = 'red';
        }
    }
    
    console.log(errors);


    message.innerText = m;
    
    
}