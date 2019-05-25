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
            scrollToSection('right');
        }

        var arrowleft = document.getElementsByClassName("arrowleft")[0];

        arrowleft.onclick = function() {
           scrollToSection('left');
        }
}


window.onresize = function() {
    if (!currentSection) {
        currentSection = getActiveSection();
    }
    anime({
        targets: container[0],
        left: currentSection.offsetLeft * -1,
        duration: 10,
        easing: 'easeInOutCubic' 
    })
    left = currentSection.offsetLeft * -1;
}

const container = document.getElementsByClassName('bigolecontainer');
const sections = document.getElementsByClassName('section');
var left = 0;
var currentSection = sections[0];

function scrollToSection(dir) {

    if (dir == 'right') {
        if (checkvisible(sections[sections.length - 1])) {
            return;
        }
        left = left + ((window.innerWidth) * -1);
    }
    else {
        if (left- ((window.innerWidth) * -1) > 0) {
            return;
        }
        left = left - ((window.innerWidth) * -1);
    }
    var animate = anime({
        targets: container[0],
        left: left,
        duration: 500,
        easing: 'easeInOutCubic'
    });

    var promise = animate.finished.then(function() { currentSection = getActiveSection()});
}

function getActiveSection() {
    for (i = 0; i < sections.length; i++) {
        if (checkvisible(sections[i])) {
            return sections[i];
        }
    }
}

function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
  
    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
  
    return (
      top < (window.pageYOffset + window.innerHeight) &&
      left < (window.pageXOffset + window.innerWidth) &&
      (top + height) > window.pageYOffset &&
      (left + width) > window.pageXOffset
    );
  }


function posX(elm) {
    var test = elm, top = 0;

    while(!!test && test.tagName.toLowerCase() !== "body") {
        top += test.offsetLeft;
        test = test.offsetParent;
    }

    return top;
}

function viewPortWidth() {
    var de = document.documentElement;

    if(!!window.innerWidth)
    { 
        return window.innerHeight; 
    }
    else if( de && !isNaN(de.clientHeight) )
    {
        return de.clientHeight; 
    }

    return 0;
}

function checkvisible( elm ) {
    var vpW = viewPortWidth(), // Viewport Width
        st = container[0].offsetLeft, // Scroll Top
        x = posX(elm);

    return (x > st && x < (st + vpW));
}