var svgMorpheusS = new SVGMorpheus('#s');
var iconsS = ['s1', 's2', 's2'];
var currentS = 0;

function changeIconS() {

    setTimeout(function () {

        svgMorpheusS.to(iconsS[currentS++], options);

        if (currentS !== 3) {
            changeIconS();
        }

    }, 400);
}


setTimeout(function () {
    changeIconS();
}, 200);


