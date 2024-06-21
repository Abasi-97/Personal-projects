let score = document.querySelector('.score');
let start = document.querySelector('.start');
let click = document.querySelector('.click');
let display = document.querySelector('.display');
let sec = document.querySelector('.seconds');
let next = document.querySelector('.next')
let colorArr = ['yellow','orange', 'yellow', 'yellow', 'orange'];
score.innerHTML = 0;
let event = false;
let mainTestBtn = document.querySelector('.main-test');
let retry = document.querySelector('.retry');
let instruction = document.querySelector('.instruction')
let message = document.querySelector('.message');
let previousbtn = document.querySelector('.previous');
start.addEventListener('click', runFunction);
let message1 = 'Hello! Welcome! This is a tutorial for the main test which is going to test your reflexes. Nothing to sweat about. Please press the \'NEXT\' button for the next set of instructions';
let message2 = 'Here is how it works. You click the start button below and you see a set of colors flashing after 3 seconds';
let message3 = 'When you see the color flashing yellow, click on the color yellow! If you see the color flashing orange, do not click on it at all!';
let message4 = 'You are to see a number of 5 color flahes for which you should click or not click on';
let message5 = 'If you on color yellow when it appears, you will score one point. However if you click on color yellow when it appears, you do not get any points';
let message6 = 'Also, if you do not click color yellow when it appears, you do not get any point but if you do not click on color orange when it appears, you get one point'
let message7 = 'If you do everything correctly, you will have a total of 5 points and then you may proceed to the main test';
let message8 = 'Give it your best. You got this. Goodluck!';
let messages = [message1, message2, message3, message4, message5, message6, message7, message8];       
let presentInstruction = 0;
instruction.textContent = messages[presentInstruction];
start.style.display = 'none';
previousbtn.style.display = 'none';
//if(presentInstruction === 0){
    //previousbtn.style.display = 'none';
    
//}

next.addEventListener('click', () =>{
    previousbtn.style.display = 'block';
    presentInstruction++;
    instruction.textContent = messages[presentInstruction];
    if(presentInstruction === messages.length-1){
        start.style.display = 'block';
        next.style.display = 'none';
    }
})
previousbtn.addEventListener('click', () =>{
    presentInstruction--;
    instruction.textContent = messages[presentInstruction];
    next.style.display = 'block';
    start.style.display = 'none';
    if(presentInstruction === 0){
        previousbtn.style.display = 'none';
    }
})
retry.addEventListener('click',() => {
    score.innerHTML = 0;
    sec.innerHTML = 0;
    start.disabled = false;
    retry.style.display = 'none';
    message.textContent = '';
})
function runFunction(){
    start.disabled = true;
    sec.innerHTML = 3;
    setTimeout(() =>{
        for(let i = 0; i < 3; i++){
            setTimeout(() =>{
                sec.innerHTML--;
            }, i*1000);
        }
    }, 1000);
    setTimeout(() => {
        for(let x = 0; x < colorArr.length; x++){
            setTimeout(() => {
                event = false;
                display.style.backgroundColor = colorArr[x];
                setTimeout(() => {
                    if(event === false && display.style.backgroundColor === 'orange'){
                        score.innerHTML++;
                    }
                    display.style.backgroundColor = 'black';
                }, 1000);
            }, x*2200);        
        }   
    }, 3000);
    setTimeout(() =>{
        console.log(score.innerHTML);
        if(score.innerHTML === '5'){
            mainTestBtn.style.display = 'block';
            document.querySelector('.message').textContent = 'Great job! You were able to score 5 points! You can proceed to the main test!';
        }else{
            document.querySelector('.message').textContent = 'Sorry, you need a score of 5 to proceed to the main test. You got this. Do your best!';
            retry.style.display = 'block';
        }
    },14000);
}
display.addEventListener('click', (e) =>{
    event = true;
    if(display.style.backgroundColor === 'yellow'){
        score.innerHTML++;   
    }    
});