function telephoneCheck(str) {
	let matchStr = str.search(/^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/g);

	if (matchStr === 0) {
		return true;
	} else {
		return false;
	}
}

telephoneCheck("555-555-5555");