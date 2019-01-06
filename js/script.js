var sectionindex = 0;

window.onload = function() {
        var hiimconnor = anime({
            targets: '#introduction',
            translateX: [ '120vw', 0],
            duration: 800,
            loop: false,
            elasticity: 50
        });

        var fullstackdevelop = anime({
            targets: '#fullstackdeveloper',
            translateX:  [ '120vw', 0],
            duration: 800,
            loop: false,
            delay: 800,
            elasticity: 50
        });

        var slash = anime({
            targets: '#slash',
            translateX:  [ '120vw', 0],
            duration: 800,
            loop: false,
            delay: 1000,
            elasticity: 100
        })
        var nomad = anime({
            targets: '#nomad',
            translateX:  [ '120vw', 0],
            duration: 800,
            loop: false,
            delay: 1400,
            elasticity: 200
        })

        var arrowright = document.getElementsByClassName("arrowright")[0];

        arrowright.onclick = function() {
            var sections = document.getElementsByClassName("section");
            appInsights.trackEvent('right to section [' + sectionindex + ']');
            window.scrollTo(sections[sectionindex + 1].offsetLeft, 0);
            if (sections.length - 1 != sectionindex) {
                sectionindex++;
            }
        }

        var arrowleft = document.getElementsByClassName("arrowleft")[0];

        arrowleft.onclick = function() {
            var sections = document.getElementsByClassName("section");
            appInsights.trackEvent('left to section [' + sectionindex + ']');
            window.scrollTo(sections[sectionindex - 1].offsetLeft - (window.innerWidth * 0.1), 0);
            if (sectionindex != 0) {
                sectionindex--;
        }
    }
}
