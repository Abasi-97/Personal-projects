let seconds = 5;
let milliseconds = 0;
const startTime = new Date().getTime();
const interval = setInterval(() => {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime + milliseconds;
    milliseconds = elapsedTime;
}, 1);
console.log(startTime);
