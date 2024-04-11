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
document.querySelector('#id1').style.height = '100px';
document.querySelector('#id1').style.width = '150px';
document.querySelector('#id1').style.backgroundColor = 'yellow';
document.querySelector('#id2').style.height = '100px';
document.querySelector('#id2').style.width = '150px';
document.querySelector('#id2').style.backgroundColor = 'green';
document.querySelector('#id3').style.height = '100px';
document.querySelector('#id3').style.width = '150px';
document.querySelector('#id3').style.backgroundColor = 'red';
document.querySelector('#id5').style.borderRadius = '500px';
document.querySelector('#id5').style.height = '200px';
document.querySelector('#id5').style.width = '200px';
document.querySelector('#id5').style.backgroundColor = 'blue';
document.querySelector('#id6').style.borderColor = 'black';
document.querySelector('#id6').style.borderWidth = '5px';
document.querySelector('#id6').style.borderStyle = 'solid';
document.querySelector('#id6').style.height = '250px';
document.querySelector('#id6').style.width = '200px';
document.querySelector('#id6').style.backgroundColor = 'pink';
document.querySelector('#id6').style.display = 'flex';
document.querySelector('#id6').style.transition = '2s';
document.querySelector('#id7').style.borderColor = getComputedStyle(document.querySelector('#id6')).getPropertyValue('border-color');
document.querySelector('#id7').style.borderWidth = getComputedStyle(document.querySelector('#id6')).getPropertyValue('border-width');
document.querySelector('#id7').style.borderStyle = getComputedStyle(document.querySelector('#id6')).getPropertyValue('border-style');
document.querySelector('#id7').style.height = '200px';
document.querySelector('#id7').style.width = getComputedStyle(document.querySelector('#id6')).getPropertyValue('height');
document.querySelector('#id7').style.backgroundColor = 'purple';
document.querySelector('#id7').style.marginTop = '10px';
let initial64t02hxkk = getComputedStyle(document.querySelector('#id6')).getPropertyValue('background-color');
document.querySelector('#id6').addEventListener('mouseover', function() {
	this.style.backgroundColor = 'orange';
});
document.querySelector('#id6').addEventListener('mouseout', function() {
	this.style.backgroundColor = initial64t02hxkk;
});
let initialqcy35ah60 = getComputedStyle(document.querySelector('#id6')).getPropertyValue('cursor');
document.querySelector('#id6').addEventListener('mouseover', function() {
	this.style.cursor = 'pointer';
});
document.querySelector('#id6').addEventListener('mouseout', function() {
	this.style.cursor = initialqcy35ah60;
});
document.querySelector('#id7').addEventListener('click', function() {
	this.style.backgroundColor = 'white';
});
document.querySelector('#id7').addEventListener('click', function() {
	this.style.transition = '1s';
});
document.querySelector('#id6').addEventListener('click', function() {
	this.style.backgroundColor = 'red';
});
document.querySelector('#id6').addEventListener('click', function() {
	this.style.width = '100px';
});
document.querySelector('#id6').addEventListener('mouseout', function() {
	document.querySelector('#id7').style.backgroundColor = getComputedStyle(document.querySelector('#id5')).getPropertyValue('background-color');
	document.querySelector('#id7').style.borderRadius = '200px';
	document.querySelector('#id7').style.transition = '1s';
});
document.querySelector('#id6').addEventListener('click', function() {
	document.querySelector('#id7').style.backgroundColor = getComputedStyle(document.querySelector('#id5')).getPropertyValue('background-color');
	document.querySelector('#id7').style.borderRadius = '200px';
	document.querySelector('#id7').style.transition = '1s';
});
document.querySelector('#id8').style.position = 'absolute';
document.querySelector('#id8').style.backgroundColor = 'grey';
document.querySelector('#id8').style.zIndex = '2';
document.querySelector('#id8').style.top = '50%';
document.querySelector('#id8').style.left = '50%';
document.querySelector('#id8').style.transform = 'translate(-50%, -50%)';
document.querySelector('#id8').style.display = 'none';
document.querySelector('#id8').style.height = '500px';
document.querySelector('#id8').style.width = '500px';
document.querySelector('#id9').style.backgroundColor = 'black';
document.querySelector('#id9').style.width = '120px';
document.querySelector('#id9').style.height = '40px';
let initiali88nn8ckd = getComputedStyle(document.querySelector('#id8')).getPropertyValue('display');
document.querySelector('#id9').addEventListener('mouseover', function() {
	document.querySelector('#id8').style.display = 'block';
});
document.querySelector('#id9').addEventListener('mouseout', function() {
	document.querySelector('#id8').style.display = initiali88nn8ckd;
});
document.querySelector('#id9').addEventListener('hover', function() {
	document.querySelector('#id8').style.display = 'block';
});
 var observernyzrpxta8 = new MutationObserver(function(mutations) {
	mutations.forEach(function(mutation) {
		if (mutation.attributeName === 'style') {
			document.querySelector('#id6').style.width = numberSupport(getComputedStyle(document.querySelector('#id8')).getPropertyValue('width') , 2);
		}
	});
});
var confignyzrpxta8 = { attributes: true, attributeFilter: ['style'] };
observernyzrpxta8.observe(document.querySelector('#id8'), confignyzrpxta8);
document.querySelector('#id11').style.backgroundColor = 'orange';
document.querySelector('#id11').style.width = '100px';
document.querySelector('#id11').style.height = '100px';
document.querySelector('#id11').style.borderColor = 'black';
document.querySelector('#id11').style.borderWidth = '5px';
document.querySelector('#id11').style.borderStyle = 'solid';
document.querySelector('#id11').style.opacity = '0.5';
document.querySelector('#id12').style.backgroundColor = 'green';
document.querySelector('#id12').style.width = '100px';
document.querySelector('#id12').style.height = '100px';
document.querySelector('#id12').style.margin = '10px';
let initial1fijbs95g = getComputedStyle(document.querySelector('#id11')).getPropertyValue('background-color');
document.querySelector('#id11').addEventListener('mouseover', function() {
	this.style.backgroundColor = 'brown';
});
document.querySelector('#id11').addEventListener('mouseout', function() {
	this.style.backgroundColor = initial1fijbs95g;
});
let initial0hgr99ef2 = getComputedStyle(document.querySelector('#id11')).getPropertyValue('width');
document.querySelector('#id11').addEventListener('mouseover', function() {
	this.style.width = '200px';
});
document.querySelector('#id11').addEventListener('mouseout', function() {
	this.style.width = initial0hgr99ef2;
});
let initialtazj2o02j = getComputedStyle(document.querySelector('#id11')).getPropertyValue('opacity');
document.querySelector('#id11').addEventListener('mouseover', function() {
	this.style.opacity = '0.5';
});
document.querySelector('#id11').addEventListener('mouseout', function() {
	this.style.opacity = initialtazj2o02j;
});
 var observeramcqteqqy = new MutationObserver(function(mutations) {
	mutations.forEach(function(mutation) {
		if (mutation.attributeName === 'style') {
			document.querySelector('#id12').style.width = numberSupport(getComputedStyle(document.querySelector('#id11')).getPropertyValue('width') , 2);
		}
	});
});
var configamcqteqqy = { attributes: true, attributeFilter: ['style'] };
observeramcqteqqy.observe(document.querySelector('#id11'), configamcqteqqy);
 var observeramcqteqqy = new MutationObserver(function(mutations) {
	mutations.forEach(function(mutation) {
		if (mutation.attributeName === 'style') {
			document.querySelector('#id12').style.backgroundColor = numberSupport(getComputedStyle(document.querySelector('#id11')).getPropertyValue('background-color') , 1);
		}
	});
});
var configamcqteqqy = { attributes: true, attributeFilter: ['style'] };
observeramcqteqqy.observe(document.querySelector('#id11'), configamcqteqqy);
 var observeramcqteqqy = new MutationObserver(function(mutations) {
	mutations.forEach(function(mutation) {
		if (mutation.attributeName === 'style') {
			document.querySelector('#id12').style.opacity = numberSupport(getComputedStyle(document.querySelector('#id11')).getPropertyValue('opacity') , 2);
		}
	});
});
var configamcqteqqy = { attributes: true, attributeFilter: ['style'] };
observeramcqteqqy.observe(document.querySelector('#id11'), configamcqteqqy);
