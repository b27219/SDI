//alert("JavaScript works!");
//Sabra May
//SDI 1304
//Assignment 4


var myLibrary = function() {
//String Functions
	//Validate phone number
		function phoneNumber(myNumber) {
		var numCheck = /^(\d{3})-(\d{3})-(\d{4})$/;
		if (myNumber.match(numCheck)){
			return true;
		}else {
			return false;
		}
	};
	
	
	//Validate email address
	function email(address) {
		var addressCheck = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		if (address.match(addressCheck)){
			return true;
		}else {
			return false;
		}
	};
	
	
	
	
return {
	"phoneNumber": phoneNumber,
	"email": email
}	
	
}	
	
	
//Calling all Functions!
var newLib = new myLibrary();

	//Validate Phone Number
	console.log("Is this a phone number? " + newLib.phoneNumber("123-456-7890"));
	console.log("Is this an email address? " + newLib.email("sabra.may@gmail.com"));	