console.log(Object.prototype);

let obj = {};

console.log(obj.__proto__ === Object.prototype);
console.log(obj.prototype === Object.prototype);

function printFunc() {
    console.log('standalone print: ' + this.name + ': ' + this.age);
}

function Foo(name, age) {
    this.name = name;
    this.age = age;
    this.print = function() {
        console.log('this print:' + this.name + ': ' + this.age);
    }    
    this.print2 = printFunc;
}

Foo.prototype.print3 = function() {
    console.log('new print: ' + this.name + ': ' + this.age);
}

let f = new Foo("Reza", 38);
f.print();
f.print2();
f.print3();