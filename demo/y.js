var svgMorpheusY = new SVGMorpheus('#y');
var iconsY = ['y1', 'y2', 'y2'];
var currentY = 0;

function changeIconY() {

    setTimeout(function () {

        svgMorpheusY.to(iconsY[currentY++], options);

        if (currentY !== 3) {
            changeIconY();
        }

    }, 400);
}


setTimeout(function () {
    changeIconY();
}, 200);


