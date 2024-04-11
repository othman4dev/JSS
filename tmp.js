function numberSupport(string,coe) {
    let numbers = string.match(/\d+/g);
    let letters = string.match(/[a-zA-Z]+/g);
    let percetage = string.match(/%/g);
    let result;
    if (!string.match(/\d+/g)) {
        result = string;
    } else
    if (letters && numbers) {
        let number = numbers * coe;
        result = number + letters;
    } else
    if (percetage) {
        let number = numbers * coe;
        result = number + '%';
    } else if (numbers) {
        let number = numbers * coe;
        result = number;
    } else {
        result = string;
    }
}
function numberSupport(string,coe) {
	let numbers = string.match(/\d+/g);
	let letters = string.match(/[a-zA-Z]+/g);
	let percetage = string.match(/%/g);
	let result;
	if (!string.match(/\d+/g)) {
		result = string;
	} else
	if (letters && numbers) {
		let number = numbers * coe;
		result = number + letters;
	} else
	if (percetage) {
		let number = numbers * coe;
		result = number + '%';
	} else if (numbers) {
		let number = numbers * coe;
		result = number;
	} else {
		result = string;
	}
    return result;
}
numberSupport('100px',2);
numberSupport('100%',2);
numberSupport('white',1);
numberSupport('150',3);
numberSupport('100',7);