if (history.state) {
    for (var i = 0; i < history.state.checked.length; i++) {
        checkboxes[history.state.checked[i]].setAttribute('checked', '');
    }    
}

// 按钮点击事件放在了checkbox.js里 