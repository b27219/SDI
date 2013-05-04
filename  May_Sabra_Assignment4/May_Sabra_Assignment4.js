//alert("JavaScript works!");
//Sabra May
//SDI 1304
//Assignment 4



//String Functions
	//Validate phone number
	function phoneNumber(myNumber) {
		var numCheck = /^(\d{3})-(\d{3})-(\d{4})$/;
		if (myNumber.match(numCheck)) {
			numValid = myNumber + " is valid.";
			return numValid;
		}else {
			numInvalid = myNumber + " is not valid.";
		}
	};
	
	
	//Validate email address
	function email(address) {
		var myAddress = address.match (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
		if (myAddress) {
			emailValid = address + " is valid.";
			return emailValid;
		}else {
			emailInvalid = address + " is invalid.";
			return emailInvalid;
		}
	};
	
	//Validate URL
	function validateURL(URL) {
		var theURL = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
		if (URL.match(theURL)) {
			urlValid = URL + " is valid.";
			return urlValid;
		}else {
			urlInvalid = URL + " is invalid.";
			return urlInvalid;
		}	
	};
	
	//String Separator
	function separator () {
		var fwdSlash = "/";
		var separate = ourNames.replace( /, /g, fwdSlash);
		return separate;
	
	
	
	

	
	
//Calling all Functions!
	//Validate Phone Number
	var myNum = phoneNumber("801-555-5555");
	console.log(myNum);	
	//Validate Email Address
	var myEmail = email("myname@gmail.com");
	console.log(myEmail);
	//Validate URL
	var myURL = validateURL("http://google.com");
	console.log(myURL);	
	//String Separator
	var ourNames= "Robby, Sabra, Bridger, Isabel";
	console.log(separator());