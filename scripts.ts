const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const btnElement = document.querySelector('button') as HTMLButtonElement;

const numArray: number[] = [];
const textArray: string[] = [];

type numOrStr = number | string;
// type testObj = { val: number; timestamp: Date };
interface testObj {
    val: number;
    timestamp: Date;
};


function add(num1: numOrStr, num2: numOrStr) {
    if (typeof (num1) === 'number' && typeof (num2) === 'number') {
        return num1 + num2;
    } else if (typeof (num1) === 'string' && typeof (num2) === 'string') {
        return num1 + '' + num2;
    }
}

function printresults(testObj: testObj) {
    console.log(testObj.val);
};

btnElement.addEventListener('click', (e) => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const numresult = add(+num1, +num2);
    numArray.push(numresult as number);
    const stringResult = add(num1, num2);
    textArray.push(stringResult as string);
    printresults({ val: numresult as number, timestamp: new Date() });
    console.log(numArray, textArray);
});

const myPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('it is working.');
    }, 1000);
});

myPromise.then((result) => {
    console.log(result.split('w'));
});