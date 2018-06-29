function getData() {
    for (var inputs1 = [], i = 1; i < (region.childElementCount - 2); i += 2) {
        if (region.children[i].checked) {
            inputs1.push(region.children[i]);
        }
    }
    for (var inputs2 = [], i = 1; i < (product.childElementCount - 2); i += 2) {
        if (product.children[i].checked) {
            inputs2.push(product.children[i]);
        }
    }    
    for (var i = 0, datas = [], rawDatas = []; i < inputs2.length; i++) {
        for (var j = 0; j < inputs1.length; j++) {
            var arr = [inputs2[i].value, inputs1[j].value];
            for (var k = 0; k < sourceData.length; k++) {
                if (sourceData[k].region === inputs1[j].value && sourceData[k].product === inputs2[i].value){
                    datas.push(arr.concat(sourceData[k].sale));
                    rawDatas.push(sourceData[k].sale);
                }
            }
        }
    }
    return [datas, rawDatas];
}

function newTable(data) {
    for (var count1 = 0, i = 1; i < (region.childElementCount - 2); i += 2) {
        if (region.children[i].checked) {
            count1++;
        }
    }
    for (var count2 = 0, j = 1; j < (product.childElementCount - 2); j += 2) {
        if (product.children[j].checked) {
            count2++;
        }
    }       

    if (count1 && count2) {
        var count = count1 > count2 ? count1 : count2;
        var ths = ['商品', '地区', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
        if (count1 < count2 && count1 === 1) {
            ths[0] = '地区';
            ths[1] = '商品';
            for (var i = 0; i < data[0].length; i++) {
                temp = data[0][i][0];
                data[0][i][0] = data[0][i][1];
                data[0][i][1] = temp;
            }
        }        
        var tr = document.createElement('tr');
        table.appendChild(tr);
        for (var i = 0; i < ths.length; i++) {
            var th = document.createElement('th');
            th.textContent = ths[i];
            th.setAttribute('scope', 'col');
            tr.appendChild(th);
        }
        for (var i = 0, k = 0; i < data[0].length; i++) {
            var tr = document.createElement('tr');
            table.appendChild(tr);
            for (var j = 0; j < data[0][i].length; j++) {
                var td = document.createElement('td');
                td.textContent = data[0][i][j];
                tr.appendChild(td);
                if (j === 0) {
                    if ( k === 0 || k === count || k === 2 * count) {
                        if (count1 === 2 && count2 === 3) {
                            count = 2;
                            td.setAttribute('rowspan', count);
                        } else {
                            td.setAttribute('rowspan', count);
                        }
                        k++;
                    } else {
                        td.remove();
                        k++;
                    }
                }
            }    
        }
        line.setDataAll(data[1]);
    }

    var trs = document.querySelectorAll('tr');
    for (var i = 1; i < trs.length; i++) {
        trs[i].addEventListener('mouseover', function(e) {
            canvas.height = canvas.height;
            var svg = document.querySelector('svg');
            svg.textContent = '';
            var tds = this.querySelectorAll('td');
            for (var j = 1, rawData = []; j < tds.length; j++) {
                if (!isNaN(tds[j].textContent)) {
                    rawData.push(tds[j].textContent);
                }
            }
            line.draw();
            line.setData(rawData);
            bar.draw();
            bar.setData(rawData);
        });
        trs[i].addEventListener('mouseout', function(e) {
            canvas.height = canvas.height;
            line.draw();
            line.setDataAll(data[1]);
            rawDatasCopy = data[1];
        });        
    }
}