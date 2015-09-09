// for .. in loop more or less like foreach in java

var obj = {a:2, b:4, g:10};

for(var prop in obj){
	console.log(prop + ' : ' + obj[prop]);
}

// don´t use for in with array

var a = [];
a[5] = 5;
for (var x in a) {
    // Shows only the explicitly set index of "5", and ignores 0-4
    console.log(x);
}


// Somewhere deep in your JavaScript library...
Array.prototype.foo = 1;

// Now you have no idea what the below code will do.
var b = [1,2,3,4,5];
for (var x in b){
    // Now foo is a part of EVERY array and 
    // will show up here as a value of 'x'.
    console.log(x);
}

// this would not happen in a for loop

for (var i = b.length - 1; i >= 0; i--) {
	console.log(b[i]);
};


// http://stackoverflow.com/questions/500504/why-is-using-for-in-with-array-iteration-such-a-bad-idea