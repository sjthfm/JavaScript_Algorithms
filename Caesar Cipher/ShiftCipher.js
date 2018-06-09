function shiftCipher(text, shiftAmt){

	shiftAmt = shiftAmt % 26;

	var lowerCaseText = text.toLowerCase();
	var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

	var newText = '';

	for (var i = 0; i < lowerCaseText.length; i++) {
		var currentLetter = lowerCaseText[i];

		if (currentLetter === ' ') {
			newText+= currentLetter;
			continue;
		}

		var currentIndex = alphabet.indexOf(currentLetter);
		var newIndex 	 = currentIndex+shiftAmt;

		if (newIndex > 25) newIndex = newIndex - 26;
		if (newIndex < 0 ) newIndex = 26 + newIndex;

		if (text[i] === text[i].toUpperCase()) {
			newText =+ alphabet[newIndex].toUpperCase();
		} else {
			newText += alphabet[newIndex];
		}
	}
	return newText;
}

shiftCipher('some text', 3);