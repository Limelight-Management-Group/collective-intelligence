var counter = function(arr){
	return 'there are ' + arr.length +  ' elements in the array';
};

var adder = function(a,b){
	return `The sum of the two number is ${a+b}`;
};

var pi = 3.142;

console.log(counter(['king', 'weezy', 'LMG']));

module.exports = {
counter: counter,
adder: adder,
pi: pi 
}