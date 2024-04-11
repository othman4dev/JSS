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
document.querySelector('html').style.fontFamily = 'Montserrat';
document.querySelector('body').style.backgroundColor = 'whitesmoke';
document.querySelector('body').style.color = 'black';
document.querySelector('.header').style.backgroundColor = 'black';
document.querySelector('.header').style.color = 'white';
document.querySelector('.header').style.display = 'flex';
document.querySelector('.header').style.alignItems = 'center';
document.querySelector('.header').style.justifyContent = 'space-between';
document.querySelector('.header').style.padding = '10px';
document.querySelector('.header').style.height = '60px';
document.querySelector('.header').style.marginBottom = '10px';
document.querySelector('*').style.margin = '0';
document.querySelector('*').style.padding = '0';
document.querySelector('.nav__list').style.display = 'flex';
document.querySelector('.nav__list').style.listStyle = 'none';
document.querySelector('.nav__list').style.padding = '0';
document.querySelector('.nav__list').style.gap = '15px';
document.querySelector('.nav__list').style.paddingInline = '15px';
document.querySelector('.h11').style.margin = '0';
document.querySelector('.h11').style.fontWeight = '800';
document.querySelector('.h11').style.marginLeft = '30px';
document.querySelector('main').style.display = 'flex';
document.querySelector('main').style.alignItems = 'center';
document.querySelector('main').style.justifyContent = 'center';
document.querySelector('main').style.flexDirection = 'column';
document.querySelector('main').style.minHeight = '87vh';
document.querySelector('a').style.textDecoration = 'none';
document.querySelector('a').style.color = '#fff';
document.querySelector('modal').style.width = '350px';
document.querySelector('modal').style.display = 'flex';
document.querySelector('modal').style.alignItems = 'center';
document.querySelector('modal').style.justifyContent = 'center';
document.querySelector('div').style.position = 'relative';
document.querySelector('div').style.height = '100%';
document.querySelector('div').style.width = '450px';
document.querySelector('div').style.display = 'none';
document.querySelector('div').style.padding = '15px';
document.querySelector('div').style.backgroundColor = 'white';
document.querySelector('div').style.boxShadow = '0 0 15px 1px #00000020';
document.querySelector('.id').style.color = '#555';
document.querySelector('.id').style.fontSize = '12px';
document.querySelector('.id').style.position = 'absolute';
document.querySelector('.id').style.top = '10px';
document.querySelector('.id').style.right = '10px';
document.querySelector('h2').style.paddingTop = '10px';
document.querySelector('h2').style.paddingBottom = '10px';
document.querySelector('p').style.padding = '15px';
document.querySelector('button').style.backgroundColor = 'black';
document.querySelector('button').style.color = 'white';
document.querySelector('button').style.padding = '5px 10px';
document.querySelector('button').style.cursor = 'pointer';
document.querySelector('button').style.fontSize = '15px';
document.querySelector('#btnStart').style.backgroundColor = 'black';
document.querySelector('#btnStart').style.color = 'white';
document.querySelector('#btnStart').style.padding = '10px';
document.querySelector('#btnStart').style.cursor = 'pointer';
document.querySelector('#btnStart').style.fontSize = '17px';
document.querySelector('#btnStart').style.transition = '0.3s';
let initiala7jdemy33 = getComputedStyle(document.querySelector('#btnStart')).getPropertyValue('box-shadow');
document.querySelector('#btnStart').addEventListener('mouseover', function() {
	this.style.boxShadow = '0 2px 0px 2px #fd0';
});
document.querySelector('#btnStart').addEventListener('mouseout', function() {
	this.style.boxShadow = initiala7jdemy33;
});
let initialiycvc10zb = getComputedStyle(document.querySelector('#btnStart')).getPropertyValue('transform');
document.querySelector('#btnStart').addEventListener('mouseover', function() {
	this.style.transform = 'translateY(-2px)';
});
document.querySelector('#btnStart').addEventListener('mouseout', function() {
	this.style.transform = initialiycvc10zb;
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
