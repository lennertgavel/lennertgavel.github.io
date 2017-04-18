var svgMorpheusline = new SVGMorpheus('#line');
var iconsline = ['line1', 'line2', 'line2'];
var currentline = 0;

function changeIconline() {

    setTimeout(function () {

        svgMorpheusline.to(iconsline[currentline++], options);

        if (currentline !== 3) {
            changeIconline();
        }

    }, 400);
}


setTimeout(function () {
    changeIconline();
}, 800);


