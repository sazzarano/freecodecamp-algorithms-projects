function rot13(str) { // LBH QVQ VG!
	let encryptedArr = str.split("");
	let decryptedArr = [];
	let alphArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
	"Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];

	for (let i = 0; i < encryptedArr.length; i++) {
		if (alphArr.indexOf(encryptedArr[i]) !== -1) {
      for (let n = 0; n < alphArr.length; n++) {
				if (encryptedArr[i] === alphArr[n]) {
					decryptedArr.push(alphArr[n + 13])
				}
			}
		} else {
        decryptedArr.push(encryptedArr[i]);
    }
	}

	return decryptedArr.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
console.log(rot13("SERR PBQR PNZC"));
rot13("SERR CVMMN!");
console.log(rot13("SERR CVMMN!"));