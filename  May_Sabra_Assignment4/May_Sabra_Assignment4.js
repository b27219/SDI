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
	
	//Validate URL
	function validateURL(myURL) {
		var urlCheck = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
		if (myURL.match(urlCheck)){
			return true;
		}else {
			return false;
		}
	};
	
	
	
	
return {
	"phoneNumber": phoneNumber,
	"email": email,
	"validateURL": validateURL,
}	
	
}	
	
	
//Calling all Functions!
var newLib = new myLibrary();

	//Validate Phone Number
	console.log("Is this a phone number? " + newLib.phoneNumber("123-456-7890"));
	//Validate Email Address
	console.log("Is this an email address? " + newLib.email("me@thisaddress.com"));
	//Validate URL
	console.log("Is this a URL? " + newLib.validateURL("http://google.com"));	