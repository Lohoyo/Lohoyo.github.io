var selects = document.querySelectorAll('select');
var p1 = document.querySelector('p#now');
var p2 = document.querySelector('p#set');
var p3 = document.querySelector('p#dif');

// 现在的时间部分

p1.textContent = '现在 ' + Result1(new Date());
window.setInterval(time, 1000);
function time() {
    p1.textContent = '现在 ' + Result1(new Date());
}

function Year(date) {
    return date.getFullYear();
}

function Month(date) {
    return date.getMonth() + 1;
}

function Day(date) {
    return date.getDate();
}        

function Week(date) {
    switch (date.getDay()) {
        case 0: return '日';
        case 1: return '一';
        case 2: return '二';
        case 3: return '三';
        case 4: return '四';
        case 5: return '五';
        case 6: return '六';
    }
}

function Hour(date) {
    return Format(date.getHours());
}

function Minute(date) {
    return Format(date.getMinutes());
}    

function Second(date) {
    return Format(date.getSeconds());
}

function AMPM(date) {
    return date.getHours() < 12 ? 'AM' : 'PM';
}

// 位数的补齐
function Format(num) {
    return num < 10 ? '0' + num : num;
}

// 包装最终的结果

function Result1(date) {
    return Year(date) + '年' + Month(date) + '月' + Day(date) + '日星期' + Week(date) + ' ' + Hour(date) + ':' + Minute(date) + ':' + Second(date);
}        



// 时间差部分

// 添加option项
AddOption(selects[0], 2000, 2032);
AddOption(selects[1], 1, 12);
AddOption(selects[2], 1, 31);
AddOption(selects[3], 0, 23);
AddOption(selects[4], 0, 59);
AddOption(selects[5], 0, 59);

function AddOption(select, min, max) {
    for (var i = min; i < max + 1; i++) {
        var option = document.createElement('option');
        option.setAttribute('value', i);
        if (min === 0 && i < 10) {
            option.textContent = '0' + i;
        } else {
            option.textContent = i;
        }
        select.appendChild(option);
    }                        
}

// 主程序
Result2();
window.setInterval(Result2, 1000);
for (var i = 0; i < selects.length; i++) {
    selects[i].addEventListener('change', function() {
        Result2();
    })
}
function Result2() {
    Cout(Difference(Choice()));
}

// 处理选了2月时改变年份导致2月的天数改变的情况
selects[0].addEventListener('change', function() {
    var month = selects[1].options[selects[1].selectedIndex].value;
    if (month === '2') {
        var days = selects[2].options.length;
        if (selects[0].options[selects[0].selectedIndex].value % 4) {
            if (days === 29) {
                selects[2].options[28].remove();
            }
        } else {
            if (days === 28 ) {
                AddOption(selects[2], 29, 29);
            }
        }
    }
})

// 处理改变月份时导致每月的天数改变的情况
selects[1].addEventListener('change', function() {
    var month = selects[1].options[selects[1].selectedIndex].value;
    var days = selects[2].options.length;
    if (month === '2') {
        if (selects[0].options[selects[0].selectedIndex].value % 4) {
            for (var i = days; i !== 28; i--) {
                selects[2].options[i - 1].remove();
            }
        } else {
            for (var i = days; i !== 29; i--) {
                selects[2].options[i - 1].remove();
            }
        }
    } else if (month === '4' || month === '6' || month === '9' || month === '11') {
        if (days === 31) {
            selects[2].options[30].remove();
        } else if (days !== 30) {
            AddOption(selects[2], days + 1, 30);                  
        }
    } else if (days !== 31) {
        AddOption(selects[2], days + 1, 31);                  
    }
})


// 选定的时间
function Choice() {
    var num1 = selects[0].options[selects[0].selectedIndex].value;
    var num2 = selects[1].options[selects[1].selectedIndex].value;
    var num3 = selects[2].options[selects[2].selectedIndex].value;
    var num4 = selects[3].options[selects[3].selectedIndex].value;
    var num5 = selects[4].options[selects[4].selectedIndex].value;
    var num6 = selects[5].options[selects[5].selectedIndex].value;
    var utc = Date.UTC(num1, num2 - 1, num3, num4, num5, num6) - 8 * 60 * 60 * 1000;
    var week = Week(new Date(utc));
    p2.textContent = '距离 ' + num1 + '年' + num2 + '月' + num3 + '日星期' + week + ' ' + Format(num4) + ':' + Format(num5) + ':' + Format(num6) + ' ';
    return utc;
}         

// 计算时间差
function Difference(choice) {
    var difference = (choice - Date.now()); 
    if (difference > 0) {
        p3.textContent = '还有 ';
    } else {
        p3.textContent = '已经过去 ';
    }
    difference = Math.floor(Math.abs(difference / 1000));  // 换成以秒为单位
    // 换成“X 天 X 小时 X 分 X 秒”的格式
    var difference2 = [];  
    var temp = difference % 60;
    difference2.unshift(temp);
    difference = (difference - temp) / 60;

    temp = difference % 60;
    difference2.unshift(temp);
    difference = (difference - temp) / 60;

    temp = difference % 24;
    difference2.unshift(temp);
    difference = (difference - temp) / 24;

    difference2.unshift(difference);

    return difference2;
}

// 最终的打印文本
function Cout(diference) {
    p3.textContent += diference[0] + '天' + diference[1] + '小时' + diference[2] + '分' + diference[3] + '秒'; 
}