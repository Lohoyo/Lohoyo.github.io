var imgs = document.querySelectorAll('img');

for (var i = 0; i < imgs.length; i++) {
    // 鼠标悬停时预览
    imgs[i].addEventListener('mouseover', function() {
        this.setAttribute('src', this.getAttribute('src').slice(0, 13) + 'gif');
        // 悬停时如果有其他作品因被聚焦而预览，则取消因被聚焦而预览的作品的预览
        for (var j = 0; j < imgs.length; j++) {
            if (this !== imgs[j]) {
                imgs[j].setAttribute('src', imgs[j].getAttribute('src').slice(0, 13) + 'png');
            }
        }
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
