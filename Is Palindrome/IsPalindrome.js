// Example: race car

function isPalindrome(input) {
	input = input.toLowerCase();

	var inputChars = input.split('');
	var validChars = 'abcdefghijklmnopqrstuvwxyz'.split('');

	var lettersArr = [];
	inputChars.forEach(char => {
		if (validChars.indexOf(char) > -1) lettersArr.push(char);
	});

	if (lettersArr.join('') === lettersArr.reverse().join('')) return true;
	else return false;

}

//isPalindrome('not a palindrome');
//isPalindrome('race car');
//isPalindrome("Madam I'm Adam");