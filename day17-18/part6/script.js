greet.addEventListener("click", function() {alert("雷猴");});

hobby.addEventListener("click", function() {alert("我爱吃面包");});

var time = new Date();
if (time.getHours() < 7) {
    alert('现在是睡觉时间');
} else if (time.getHours() < 12) {
    alert('早上好');
} else if (time.getHours() < 18) {
    alert('下午好');
} else {
    alert('晚上好');
}