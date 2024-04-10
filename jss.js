document.querySelector('#id7').style.borderColor = getComputedStyle(document.querySelector('#id6')).getPropertyValue('border-color');
document.querySelector('#id7').style.borderWidth = getComputedStyle(document.querySelector('#id6')).getPropertyValue('border-width');
document.querySelector('#id7').style.borderStyle = getComputedStyle(document.querySelector('#id6')).getPropertyValue('border-style');
document.querySelector('#id7').style.width = getComputedStyle(document.querySelector('#id6')).getPropertyValue('width');
let initialz5aqlwq8c = getComputedStyle(document.querySelector('#id6')).getPropertyValue('background-color');
document.querySelector('#id6').addEventListener('mouseover', function() {
this.style.backgroundColor = 'orange';
});
document.querySelector('#id6').addEventListener('mouseout', function() {
this.style.backgroundColor = initialz5aqlwq8c;
});
let initiala0yja8wy7 = getComputedStyle(document.querySelector('#id6')).getPropertyValue('cursor');
document.querySelector('#id6').addEventListener('mouseover', function() {
this.style.cursor = 'pointer';
});
document.querySelector('#id6').addEventListener('mouseout', function() {
this.style.cursor = initiala0yja8wy7;
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
