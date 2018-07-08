var imgs = document.querySelectorAll('img');

for (var i = 0; i < imgs.length; i++) {
    // 鼠标悬停时预览
    imgs[i].addEventListener('mouseover', function() {
        this.setAttribute('src', this.getAttribute('src').slice(0, 13) + 'gif');
    });
    imgs[i].addEventListener('mouseout', function() {
        this.setAttribute('src', this.getAttribute('src').slice(0, 13) + 'png');
    });

    // 针对移动端的聚焦时预览
    imgs[i].addEventListener('focus', function() {
        this.setAttribute('src', this.getAttribute('src').slice(0, 13) + 'gif');
    });
    imgs[i].addEventListener('blur', function() {
        this.setAttribute('src', this.getAttribute('src').slice(0, 13) + 'png');
    });    
}
