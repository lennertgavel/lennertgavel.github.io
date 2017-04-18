var svgMorpheusTV = new SVGMorpheus('#tv');
var iconsTV = ['tv1', 'tv2', 'tv2'];
var currentTV = 0;

function changeIconTV() {

    setTimeout(function () {

        svgMorpheusTV.to(iconsTV[currentTV++], options);

        if (currentTV !== 3) {
            changeIconTV();
        }

    }, 400);
}


setTimeout(function () {
    changeIconTV();
}, 800);


