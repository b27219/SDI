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

//Mutator Method
	var myLodging = {
		weekStay: 3,
		dailyBreakfast: 25,
		totalHotelCost: function (json) {
			var whichHotel;
			console.log("I need to find a hotel. Here are my options:");
			for (var i = 0; i < json.lodging.length; i++) {
				console.log(" ");
				if (json.lodging[i].breakfast === false) {
					console.log(json.lodging[i].hotel + " does not serve a continental breakfast.");
					for (var d = 1; d <= this.weekStay; d++) {
						console.log("We will need $" + this.dailyBreakfast + " for Day " + d + " breakfast.");
					}
				}else {
					console.log("Looks like breakfast is included at " + json.lodging[i].hotel + ".");
				}
				var theLodging = json.lodging[i];
				var pricePerWeek = theLodging.pricePerNight*this.weekStay;
				console.log("The " + theLodging.hotel + " is $" + theLodging.pricePerNight + " per night. This will cost $" + pricePerWeek + " for the week.");
				if (json.lodging[i].breakfast === false) {
					var pricePerWeek = pricePerWeek + (this.dailyBreakfast*this.weekStay); 
					console.log("Plus $" + this.dailyBreakfast*this.weekStay + " to cover breakfast for the week, making it $" + pricePerWeek + " for the week.");
				}else {
					console.log("Breakfast included!");
					
				}
				
			}
			console.log(" ");
			whichHotel = "I think we will stay at " + json.lodging[1].hotel + ". It seems to be the best deal.";
			return whichHotel;
		}
	};

//Return Array	

	function features() {
		var specialFeatures = [];
		specialFeatures[0] = "three pools";
		specialFeatures[1] = " the Mickey Mouse Penthouse";
		specialFeatures[2] = " and a character breakfast and dinner.";
		
		return specialFeatures.join(); 
	}
	
//Object from json file 
	var allTheGuests = {
		whoAreWe: function (json) {
			console.log("To book a room, I will need to give them our names and information.");
			for (var key in json.guests) {
				var guest = json.guests[key];
				console.log(guest.name + ": " + guest.type + ", age:" + guest.age);
			}
			var waitForFall = function () {
				var plusOne = {
					"addPerson": "Grandma's coming too!"
				};
				console.log("If we wait until the fall to go, my mom will come with us to help with the kids.");
				babysit.push("She can make it");
				return plusOne; 
		};
		console.log(waitForFall().addPerson + " She will be added to the guest list.")	
		}
	};


//all functions
	vacationDays.myVacation("vacation");
	if (disneyCruise.canGo(4000, true)) {
		console.log("I'm so excited to take my kids on a Disney Cruise!");
	}else {
		console.log("No cruise this year, but I think it will still be fun.");
	};

	var howManyTix = passengers.tickets(ourTrip.travelers);
	console.log("We need " + howManyTix + " plane tickets.");
	
	var theHotel = myLodging.totalHotelCost(json2);
	console.log(theHotel);
	console.log("It's special features include:");
	console.log(features());

	allTheGuests.whoAreWe(json);		
	