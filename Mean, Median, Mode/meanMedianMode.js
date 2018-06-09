function meanMedianMode(array) {
	return {
		mean: 	getMean(array),
		median: getMedian(array),
		mode: 	getMode(array)
	};
}

function getMean(array) {
	var sum = 0;
	array.forEach(num => {
		sum+=num;
	});
	return (sum / array.length);
}

function getMedian(array) {
	array.sort(function(a, b) { return a - b });
	var median;

	if (array.length % 2 !== 0) {
		median = array[Math.floor(array.length / 2)];
	} else {
		var midOne = array[(array.length / 2) - 1];
		var midTwo = array[array.length/2];
		median = (midOne + midTwo / 2);
	}

	return median;
}

function getMode(array) {
  var modeObj = {};
  
  array.forEach(num => {
    if (!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++;
  });
  
  var maxFrequency = 0;
  var modes = [];
  for (var num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObj[num];
    }
    else if (modeObj[num] === maxFrequency) modes.push(num);
  }
  if (modes.length === Object.keys(modeObj).length) modes = [];
  return modes;
}

meanMedianMode([1,2,3,4,5,4,6,1,2]);