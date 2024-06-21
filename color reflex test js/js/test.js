let string = 'Hey welcome'
let newStrArr = [];
let strArr = string.split(' ');
for(let i = 0; i < strArr.length; i++){
        let word = strArr[i];
        if(word.length > 4){
            word = word.split('').reverse().join('');
            console.log(word);
            
        }
        newStrArr.push(word);
}
let newStr = newStrArr.join(' ');
console.log(newStr);


