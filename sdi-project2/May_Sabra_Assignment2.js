//alert("JavaScript works!");
//Sabra May
//April 18, 2013
//SDI 1304
//Assignment 2




// Procedure
	var kidCloset = function(hours) {
		console.log("I need to clean out my son's closet. I wonder how much time I have.");
		if(hours >= 3) {
			console.log("Looks like I have 3 free hours to finish before my kids come home.")
		}else{
			if(hours < 3 && hours >=1){
				console.log("I have less than 3 hours. I will have to start now and finish later.")
			}else{
				consoel.log("I don't have enough time right now, I will have to do it another day.")
			}
		}
	};
	kidCloset(3);
	
//Boolean Function
	var clothes = function(handMeDowns, clothesFit) {
		var newClothes;
		if (handMeDowns >= 2) {
			if (clothesFit === true) {
				console.log("The clothes we received fit fine, we can use them.");
			}else{
				console.log("These clothes aren't the right size, I'll give them away.");
			}
		}else{
			console.log("We didn't get any hand me downs, so I have nothing to put in the closet.");
		}
		newClothes = "We received " + handMeDowns + " boxes of clothes from my sister that we can use.";
		return newClothes;
	};
	var weHaveClothes = clothes(2, true);
	console.log(weHaveClothes);

//Number Function
	var shoes = function(pairs) {
	var needSandals;
		console.log("We have a bag of shoes that are all different. I need to find out how many are sandals.");
		sandals=1;
		while(sandals <= pairs) {
			console.log(sandals);
			sandals++;
		}
	needSandals = "There are " + pairs + " pairs of sandals.";
	return needSandals;
	};
	var howManySandals = shoes(3);
	console.log(howManySandals);

//String Function
	var checkClothes = function(tops, bottoms) {
		var boyClothes;
		console.log("I need to find out if there are " + tops + " and " + bottoms + " available to use.");
		boyClothes = "Once I know what is there I can put outfits together.";
		return boyClothes;
	};
	var whatIsThere = checkClothes("shirts", "pants");
	console.log(whatIsThere);




//Array Function