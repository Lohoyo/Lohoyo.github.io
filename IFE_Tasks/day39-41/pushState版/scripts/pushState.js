for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('click', function(e) {
        if (e.target.id.indexOf('allRegion') + 1) {
            for (var i = 0; i < 3; i++) {
                checkboxes[i].checked = ' ';
            }
        } else {
            for (var count1 = 0, i = 0; i < 3; i++) {
                if (checkboxes[i].checked) {
                    count1++;
                }
            }
            if (count1 === 0) {
                e.target.checked = ' ';
            } else if (count1 === 3) {
                checkboxes[3].checked = ' ';
            } else {
                checkboxes[3].checked = '';
            }
        }
        if (e.target.id.indexOf('allProduct') + 1) {
            for (var i = 4; i < 8; i++) {
                checkboxes[i].checked = ' ';
            }
        } else {
            for (var count2 = 0, i = 4; i < 8; i++) {
                if (checkboxes[i].checked) {
                    count2++;
                }
            }
            if (count2 === 0) {
                e.target.checked = ' ';
            } else if (count2 === 3) {
                checkboxes[7].checked = ' ';
            } else {
                checkboxes[7].checked = '';
            }
        }        
        
        var temp = count;
        count = 0;
        for (var j = 0, arr = [], count1 = 0, count2 = 0; j < checkboxes.length; j++) {
            if (j !== 3 && j !== 7 && checkboxes[j].checked) {
                arr.push(j);
                count++;
            }
        } 
        if (count !== temp) {
            history.pushState({checked: arr}, '');
        }
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
