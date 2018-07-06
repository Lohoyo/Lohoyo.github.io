// 解析Hash，获取状态参数
function parseHash() {
    return location.hash.split('/');
}

// 渲染函数
function render() {
    for (var i = 1; i < parseHash().length; i++) {
        for (var j = 0; j < checkboxes.length; j++) {
            if (j !== 3 && j !== 7 && checkboxes[j].id === parseHash()[i]) {
                checkboxes[j].setAttribute('checked', '');
            }
        }
    }
}

// 按钮点击事件放在了checkbox.js里

render();      