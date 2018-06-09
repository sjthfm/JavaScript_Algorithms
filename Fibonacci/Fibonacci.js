// O(2^n)
function fibonacci(pos) {
	if (pos < 3) return 1;
	else return fibonacci(pos - 1) + fibonacci(pos - 2);
}
console.log(fibonacci(40));