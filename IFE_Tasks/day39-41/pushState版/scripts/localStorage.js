function edit() {
    var tds = document.querySelectorAll('td');
    for (var i = 0; i < tds.length; i++) {
        if (!isNaN(tds[i].textContent))
        tds[i].addEventListener('click', clickTd);
    }
}

function clickTd (e) {
    var buttons = table.querySelectorAll('button');
    if (buttons.length === 2) {
        html.click();
    }
    e.stopPropagation();
    var input = document.createElement('input');
    input.addEventListener('keydown', function(e) {
        if (e.keyCode === 27) {
            htmlCancel();
        } else if (e.keyCode === 13) {
            var td = table.querySelector('td.active');
            var temp = td.children[0].value;
            td.textContent = '';
            if (isNaN(temp)) {
                alert('请输入数字。');
                td.textContent = oldData;
            } else {
                td.textContent = temp;
            }
            td.setAttribute('class' ,'data');
            td.addEventListener('click', clickTd);            
        }
    });
    var oldData = this.textContent;
    input.value = oldData;
    input.setAttribute('class', 'active');
    this.textContent = '';
    this.appendChild(input);
    input.focus();
    var btnCancel = document.createElement('button');
    var btnEnter = document.createElement('button');
    btnCancel.setAttribute('class', 'active');
    btnEnter.setAttribute('class', 'active');
    btnCancel.textContent = '取消';
    btnEnter.textContent = '确定';
    this.appendChild(btnCancel);
    this.appendChild(btnEnter);
    this.setAttribute('class', 'active');

    html.addEventListener('click', htmlCancel);   
    function htmlCancel () {
        var td = table.querySelector('td.active');
        if (td) {
            var temp = td.children[0].value;
            td.textContent = '';
            td.textContent = temp;
            td.setAttribute('class' ,'data');
            td.addEventListener('click', clickTd);
            html.removeEventListener('click', htmlCancel);
        }
    }

    input.addEventListener('click', function(e) {
        e.stopPropagation();
    }) 
    btnCancel.addEventListener('click', function(e) {
        // 其实完全可以不用this，因为整个页面最多就只有1个取消按钮。即，没必要特地用this选择当前的取消按钮，因为只有1个，不管怎么选，只要选到了取消按钮，就是当前的
        e.stopPropagation();
        var parent = this.parentElement;
        parent.textContent = '';
        parent.textContent = oldData;
        parent.setAttribute('class' ,'data');
        parent.addEventListener('click', clickTd);
    });
    btnEnter.addEventListener('click', function(e) {
        e.stopPropagation();
        var parent = this.parentElement;
        var temp = parent.children[0].value;
        parent.textContent = '';
        if (isNaN(temp)) {
            alert('请输入数字。');
            parent.textContent = oldData;
        } else {
            parent.textContent = temp;
        }
        parent.setAttribute('class' ,'data');
        parent.addEventListener('click', clickTd);
    });    
    this.removeEventListener('click', clickTd);
}

function addBlur() {
    var inputs = document.querySelectorAll('input[type="text"]');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('blur', function() {
            if (isNaN(this.value)) {
                alert('请输入数字。');
            }
        });
    }
}

button.addEventListener('click', function() {
    var trs = document.querySelectorAll('tr');
    var newSourceData = [];
    for (var i = 1; i < trs.length; i++) {
        var rowDatas = trs[i].querySelectorAll('td.data');
        for (var j = 0, newSale = []; j < rowDatas.length; j++) {
            newSale.push(Number(rowDatas[j].textContent));
        }
        switch (trs[i].className) {
            case '手机华东':
            case '华东手机':
                if (newSale !== sourceData[0].sale) {
                    newSourceData.push({
                        product: "手机",
                        region: "华东",
                        sale: newSale
                    });
                }
                break;
            case '手机华北':
            case '华北手机':
                if (newSale !== sourceData[1].sale) {
                    newSourceData.push({
                        product: "手机",
                        region: "华北",
                        sale: newSale
                    });
                }
                break;
            case '手机华南':
            case '华南手机':
                if (newSale !== sourceData[2].sale) {
                    newSourceData.push({
                        product: "手机",
                        region: "华南",
                        sale: newSale
                    });
                }
                break;                                   
            case '笔记本华东':
            case '华东笔记本':
                if (newSale !== sourceData[3].sale) {
                    newSourceData.push({
                        product: "笔记本",
                        region: "华东",
                        sale: newSale
                    });
                }
                break;       
            case '笔记本华北':
            case '华北笔记本':
                if (newSale !== sourceData[4].sale) {
                    newSourceData.push({
                        product: "笔记本",
                        region: "华北",
                        sale: newSale
                    });
                }
                break;       
            case '笔记本华南':
            case '华南笔记本':
                if (newSale !== sourceData[5].sale) {
                    newSourceData.push({
                        product: "笔记本",
                        region: "华南",
                        sale: newSale
                    });
                }
                break;       
            case '智能音箱华东':
            case '华东智能音箱':
                if (newSale !== sourceData[6].sale) {
                    newSourceData.push({
                        product: "智能音箱",
                        region: "华东",
                        sale: newSale
                    });
                }
                break;                                                       
            case '智能音箱华北':
            case '华北智能音箱':
                if (newSale !== sourceData[7].sale) {
                    newSourceData.push({
                        product: "智能音箱",
                        region: "华北",
                        sale: newSale
                    });
                }
                break;       
            case '智能音箱华南':
            case '华南智能音箱':
                if (newSale !== sourceData[8].sale) {
                    newSourceData.push({
                        product: "智能音箱",
                        region: "华南",
                        sale: newSale
                    });
                }
                break;                                       
        }
    }
    localStorage.setItem('newSourceData', JSON.stringify(newSourceData));
});