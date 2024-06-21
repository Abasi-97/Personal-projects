const item = document.querySelector('.item');
const cost = document.querySelector('.cost');
const addbtn = document.querySelector('.addbtn');
const display = document.querySelector('.display');
const h3 = document.querySelector('h3');
const sumbtn = document.querySelector('.sumbtn');
const costArr = [];
let sum = 0;

//events
addbtn.addEventListener('click', addCreate);
sumbtn.addEventListener('click', sumUp);

//functions
function addCreate(){
    const list = document.createElement('div');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    p.textContent = item.value;
    p2.textContent = cost.value;
    list.classList.add('item-list');
    display.appendChild(list);
    list.appendChild(p);
    list.appendChild(p2);
    if(isNaN(cost.value)){
        p2.textContent = 'not a number';
    }else{
        costArr.push(Number(p2.textContent));
    }
    if(item.value < 0){
        p.textContent = 'You did not enter item';
        p2.textContent = 'Cannot display price';
        p2.textContent = null;
    }else{
        console.log(p.textContent);
    }
    if(!isNaN(item.value)){
        p.textContent = 'This is not an item';
        p2.textContent = 'Cannot display cost';
        p2.textContent = null;
    }else{
        console.log(p.textContent);
    }
    item.value = '';
    cost.value = '';

}
function sumUp(){
    for(let x = 0; x < costArr.length; x++){
        sum += costArr[x];

    }
    console.log(sum);
    h3.textContent = `Total: ${sum}`;
    sum = null;
}