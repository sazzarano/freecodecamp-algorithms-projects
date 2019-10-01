function palindrome(str) {
	//Creates an array from the string
	let regex = /[a-zA-Z0-9]/gmi;
	let strArr = str.match(regex);
	console.log("string array is " + strArr);

	//Sets the reverse string and new string
	let newStr = strArr.join("").toLowerCase();
	let revStr = strArr.reverse().join("").toLowerCase();
	console.log("reverse string is " + revStr);

	//Palindrome Checker Conditional
	if (newStr === revStr) {
		return true;
	} else {
		return false;
	}
}

/*
1. remove all symbols, whitespace, and capitalization
    -set up two vars for newStr and revStr
    -use regex to only return letters/numbers.
2. convert all cases to a lowercase type
    -
3. reverse the string and compare the two
    -
4. Branch condition for bool
    -if equal then return true
    -else return false
*/