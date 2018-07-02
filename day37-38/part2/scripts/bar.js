var bar = {
    draw: function() {
        var x = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        svg.appendChild(x);
        x.setAttribute('x1', '0');
        x.setAttribute('y1', '199');
        x.setAttribute('x2', '100%');
        x.setAttribute('y2', '199');    
        x.setAttribute('stroke', 'black');        
    
        var y = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        svg.appendChild(y);
        y.setAttribute('x1', '0');
        y.setAttribute('y1', '199');
        y.setAttribute('x2', '0');
        y.setAttribute('y2', '0');    
        y.setAttribute('stroke', 'black');   
    },
    setData: function(rawData) {
        for (var i = 1, max = Number(rawData[0]); i < rawData.length; i++) {
            if (max < Number(rawData[i])) {
                max = Number(rawData[i]);
            }
        }        
        for (var i = 0; i < rawData.length; i++) {
            var bar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            bar.setAttribute('x', 2 / 3 + (1 / 3  + 8) * i + '%');
            bar.setAttribute('y', 198 - 198 * rawData[i] / max);
            bar.setAttribute('width', 8 - 1 / 3 + '%');
            bar.setAttribute('height', 198 * rawData[i] / max);
            bar.setAttribute('fill', 'skyblue');
            svg.appendChild(bar);
        }
    }
};