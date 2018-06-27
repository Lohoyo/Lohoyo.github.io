// 基于数据的记录选中状态和改变状态

var postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'];
var input = document.querySelector('input');
var ul = document.querySelector('ul');
var nowSelectTipIndex = 0;

input.focus();

input.addEventListener('input', function() {
    console.log('event handle');
    addSug(sug(getText()));
    control();
    var lis = document.querySelectorAll('li');
    for (var i = 0; i < lis.length; i++) {
        lis[i].addEventListener('click', function() {
            input.value = this.textContent;
            ul.textContent = '';
            input.focus();
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
    var lis = document.querySelectorAll('li');
    nowSelectTipIndex = 0;
    lis[nowSelectTipIndex].setAttribute('class', 'selected');        
}

function control() {
    if (!getText()) {
        ul.textContent = '';
    } 
}

input.addEventListener('keydown', function(e) {
    if ((e.keyCode === 38 || e.keyCode === 40 || e.keyCode === 13) && ul.textContent) {
        var lis = document.querySelectorAll('li');
        lis[nowSelectTipIndex].removeAttribute('class');
        if (e.keyCode === 38) {
            if (nowSelectTipIndex !== 0) {
                nowSelectTipIndex -= 1;
            } else {
                nowSelectTipIndex = lis.length - 1;
            }
        }
        if (e.keyCode === 40) {
            if (nowSelectTipIndex !== (lis.length - 1)) {
                nowSelectTipIndex += 1;
            } else {
                nowSelectTipIndex = 0;
            }
        }
        if (e.keyCode === 13) {
            input.value = lis[nowSelectTipIndex].textContent;
            ul.textContent = '';
        }       
        lis[nowSelectTipIndex].setAttribute('class', 'selected');        
    }    
});

input.addEventListener('keydown', function(e) {
    if (e.keyCode === 27) {
        input.select();
    }
});