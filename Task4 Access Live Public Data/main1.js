

function clickBtn() {
	var showHidden = document.getElementById("hidden");
	var changeValue = document.getElementById("read_more_button");
	if (showHidden.style.display == "block") {
		showHidden.style.display = "none";
	} else {
		showHidden.style.display = "block";
	}
	if (changeValue.value == "read more...") {
		changeValue.value = "hide";
	} else {
		changeValue.value = "read more...";
	}
}






function getMembers(myMembers) {
	for (var i = 0; i < myMembers.length; i++) {
		var ourTable = document.getElementById("senate-data");
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
		oneRow.insertCell().innerHTML = myMembers[i].seniority;
		oneRow.insertCell().innerHTML = myMembers[i].votes_with_party_pct;
		ourTable.append(oneRow);
	}
}




function setFilter(myMembers) {
	var getStates = [];
	for (var i = 0; i < myMembers.length; i++) {
		getStates.push(myMembers[i].state);
	}
	var removeDupStates = getStates.filter(function (x, i, self) {
		return self.indexOf(x) === i;
	});
	var filterStates = removeDupStates.sort(function (a, b) {
		return (b < a ? 1 : -1);
	});
	//console.log(filterStates);
	var selectElement = document.getElementById("filter_state");
	for (var i = 0; i < filterStates.length; i++) {
		var makeOption = document.createElement("option");
		makeOption.value = filterStates[i];
		makeOption.innerText = filterStates[i];
		selectElement.appendChild(makeOption);
	}
}






function getChecked(myMembers) {
	var ourTable = document.getElementById("senate-data");
	var checkboxChecked = Array.from(document.querySelectorAll('input[name=party]:checked')).map(elt => elt.value);
//	console.log(checkboxChecked);
	var filterChecked = document.getElementById("filter_state").value;
//	console.log(filterChecked);
	// showing nothing in tbody once
	ourTable.innerHTML = "";
	for (var i = 0; i < myMembers.length; i++) {
		if (checkboxChecked.length < 1) {
			if (filterChecked == myMembers[i].state || filterChecked == "") {
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
				oneRow.insertCell().innerHTML = myMembers[i].seniority;
				oneRow.insertCell().innerHTML = myMembers[i].votes_with_party_pct;
				ourTable.append(oneRow);
			}
		} else {
			for (var j = 0; j < checkboxChecked.length; j++) {
				if (checkboxChecked[j] == myMembers[i].party && (filterChecked == myMembers[i].state || filterChecked == "")) {
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
					oneRow.insertCell().innerHTML = myMembers[i].seniority;
					oneRow.insertCell().innerHTML = myMembers[i].votes_with_party_pct;
					ourTable.append(oneRow);
				}
			}
		}
	}
}
