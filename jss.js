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
document.querySelector('#id6').style.height = '200px';
document.querySelector('#id6').style.width = '200px';
document.querySelector('#id6').style.backgroundColor = 'pink';
document.querySelector('#id6').style.display = 'flex';
document.querySelector('#id6').style.transition = '2s';
document.querySelector('#id7').style.borderColor = getComputedStyle(document.querySelector('#id6')).getPropertyValue('border-color');
document.querySelector('#id7').style.borderWidth = getComputedStyle(document.querySelector('#id6')).getPropertyValue('border-width');
document.querySelector('#id7').style.borderStyle = getComputedStyle(document.querySelector('#id6')).getPropertyValue('border-style');
document.querySelector('#id7').style.height = '200px';
document.querySelector('#id7').style.width = getComputedStyle(document.querySelector('#id6')).getPropertyValue('width');
document.querySelector('#id7').style.backgroundColor = 'purple';
document.querySelector('#id7').style.marginTop = '10px';
let initialt0aregvot = getComputedStyle(document.querySelector('#id6')).getPropertyValue('background-color');
document.querySelector('#id6').addEventListener('mouseover', function() {
	this.style.backgroundColor = 'orange';
});
document.querySelector('#id6').addEventListener('mouseout', function() {
	this.style.backgroundColor = initialt0aregvot;
});
let initialspq2g45me = getComputedStyle(document.querySelector('#id6')).getPropertyValue('cursor');
document.querySelector('#id6').addEventListener('mouseover', function() {
	this.style.cursor = 'pointer';
});
document.querySelector('#id6').addEventListener('mouseout', function() {
	this.style.cursor = initialspq2g45me;
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
	document.querySelector('#id7').style.backgroundColor = 'red';
	document.querySelector('#id7').style.borderRadius = '200px';
	document.querySelector('#id7').style.transition = '1s';
});
