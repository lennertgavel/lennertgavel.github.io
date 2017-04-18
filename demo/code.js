var svgMorpheus = new SVGMorpheus('#icon');
var icons = ['leaf1', 'leaf4', 'leaf4'];
var current = 0;

var options = {rotation: 'none', easing: 'linear', duration: 300};
//, easing: 'circ-out'

function changeIcon() {

    setTimeout(function () {

        svgMorpheus.to(icons[current++], options);

        if (current === 3) {
            //document.getElementById("icon_target").className += " bounce";
        }

        else {
            changeIcon();
        }

    }, 400);
}

setTimeout(function () {
    document.getElementById("icon_target").className = "show";
}, 0);


setTimeout(function () {
    changeIcon();
}, 0);


