function printString(str: string): void {
  console.log(str);
}

function printNumber(num: number): void {
  console.log(num);
}

// This is the buggy part
function printAnything(anything: any): void {
  if (typeof anything === 'string') {
    printString(anything);
  } else if (typeof anything === 'number') {
    printNumber(anything);
  } else {
    console.log("Can't print");
  }
}

printAnything("hello");
printAnything(123);
printAnything(true); //Buggy call
printAnything({}); //Buggy call