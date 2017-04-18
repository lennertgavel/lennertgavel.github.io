var svgMorpheusS2 = new SVGMorpheus('#s2');
var iconsS2 = ['s21', 's22', 's22'];
var currentS2 = 0;

function changeIconS2() {

    setTimeout(function () {

        svgMorpheusS2.to(iconsS2[currentS2++], options);

        if (currentS2 !== 3) {
            changeIconS2();
        }

    }, 400);
}


setTimeout(function () {
    changeIconS2();
}, 200);


