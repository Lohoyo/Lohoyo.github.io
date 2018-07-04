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