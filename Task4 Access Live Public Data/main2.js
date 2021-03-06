//votes with party
function makeMyStatistics(myMembers, myStatistics) {
	function getAverage() {
		var votesOfR = [];
		var votesOfD = [];
		var votesOfI = [];
		for (var i = 0; i < myMembers.length; i++) {
			if (myMembers[i].party == "R") {
				votesOfR.push(myMembers[i].votes_with_party_pct);
			} else if (myMembers[i].party == "D") {
				votesOfD.push(myMembers[i].votes_with_party_pct);
			} else if (myMembers[i].party == "I") {
				votesOfI.push(myMembers[i].votes_with_party_pct);
			}
		}
		myStatistics.number_of_Republican = votesOfR.length;
		myStatistics.number_of_Democrats = votesOfD.length;
		myStatistics.number_of_Independent = votesOfI.length;

		function getSum(votes) {
			var sum = 0;
			for (var i = 0; i < votes.length; i++) {
				sum = sum + votes[i];
			}
			return (sum);
		}
		var sumR = getSum(votesOfR);
		var sumD = getSum(votesOfD);
		var sumI = getSum(votesOfI);

		function getAverage(votes) {
			return (getSum(votes) / votes.length) || 0;
		}

		var averageR = getAverage(votesOfR).toFixed(2);
		var averageD = getAverage(votesOfD).toFixed(2);
		var averageI = getAverage(votesOfI).toFixed(2);
		var averageT = ((sumR + sumD + sumI) / myMembers.length).toFixed(2);

		myStatistics.average_for_voting_Republican = averageR;
		myStatistics.average_for_voting_Democrats = averageD;
		myStatistics.average_for_voting_Independent = averageI;
		myStatistics.average_for_total = averageT;

	}
	getAverage();


	//about parcentage of missed votes

	var sortPercentageOfMissedVotes = myMembers.map(member => member.missed_votes_pct).sort(function (a, b) {
		return (a < b ? 1 : -1);
	});


	var bottomMissedVotes = [];
	n = Math.ceil(0.1 * sortPercentageOfMissedVotes.length);
	for (var i = 0; i < n; i++) {
		if (sortPercentageOfMissedVotes[i] === sortPercentageOfMissedVotes[n]) {
			n = n + 1;
		}
		bottomMissedVotes.push(sortPercentageOfMissedVotes[i]);
	}

	var sortPercentageOfMissedVotesFromTop = sortPercentageOfMissedVotes.reverse();
	var topMissedVotes = [];
	m = Math.ceil(0.1 * sortPercentageOfMissedVotesFromTop.length);
	for (var i = 0; i < m; i++) {
		if (sortPercentageOfMissedVotesFromTop[i] === sortPercentageOfMissedVotesFromTop[m]) {
			m = m + 1;
		}
		topMissedVotes.push(sortPercentageOfMissedVotesFromTop[i]);
	}

	var bottomMissedVotesMember = myMembers.filter(function (self) {
		return self.missed_votes_pct >= bottomMissedVotes[bottomMissedVotes.length - 1];
	});

	function compareMissed(a, b) {
		var r = 0;
		if (a.missed_votes_pct > b.missed_votes_pct) {
			r = -1;
		} else if (a.missed_votes_pct < b.missed_votes_pct) {
			r = 1;
		}

		return r;
	}

	var bottomMissedVotesMemberInOrder = bottomMissedVotesMember.sort(compareMissed);

	myStatistics.least_engaged = bottomMissedVotesMemberInOrder;



	var topMissedVotesMember = myMembers.filter(function (self) {
		return self.missed_votes_pct <= topMissedVotes[topMissedVotes.length - 1];
	});
	var topMissedVotesMemberInOrder = topMissedVotesMember.sort(compareMissed).reverse();
	myStatistics.most_engaged = topMissedVotesMemberInOrder;



	var sortPercentageOfPartyVotes = (myMembers.map(member => member.votes_with_party_pct)).sort(function (a, b) {
		return (a < b ? 1 : -1);
	})


	var topPartyVotes = [];
	n = Math.ceil(0.1 * sortPercentageOfPartyVotes.length);
	for (var i = 0; i < n; i++) {
		if (sortPercentageOfPartyVotes[i] === sortPercentageOfPartyVotes[n]) {
			n = n + 1;
		}
		topPartyVotes.push(sortPercentageOfPartyVotes[i]);
	}
	console.log(topPartyVotes);

	var sortPercentageOfPartyVotesFromTop = sortPercentageOfPartyVotes.reverse();
	var bottomPartyVotes = [];
	m = Math.ceil(0.1 * sortPercentageOfPartyVotesFromTop.length);
	for (var i = 0; i < m; i++) {
		if (sortPercentageOfPartyVotesFromTop[i] === sortPercentageOfPartyVotesFromTop[m]) {
			m = m + 1;
		}
		bottomPartyVotes.push(sortPercentageOfPartyVotesFromTop[i]);
	}


	var bottomPartyVotesMember = myMembers.filter(function (self) {
		return self.votes_with_party_pct <= bottomPartyVotes[bottomPartyVotes.length - 1];
	});

	function compareParty(a, b) {
		var r = 0;
		if (a.votes_with_party_pct > b.votes_with_party_pct) {
			r = -1;
		} else if (a.votes_with_party_pct < b.votes_with_party_pct) {
			r = 1;
		}

		return r;
	}

	var bottomPartyVotesMemberInOrder = bottomPartyVotesMember.sort(compareParty).reverse();
	myStatistics.least_loyal = bottomPartyVotesMemberInOrder;

	var topPartyVotesMember = myMembers.filter(function (self) {
		return self.votes_with_party_pct >= topPartyVotes[topPartyVotes.length - 1];
	});

	var topPartyVotesMemberInOrder = topPartyVotesMember.sort(compareParty);
	myStatistics.most_loyal = topPartyVotesMemberInOrder;

	console.log(myStatistics);
}




