var arr = ['Claus', 'Tove', 'Torben'];

console.log(arr);

console.log(arr[2]); // Torben

arr.push('Svend'); // Svend at the end

console.log(arr);

arr[10] = 'Thea'; // in between are still undefined

console.log(arr);

for (var i = arr.length - 1; i >= 0; i--) {
	console.log(arr[i]);
};

// forEach will only print out the defined
arr.forEach(function (element) {
	console.log(element);
});

console.log(typeof arr); // Object
console.log(arr instanceof Array); // True