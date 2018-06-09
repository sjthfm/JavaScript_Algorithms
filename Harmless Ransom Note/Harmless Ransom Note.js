// O(n + m) 
function harmlessRansomNote(noteText, magazineText) {
	var noteArray 		= noteText.split(' ');
	var magazineArray 	= magazineText.split(' ');
	var magazineObj 	= {};

	// O(m)
	magazineArray.forEach(word => { 
		if (!magazineObj[word]) magazineObj[word] = 0;
		magazineObj[word]++;
	});

	var canDoNote = true;

	// O(n)
	noteArray.forEach(word => { // word => -> function(word)
		if (magazineObj[word]) {
			magazineObj[word]--;
			if (magazineObj[word] < 0) {
				canDoNote = false;
			}
		} else {
			canDoNote = false;
		}
	});

	return canDoNote;
}

harmlessRansomNote('secret note for you from me', 'some words secret another set of things a note for you and a note for me from someone');

