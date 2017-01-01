const Animal = (type, soundIn) => {
    // type is not stored
    // these variables are private to Animal unless exposed
    let sound = soundIn;
    let sex = 'Male';

    let say = function() {
        console.log(type + ' says ' + sound + ' and is ' + sex);
    };

    // return a new object exposing only what we need
    return {
        type, //ES6 feature sets type: type
        sound: sound,
        say: say,
        setSex: function(sexIn) {
            sex = sexIn;
        }
        // sex is private
    };
};

// no new keyword
let dog = Animal('dog', 'woof');
// does nothing
dog.sex = 'Female';
dog.say();

// can still replace 'public' properties 
dog.setSex = function(sexIn) {
    console.log('This function does nothing to ' + sexIn);
}
dog.setSex();

let cat = Animal('cat', 'meow');
cat.setSex('Female');
cat.say();

// no need to bind this because of closures
setInterval(dog.say, 1000);
setInterval(cat.say, 1000);