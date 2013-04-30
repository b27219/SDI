//alert("JavaScript works!");
//Sabra May
//SDI 1304
//Assignment 4

//String Functions
	//Validate phone number
	function phoneNumber(myNumber) {
		var numberCheck = /^(\d{3})-(\d{3})-(\d{4})$/;
		if (myNumber.match(numberCheck)) {
			numWorks = myNumber + " is valid.";
			return numWorks;
		}else {
			notWork = "The number " + myNumber + " is not valid";
			return notWork;
		}
	};
	
	
	
	
	
	
	
	
	
//Calling all Functions!
	//Validate Phone Number
	var theNumber = phoneNumber(801-555-5555);
	console.log(theNumber);	