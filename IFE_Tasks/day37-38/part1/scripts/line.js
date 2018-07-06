var line = {
    draw: function() {
        ctx.beginPath();
        ctx.moveTo(2.5, 0);
        ctx.lineTo(2.5, 200);
        ctx.lineTo(window.innerWidth / 2 - 18.5, 200);
        ctx.stroke();
    },
    setData: function(rawData, color, max, legendPos) {
        if (arguments.length < 2) {
            ctx.fillStyle = 'skyblue';
            ctx.strokeStyle = 'skyblue';
        } else {
            ctx.fillStyle = color;
            ctx.strokeStyle = color;            
        }
        if (arguments.length < 3) {
            for (var i = 1, max = Number(rawData[0]); i < rawData.length; i++) {
                if (max < Number(rawData[i])) {
                    max = Number(rawData[i]);
                }
            }
        }
        for (var i = 0, start = null; i < rawData.length; i++) {
            ctx.beginPath();
            ctx.arc(2.5 + (window.innerWidth / 2 - 21) / 11 * i, 197.5 - 197.5 * rawData[i] / max + 2.5, 2.5, 0, Math.PI * 2);
            ctx.fill();
            if (start) {
                ctx.beginPath();
                ctx.moveTo(start[0], start[1]);
                ctx.lineTo(2.5 + (window.innerWidth / 2 - 21) / 11 * i, 197.5 - 197.5 * rawData[i] / max + 2.5, 2.5, 0);
                ctx.stroke();
            }
            start = [2.5 + (window.innerWidth / 2 - 21) / 11 * i, 197.5 - 197.5 * rawData[i] / max + 2.5];
        }
        for (var i = 0, product = null, region = null; i < sourceData.length; i++) {
            if (sourceData[i].sale.toString() === rawData.toString()) {
                product = sourceData[i].product;
                region = sourceData[i].region;
                break;
            }
        }
        if (arguments.length < 4) {
            ctx.fillText(product + ' ' + region, 3, 10);
        }   else {
            ctx.fillText(product + ' ' + region, 3, legendPos);
        }
    },
    setDataAll: function(rawDatas) {
        var colors = ['aqua', 'cadetblue', 'blue', 'brown', 'blueviolet', 'green', 'gold', 'hotpink', 'olive'];
        for (var i = 0, max = Number(rawDatas[0][0]); i < rawDatas.length; i++) {
            for (var j = 0; j < rawDatas[i].length; j++) {
                if (max < Number(rawDatas[i][j])) {
                    max = Number(rawDatas[i][j]);
                }                
            }
        }
        for (var i = 0; i < rawDatas.length; i++) {
            this.setData(rawDatas[i], colors[i], max, 10 + 11 * i);
        }
    }
};