// undefined is a type in javascript
// if you try to use a variable that has not been assigned a value
// you will get 'undefined'

var foo;
console.log(foo); // undefined

// or with an Array
var a = [1,2, , , , 10];

for (var i = a.length - 1; i >= 0; i--) {
	console.log(a[i]);
};
