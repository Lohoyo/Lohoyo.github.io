// 基于DOM的记录选中状态和改变状态

var postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'];
var input = document.querySelector('input');
var ul =document.querySelector('ul');

input.addEventListener('input', function() {
    console.log('event handle');
    addSug(sug(getText()));
    control();
    var lis = document.querySelectorAll('li');
    for (var i = 0; i < lis.length; i++) {
        lis[i].addEventListener('click', function() {
            input.value = this.textContent;
            ul.textContent = '';
        });
    }    
});

function getText() {
    return input.value.trim();
}

function sug(text) {
    var pre = null;
    if (text.indexOf('@') + 1) {
        pre = text.slice(text.indexOf('@') + 1);
        text = text.slice(0, text.indexOf('@'));
    }
    for (var i = 0, sug = []; i < postfixList.length; i++) {
        if (postfixList[i].indexOf(pre) === 0) {
            sug.push(text + '@' + postfixList[i]);
        }
    }
    if (sug.length === 0) {
        for (var i = 0, sug = []; i < postfixList.length; i++) {
            sug.push(text + '@' + postfixList[i]);
        }
    }
    return sug;
}

function addSug(sug) {
    ul.textContent = '';
    for (var i = 0; i < sug.length; i++) {
        var li = document.createElement('li');
        li.textContent = sug[i];
        ul.appendChild(li);
    }    
    li = document.querySelector('li');
    li.setAttribute('class', 'selected');
}

function control() {
    if (!getText()) {
        ul.textContent = '';
    } 
}

input.addEventListener('keydown', function(e) {
    if ((e.keyCode === 38 || e.keyCode === 40 || e.keyCode === 13) && ul.textContent) {
        var nowLi = document.querySelector('.selected');
        var lis = document.querySelectorAll('li');
        nowLi.removeAttribute('class');
        if (e.keyCode === 38) {
            if (nowLi !== lis[0]) {
                nowLi.previousElementSibling.setAttribute('class', 'selected');
            } else {
                lis[lis.length-1].setAttribute('class', 'selected');
            }
        }
        if (e.keyCode === 40) {
            if (nowLi !== lis[lis.length-1]) {
                nowLi.nextElementSibling.setAttribute('class', 'selected');
            } else {
                lis[0].setAttribute('class', 'selected');
            }    
        }
        if (e.keyCode === 13) {
            input.value = nowLi.textContent;
            ul.textContent = '';
        }               
    }
});