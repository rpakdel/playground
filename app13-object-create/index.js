const animal = {
  init: function(type, sound) {
    this.type = type;
    this.sound = sound;
  },

  say: function() {
    console.log(this.type + ' says ' + this.sound);
  }
}

// not going to work
// dog = new animal();



const people = {
  init: function(name, sex, age) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  },

  print: function() {
    console.log(this.name + ' is a ' + this.age + ' ' + this.sex);
  }
}

const robbert = Object.create(people);
robbert.init('Robbert', 'male', 45);
robbert.print(); 

const reza = Object.create(people);
reza.init('Reza', 'male', 38);
reza.print();

// replace the proto's print 
people.print = function() {
  console.log('This is a new print method instead of \"' + this.name + ' is a ' + this.age + ' ' + this.sex + "\"");
}

// replace reza's print'
reza.print = function() {
  console.log('This print function is for ' + this.name);
}

robbert.print(); 
reza.print();

reza.newFunc = function() {
  console.log('This is a new function for ' + this.name);
}

reza.newFunc();
// going to fail
// robbert.newFunc();