for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('click', function() {
        for (var j = 0, arr = []; j < checkboxes.length; j++) {
            if (j !== 3 && j !== 7 && checkboxes[j].checked) {
                arr.push(j);
            }
        }        
        history.pushState({checked: arr}, '');
    });
}

window.addEventListener('popstate', function(e) {
    if (e.state) {
        for (var i = 0; i < checkboxes.length; i++) {
            for (var j = 0; j < e.state.checked.length; j++) {
                if (i === e.state.checked[j]) {
                    checkboxes[i].checked = ' ';
                    break;
                } else {
                    checkboxes[i].checked = '';
                }
            }
        }    
    } else {
        for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = '';
        }
    }

    canvas.width = window.innerWidth / 2 - 16;
    line.draw();
    line.setDataAll(getData()[1]);
});
