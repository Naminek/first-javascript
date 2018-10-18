var ourTable = document.getElementById("senate-data");
var myMembers = data.results[0].members;

for (var i = 0; i < myMembers.length; i++) {
	var fullName;
	if (myMembers[i].middle_name == null) {
		fullName = myMembers[i].first_name + ' ' + myMembers[i].last_name;
	} else {
		fullName = myMembers[i].first_name + ' ' + myMembers[i].middle_name + ' ' + myMembers[i].last_name;
	}
	var oneRow = document.createElement("tr");
	oneRow.insertCell().innerHTML = '<a href=' + myMembers[i].url + ' target="_blank";>' + fullName + '</a>';
	oneRow.insertCell().innerHTML = myMembers[i].party;
	oneRow.insertCell().innerHTML = myMembers[i].state;
	oneRow.insertCell().innerHTML = myMembers[i].senate_class;
	oneRow.insertCell().innerHTML = myMembers[i].votes_with_party_pct;
	ourTable.append(oneRow);

}


function clickBtn() {
	var showHidden = document.getElementById("hidden");

	if (showHidden.style.display == "block") {
		showHidden.style.display = "none";
	} else {
		showHidden.style.display = "block";
	}
}



function getCheckedBoxes() {
	var checkboxChecked = Array.from(document.querySelectorAll('input[name=party]:checked'))
		.map(elt => elt.value);

	console.log(Array.from(document.querySelectorAll('input[name=party]:checked'))
		.map(elt => elt.value))
	// showing nothing in tbody once
	ourTable.innerHTML = "";
	for (var j = 0; j < myMembers.length; j++) {
		if (checkboxChecked.length < 1) {
			var fullName;
			if (myMembers[j].middle_name == null) {
				fullName = myMembers[j].first_name + ' ' + myMembers[j].last_name;
			} else {
				fullName = myMembers[j].first_name + ' ' + myMembers[j].middle_name + ' ' + myMembers[j].last_name;
			}
			var oneRow = document.createElement("tr");
			oneRow.insertCell().innerHTML = '<a href=' + myMembers[j].url + ' target="_blank";>' + fullName + "</a>";
			oneRow.insertCell().innerHTML = myMembers[j].party;
			oneRow.insertCell().innerHTML = myMembers[j].state;
			oneRow.insertCell().innerHTML = myMembers[j].senate_class;
			oneRow.insertCell().innerHTML = myMembers[j].votes_with_party_pct;

			ourTable.append(oneRow);
		} else {
			for (var k = 0; k < checkboxChecked.length; k++) {

				if (checkboxChecked[k] === myMembers[j].party) {
					var fullName;
					if (myMembers[j].middle_name == null) {
						fullName = myMembers[j].first_name + ' ' + myMembers[j].last_name;
					} else {
						fullName = myMembers[j].first_name + ' ' + myMembers[j].middle_name + ' ' + myMembers[j].last_name;
					}
					var oneRow = document.createElement("tr");
					oneRow.insertCell().innerHTML = '<a href=' + myMembers[j].url + ' target="_blank";>' + fullName + "</a>";
					oneRow.insertCell().innerHTML = myMembers[j].party;
					oneRow.insertCell().innerHTML = myMembers[j].state;
					oneRow.insertCell().innerHTML = myMembers[j].senate_class;
					oneRow.insertCell().innerHTML = myMembers[j].votes_with_party_pct;

					ourTable.append(oneRow);
				}
			}
		}
	}
}
//getCheckedBoxes();

//new function

//var ourTable = document.getElementById("senate-data");
//var myMembers =　data.results[0].members;
//
//for (var i = 0; i < myMembers.length; i++){
//	var oneRow = document.createElement("tr");
//	if (myMembers.middle_name == null){
//	
//	oneRow.insertCell().innerHTML = myMembers[i].first_name + " " + myMembers[i].last_name;
//	oneRow.insertCell().innerHTML = myMembers[i].party;
//	oneRow.insertCell().innerHTML = myMembers[i].state;
//	oneRow.insertCell().innerHTML = myMembers[i].senate_class;
//	oneRow.insertCell().innerHTML = myMembers[i].votes_with_party_pct;;
//	} else {
//	oneRow.insertCell().innerHTML = myMembers[i].first_name + " " + myMembers[i].middle_name + " " + myMembers[i].last_name;
//	oneRow.insertCell().innerHTML = myMembers[i].party;
//	oneRow.insertCell().innerHTML = myMembers[i].state;
//	oneRow.insertCell().innerHTML = myMembers[i].senate_class;
//	oneRow.insertCell().innerHTML = myMembers[i].votes_with_party_pct;
//	}
//	ourTable.append(oneRow)
//}
