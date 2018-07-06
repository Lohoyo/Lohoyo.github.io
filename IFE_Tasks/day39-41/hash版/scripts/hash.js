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
        if (checkboxes[0].checked && checkboxes[1].checked &&checkboxes[2].checked) {
            checkboxes[3].setAttribute('checked', '');
        }
        if (checkboxes[4].checked && checkboxes[5].checked &&checkboxes[6].checked) {
            checkboxes[7].setAttribute('checked', '');
        }        
    }
}

// 按钮点击事件放在了checkbox.js里

render();      