//alert("JavaScript Works!");
//Sabra May
//SDI 1304
//Assignment 3

//Global Variables
	var ourTrip = {
		//Property Array
		travelers: ["Robby", " Sabra", " Bridger", " Isabel"]
	};
	
	//Method Procedure 
	var vacationDays = {
		type: "family",
		//Property: String
		days: 3,
		myVacation: function (trip) {
			console.log("We want to take a " + this.type + " " + trip + "! I wonder how many vacation days I have.");
			if (this.days >= 5) {
				console.log("Looks like we can stay for 3 days at " + trip + "!")
			}else {
				if (this.days < 5 && this.days >= 2) {
					console.log("I have less than 5 days " + trip + " time. We can go for three days.")
				}else {
					console.log("Not enough " + trip + " days available. We will have to reschedule our trip.")
				}
			}
		}
	};

//Method Function
	var disneyCruise = {
		passport: true,
		savings: 5000,
		canGo: function (mySavings, myPassports) {
			if (myPassports == this.passport) {
				if (mySavings >= this.savings) {
					console.log("We got our passports which means we can go on a Disney Cruise.");
					return true; 
				}else {
					console.log("We have our passports, but not quite enough money.");
					return false;
				}
			} else {
					console.log("No passports. We will just go to Disneyland.");
					return false; 
				}
			}
		};
		
		
//Accessor
	var passengers = {
		heads: 4,
		tickets: function (who) {
			var needNumberTickets;
			console.log("We need to book plane tickets for everyone, how many do we need? " + who);
			numberTickets = 1;
			while (numberTickets <= this.heads) {
				console.log(numberTickets);
				numberTickets++; 
			}
			needNumberTickets = this.heads
			return needNumberTickets;
		}
	};		

