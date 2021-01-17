var num = 1;
var fizz = "Fizz";
var buzz = "Buzz";
for (num; num < 100; num += 1) {
	var output = "";
	if (num % 3 === 0) {
		output += fizz;
	}
	if (num % 5 === 0) {
		output += buzz;
	}
	console.log(output || num);
}