//make table ata a aglance
function makeTableGlance(myMembers, myStatistics) {
	var tableGlance = document.getElementById("table_glance");
	var firstRowArray = ["Democrats", myStatistics.number_of_Democrats, myStatistics.average_for_voting_Democrats];
	var secondRowArray = ["Republicans", myStatistics.number_of_Republican, myStatistics.average_for_voting_Republican];
	var thirdRowArray = ["Independents", myStatistics.number_of_Independent, myStatistics.average_for_voting_Independent];
	var forthRowArray = ["Total", myMembers.length, myStatistics.average_for_total];

	function makeRowGlance(myRowArray) {
		var oneRowGlance = document.createElement("tr");
		oneRowGlance.insertCell().innerHTML = myRowArray[0];
		oneRowGlance.insertCell().innerHTML = myRowArray[1];
		oneRowGlance.insertCell().innerHTML = myRowArray[2];

		tableGlance.append(oneRowGlance);
	}
	makeRowGlance(firstRowArray);
	makeRowGlance(secondRowArray);
	makeRowGlance(thirdRowArray);
	makeRowGlance(forthRowArray);
}



//make table least and most engaged
function makeTables10Percent(myMembers, myStatistics) {
	if (document.title == "TGIF Congress113 Senate Attendance" ||
		document.title == "TGIF Congress113 House Attendance") {
		var tableLeastEngaged = document.getElementById("table_least_engaged");
		var statisticsLeastEngaged = myStatistics.least_engaged;
		var tableMostEngaged = document.getElementById("table_most_engaged");
		var statisticsMostEngaged = myStatistics.most_engaged;

		function makeTableEngaged(tableEngaged, statisticsEngaged) {
			for (var i = 0; i < statisticsEngaged.length; i++) {
				var fullName;
				if (statisticsEngaged[i].middle_name == null) {
					fullName = statisticsEngaged[i].first_name + ' ' + statisticsEngaged[i].last_name;
				} else {
					fullName = statisticsEngaged[i].first_name + ' ' + statisticsEngaged[i].middle_name + ' ' + statisticsEngaged[i].last_name;
				}
				var oneRowEngaged = document.createElement("tr");
				oneRowEngaged.insertCell().innerHTML = '<a href=' + statisticsEngaged[i].url + ' target="_blank";>' + fullName + '</a>';
				oneRowEngaged.insertCell().innerHTML = statisticsEngaged[i].missed_votes;
				oneRowEngaged.insertCell().innerHTML = statisticsEngaged[i].missed_votes_pct;

				tableEngaged.append(oneRowEngaged);
			}
		}
		makeTableEngaged(tableLeastEngaged, statisticsLeastEngaged);
		makeTableEngaged(tableMostEngaged, statisticsMostEngaged);

	} else if (document.title == "TGIF Congress113 Senate Loyalty" ||
		document.title == "TGIF Congress113 House Loyalty") {

		//make table least and most loyal
		var tableLeastLoyal = document.getElementById("table_least_loyal");
		var statisticsLeastLoyal = myStatistics.least_loyal;
		var tableMostLoyal = document.getElementById("table_most_loyal");
		var statisticsMostLoyal = myStatistics.most_loyal;

		function makeTableLoyal(tableLoyal, statisticsLoyal) {
			for (var i = 0; i < statisticsLoyal.length; i++) {
				var fullName;
				if (statisticsLoyal[i].middle_name == null) {
					fullName = statisticsLoyal[i].first_name + ' ' + statisticsLoyal[i].last_name;
				} else {
					fullName = statisticsLoyal[i].first_name + ' ' + statisticsLoyal[i].middle_name + ' ' + statisticsLoyal[i].last_name;
				}
				var oneRowLoyal = document.createElement("tr");
				oneRowLoyal.insertCell().innerHTML = '<a href=' + statisticsLoyal[i].url + ' target="_blank";>' + fullName + '</a>';
				oneRowLoyal.insertCell().innerHTML = statisticsLoyal[i].total_votes;
				oneRowLoyal.insertCell().innerHTML = statisticsLoyal[i].votes_with_party_pct;

				tableLoyal.append(oneRowLoyal);
			}
		}

		makeTableLoyal(tableLeastLoyal, statisticsLeastLoyal);
		makeTableLoyal(tableMostLoyal, statisticsMostLoyal);

	}
}
