// for .. in loop more or less like foreach in java, but ...

var obj = {a:2, b:4, g:10};

for(var prop in obj){
	console.log(prop + ' : ' + obj[prop]);
}

// don´t use for in with array
// http://stackoverflow.com/questions/500504/why-is-using-for-in-with-array-iteration-such-a-bad-idea