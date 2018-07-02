var button = document.querySelector('button');

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
        var inputs = trs[i].querySelectorAll('input');
        for (var j = 0, newSale = []; j < inputs.length; j++) {
            newSale.push(Number(inputs[j].value));
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