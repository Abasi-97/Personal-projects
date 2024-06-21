let str = 'Have you wondered what are the most common Javascript questions developers are asked in interviews? Well, in this article we are going to go through some of the most anticipated questions (and their answers) to help you get going in job interviews and make a good impression with your knowledge.'
let splitted = str.split(' ')
console.log(splitted.length);
console.log(splitted);

errorMark.innerHTML = typedText.value;
for(let x = 0; x < errors.length; x++){
    errorMark.innerHTML = errorMark.innerHTML.replace(errors[x], '<mark>$&</mark>')
}