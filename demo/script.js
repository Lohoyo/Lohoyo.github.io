var imgs = document.querySelectorAll('img');

for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('mouseover', function() {
        this.setAttribute('src', this.getAttribute('src').slice(0, 13) + 'gif');
    });
    imgs[i].addEventListener('mouseout', function() {
        this.setAttribute('src', this.getAttribute('src').slice(0, 13) + 'png');
    });
}
