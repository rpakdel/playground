function sayName() {
    console.log('My name is ' + this.name);
}

let reza = {
    name: 'Reza',
    lastName: 'Pakdel',
    doSayName: sayName,
    doSayLastName: function() {
        console.log('My last name is ' + this.lastName);
    }
}

let jim = {
    name: 'Jim',
    lastName: 'Foote'
}

sayName();
reza.doSayName();
reza.doSayLastName();

let doSayLastName = reza.doSayLastName;
doSayLastName();

let jimSayName = sayName.bind(jim);
jimSayName();

let jimSayLastName = reza.doSayLastName.bind(jim);
jimSayLastName();

// this is not bound to object from the callback, it is bound to global this
setInterval(reza.doSayName, 3000);
// here we are binding this to reza
setInterval(reza.doSayName.bind(reza), 3000);
// when reza.doSayName() is called, JS will automatically bind this to reza object 
setInterval(function() { reza.doSayName(); }, 3000);