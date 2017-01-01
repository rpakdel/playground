let factory = function(v) {
    let b1 = v;
    return {
        b: b1,
        do: function() {
            console.log(this.b);
        }
    }    
}

let f = factory('Initial');
f.do();


process.exit();