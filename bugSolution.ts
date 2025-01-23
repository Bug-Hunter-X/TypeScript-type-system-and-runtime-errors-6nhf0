function printString(str: string): void {
  console.log(str);
}

function printNumber(num: number): void {
  console.log(num);
}

//Type guard function to check if the value is a string
function isString(value: any): value is string {
  return typeof value === 'string';
}

//Type guard function to check if the value is a number
function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function printAnything(anything: any): void {
  if (isString(anything)) {
    printString(anything);
  } else if (isNumber(anything)) {
    printNumber(anything);
  } else {
    console.log("Can't print this type");
  }
}

printAnything("hello");
printAnything(123);
printAnything(true);
printAnything({});