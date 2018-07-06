var region = document.querySelector('#region-radio-wrapper');
var product = document.querySelector('#product-radio-wrapper');
var table = document.querySelector('table');
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var svg = document.querySelector('svg');
var rawDatasCopy = null;

canvas.width = window.innerWidth / 2 - 16;
window.addEventListener('resize', function() {
    canvas.width = window.innerWidth / 2 - 16;
    line.draw();
    if (rawDatasCopy) {
        line.setDataAll(rawDatasCopy);
    }
});

main(region);
main(product);
bar.draw();
line.draw();