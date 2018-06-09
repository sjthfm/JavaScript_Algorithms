function twoSum(numArray, sum) {
	var pairs = [];
	var hashTable = [];

	for (var i = 0; i < numArray.length; i++) {
		var currentNum = numArray[i];
		var counterPart = sum - currentNum;

		if (hashTable.indexOf(counterPart) !== -1) {
			pairs.push([currentNum, counterPart]);
		}
		hashTable.push(currentNum);
	}
	return pairs;
}

console.log(twoSum([1,6,4,5,3,3], 7));