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

function showMinAge () {
	console.log(Math.min.apply(null, ages))
}
showMinAge(ages)
