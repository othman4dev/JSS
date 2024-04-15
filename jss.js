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
let initialbgaieehms = getComputedStyle(document.querySelector('#btnStart')).getPropertyValue('box-shadow');
document.querySelector('#btnStart').addEventListener('mouseover', function() {
	this.style.boxShadow = '0 2px 0px 2px #fd0';
});
document.querySelector('#btnStart').addEventListener('mouseout', function() {
	this.style.boxShadow = initialbgaieehms;
});
let initial69yb3cv23 = getComputedStyle(document.querySelector('#btnStart')).getPropertyValue('transform');
document.querySelector('#btnStart').addEventListener('mouseover', function() {
	this.style.transform = 'translateY(-2px)';
});
document.querySelector('#btnStart').addEventListener('mouseout', function() {
	this.style.transform = initial69yb3cv23;
});
document.querySelector('#btnStart').addEventListener('click', function() {
	document.querySelector('.modal').style.display = 'block';
	document.querySelector('#btnStart').style.display = 'none';
});
document.querySelector('#btn1').addEventListener('click', function() {
	document.querySelector('.modal').style.display = 'none';
	document.querySelector('.modal2').style.display = 'block';
});
document.querySelector('#btn2').addEventListener('click', function() {
	document.querySelector('.modal2').style.display = 'none';
	document.querySelector('.modal3').style.display = 'block';
});
document.querySelector('#btn3').addEventListener('click', function() {
	document.querySelector('.modal3').style.display = 'none';
	document.querySelector('.modal4').style.display = 'block';
});
document.querySelector('#btn4').addEventListener('click', function() {
	document.querySelector('.modal4').style.display = 'none';
	document.querySelector('.modal5').style.display = 'block';
});
