let score = document.querySelector('.score');
let start = document.querySelector('.start');
let display = document.querySelector('.display');
let sec = document.querySelector('.seconds');
let colorArr = ['yellow','orange', 'yellow', 'yellow', 'orange', 'yellow', 'orange', 'orange', 'orange', 
                'yellow', 'yellow', 'orange', 'yellow', 'yellow', 'yellow', 'yellow', 'orange', 'orange',
                'orange', 'orange', 'yellow', 'orange', 'yellow', 'yellow', 'yellow', 'orange', 'orange', 'yellow',
                'orange', 'orange'];
score.innerHTML = 0;
let event = false;
let scoreMessage = document.querySelector('.score-message');
start.addEventListener('click', runFunction);
function runFunction(){
    score.innerHTML = 0;
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
                }, 900);
                console.log(2200);
            }, x*1000);     
        }
        
    }, 3000);
    setTimeout(() =>{
        scoreMessage.innerHTML = `Your score is ${score.innerHTML}.`
    },35000);
}
display.addEventListener('click', (e) =>{
    event = true;
    if(display.style.backgroundColor === 'yellow'){
        score.innerHTML++;   
    } 
});