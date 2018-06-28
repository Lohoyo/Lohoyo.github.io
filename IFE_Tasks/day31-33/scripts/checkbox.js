function main(div) {
    div.addEventListener('click', function(e) {
        if (e.target.id.indexOf('all') + 1) {
            for (var i = 1; i < div.childElementCount; i += 2) {
                div.children[i].checked = ' ';
            }
        } else {
            for (var count = 0, i = 1; i < (div.childElementCount - 2); i += 2) {
                if (div.children[i].checked) {
                    count++;
                }
            }
            if (count === 0) {
                e.target.checked = ' ';
            } else if (count === 3) {
                div.children[7].checked = ' ';
            } else {
                div.children[7].checked = '';
            }
        }
        table.textContent = '';
        newTable(getData());    
    });
}