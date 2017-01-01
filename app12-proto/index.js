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

//const reza = new people();
const reza = Object.create(people);
reza.init('Reza', 'male', 38);
reza.print();

people.print = function() {
  console.log('This is a new print method instead of ' + this.name + ' is a ' + this.age + ' ' + this.sex);
}

robbert.print(); 