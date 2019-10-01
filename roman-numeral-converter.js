function convertToRoman(num) {
    let romanArr = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let numArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanStr = "";

    for(let i = 0; i < numArr.length; i++) {
        while (num >= numArr[i]) {
            romanStr = romanStr + romanArr[i];
            num = num - numArr[i];
        }
    }
    return romanStr;
}

convertToRoman(2038);
console.log("2038 = " + convertToRoman(2038));