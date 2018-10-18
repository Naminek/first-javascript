
var ourTable = document.getElementById("senate-data");
var myMembers = data.results[0].members;

for (var i = 0; i < myMembers.length; i++) {
	var fullName = [];
	for (var j = 0; j < myMembers.length; j++) {
		if (myMembers[j].middle_name == null) {
			fullName.push(myMembers[j].first_name + ' ' + myMembers[j].last_name);
		} else {
			fullName.push(myMembers[j].first_name + ' ' + myMembers[j].middle_name + ' ' + myMembers[j].last_name);
		}
	}
	var oneRow = document.createElement("tr");
	oneRow.insertCell().innerHTML = '<a href=' + myMembers[i].url + ' target="_blank";>' + fullName[i] + '</a>';
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
		for (var k = 0; k < checkboxChecked.length; k++) {
			var fullName = [];
			if (checkboxChecked.length == 0){
					if (myMembers[j].middle_name == null) {
						fullName.push(myMembers[j].first_name + ' ' + myMembers[j].last_name);
					} else {
						fullName.push(myMembers[j].first_name + ' ' + myMembers[j].middle_name + ' ' + myMembers[j].last_name);
					}
				var oneRow = document.createElement("tr");
				oneRow.insertCell().innerHTML = '<a href=' + myMembers[j].url + ' target="_blank";>' + fullName[j] + "</a>";
				oneRow.insertCell().innerHTML = myMembers[j].party;
				oneRow.insertCell().innerHTML = myMembers[j].state;
				oneRow.insertCell().innerHTML = myMembers[j].senate_class;
				oneRow.insertCell().innerHTML = myMembers[j].votes_with_party_pct;

				ourTable.append(oneRow);
			} else if (checkboxChecked[k] === myMembers[j].party) {
				for (var l = 0; l < myMembers.length; l++) {
					if (myMembers[l].middle_name == null) {
						fullName.push(myMembers[l].first_name + ' ' + myMembers[l].last_name);
					} else {
						fullName.push(myMembers[l].first_name + ' ' + myMembers[l].middle_name + ' ' + myMembers[l].last_name);
					}
				}
				var oneRow = document.createElement("tr");
				oneRow.insertCell().innerHTML = '<a href=' + myMembers[j].url + ' target="_blank";>' + fullName[j] + "</a>";
				oneRow.insertCell().innerHTML = myMembers[j].party;
				oneRow.insertCell().innerHTML = myMembers[j].state;
				oneRow.insertCell().innerHTML = myMembers[j].senate_class;
				oneRow.insertCell().innerHTML = myMembers[j].votes_with_party_pct;

				ourTable.append(oneRow);
			} 
		}
	}
}
getCheckedBoxes();


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
