"use strict";
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const btnElement = document.querySelector('button');
const numArray = [];
const textArray = [];
;
function add(num1, num2) {
    if (typeof (num1) === 'number' && typeof (num2) === 'number') {
        return num1 + num2;
    }
    else if (typeof (num1) === 'string' && typeof (num2) === 'string') {
        return num1 + '' + num2;
    }
}
function printresults(testObj) {
    console.log(testObj.val);
}
;
btnElement.addEventListener('click', (e) => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const numresult = add(+num1, +num2);
    numArray.push(numresult);
    const stringResult = add(num1, num2);
    textArray.push(stringResult);
    printresults({ val: numresult, timestamp: new Date() });
    console.log(numArray, textArray);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('it is working.');
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split('w'));
});
