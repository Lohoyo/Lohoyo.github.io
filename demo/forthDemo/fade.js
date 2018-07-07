var div = document.querySelector('div#fade-obj');
var btn = document.querySelector('button');

var intervalID = null;
btn.addEventListener('click', function() {
    if (btn.textContent === '淡出') {
        div.style.opacity = 1;
        intervalID = window.setInterval(fade, 10);
    } else {
        div.style.opacity = 0;
        intervalID = window.setInterval(appear, 10);
    }
    btn.setAttribute('disabled', '');
})

function fade() {
    div.style.opacity -= 0.01;
    if (div.style.opacity === '0') {
        window.clearInterval(intervalID);
        btn.removeAttribute('disabled');
        btn.textContent = '淡入';
    }
}

function appear() {
    div.style.opacity = Number(div.style.opacity) + 0.01;
    if (div.style.opacity === '1') {
        window.clearInterval(intervalID);
        btn.removeAttribute('disabled');
        btn.textContent = '淡出';
    }
}  