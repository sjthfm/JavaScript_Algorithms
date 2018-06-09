// Without using prebuilt function
function reverseWords(text) {
	var wordsArray = text.split(' ');
	var reversedWordsArray = [];

	wordsArray.forEach(word => {
		var reversedWord = '';

		for (var i = word.length - 1; i >= 0; i--){
			reversedWord+= word[i];
		}

		reversedWordsArray.push(reversedWord);
	});
	return reversedWordsArray.join(' ');
}

reverseWords('text to reverse');