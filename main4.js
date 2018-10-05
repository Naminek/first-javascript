//1.
console.log("Starting javascript...");

//exercise1
var myName = "Namine";
console.log(myName);

//exercise2
var age = 29;
console.log(age);

//exercise3
var ignasiAge = 32;
var ageDiff = age - ignasiAge;
console.log(ageDiff);

//exersise4
if (age > 21) {
	console.log("You are older than 21");
} else {
	console.log("You are not older than 21");
}

//exercise5
if (ignasiAge > age) {
	console.log("Ignasi is older than you");
} else if (ignasiAge == age) {
	console.log("You have the same age as Ignasi");
} else if (ignasiAge < age) {
	console.log("Ignasi is younger than you");
}

//2.
//exercise1
var names = ["Laul", "Mike", "Ronnie", "Hiu", "Jake", "Namine", "Ottavia", "Andoni"];
names.sort();
console.log(names[0]);
console.log(names[7]);
for (var i = 0; i < 8; i++) {
	console.log(names[i]);
}


//exercise2
var ages = [25, 26, 29, 24, 25];
var i = 0;
var j = 0;
while (i < ages.length) {
	if (i < 1) {
		console.log(ages)
	}
	i++;
}

while (j < ages.length) {
	if (ages[j] % 2 === 0) {
		console.log(ages[j]);
	}
	j++;
}

for (var k = 0; k < 5; k++) {
	if (ages[k] % 2 === 0) {
		console.log(ages[k]);
	}
}


//exercise3
//var min = Math.min(...ages);
//console.log(min);

function showMinAge(ourAgesMin, smallestAge) {
	for (var i = 1; i < ourAgesMin.length; i++) {
		if (ourAgesMin[i] < smallestAge) {
			smallestAge = ourAgesMin[i];
		}
	}
	console.log(smallestAge);
}
var ages = [25, 26, 29, 24, 25];
var smallest = ages[0];
showMinAge(ages, smallest)



//exercise4
//var ages = [25, 26, 29, 24, 25];
//var max = Math.max(...ages);
//console.log(max);
function showMaxAge(ourAgesMax, largestAge) {
	for (var i = 1; i < ourAgesMax.length; i++) {
		if (ourAgesMax[i] > largestAge) {
			largestAge = ourAgesMax[i];
		}
	}
	console.log(largestAge);
}
var largest = ages[0];
showMaxAge(ages, largest)


//exercise5
function printSix(myArrayExFive, myIndexExFive) {
	console.log(myArrayExFive[myIndexExFive]);
}
var arrayExFive = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
var indexExFive = 1;
printSix(arrayExFive, indexExFive)


//exercise6
var arrayExsix = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
var repeatNum = arrayExsix.filter(function (x, i, self) {
	return self.indexOf(x) === i && i !== self.lastIndexOf(x);
});
var sortRepeatNum = repeatNum.sort(function (a, b) {
	return a - b;
	//return(a < b ? 1 : -1);
});
console.log(sortRepeatNum)


//exercise7
function showMyColor(findMyColor) {
	var myColorSrting = findMyColor.join(',');
	console.log(myColorSrting);
}
var myColor = ["Red", "Green", "White", "Black"];
showMyColor(myColor)


//4.
//exercise1
var x = 32443;
var stringX = String(x);
var arrayX = stringX.split("");
var revArrayX = arrayX.reverse();
var revStringX = revArrayX.join("");
var revX = Number(revStringX)
console.log(revX);


//exercise2
function showInAlpha(findAlphaX) {
	var arrayAlphaX = findAlphaX.split("");
	console.log(arrayAlphaX.sort().join(""));
}
var alphaX = 'webmaster';
showInAlpha(alphaX)


//exersice3
function uppercase(lowerX) {
	var stringLowerX = lowerX.split(" ");
	var upperFirstChar = [];
	for (var i = 0; i < stringLowerX.length; i++) {
		upperFirstChar.push(stringLowerX[i].slice(0, 1).toUpperCase() + stringLowerX[i].substring(1));
	}
	var stringUpperX = upperFirstChar.join(" ")
	console.log(stringUpperX);
}
var x = "prince of persia";
uppercase(x)


//exwecise4
function findLongest(longestX) {
	var stringLongestX = longestX.split(" ");
	var longest = stringLongestX[0];
	for (var i = 1; i < stringLongestX.length; i++) {
		if (stringLongestX[i].length > longest.length) {
			longest = stringLongestX[i];
		}
	}
	console.log(longest);
}

var x = "Web Development Tutorial";
findLongest(x)
