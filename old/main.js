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
console.log(names [0]);
console.log(names [7]);
for (var i = 0; i < 8; i++) {
	console.log(names [i]);
}

//exercise2
var ages = [25, 26, 29, 24, 25];
var i = 0;
while (i < ages.length) {
	if (ages [i] % 2 === 0){
	console.log(ages [i]);	
	}
	i++;
}

for (var i = 0; i < ages.length; i++){
	if (ages [i] % 2 === 0)
	console.log(ages [i]);
}

//exercise3
function showMinAge(ourAges, minAge){
	var minAge = Math.min.apply(null, ourAges)
	console.log(minAge)
}

var ourAges = [25, 26, 29, 24, 25];
