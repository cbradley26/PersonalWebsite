
window.onload = function() {
        var hiimconnor = anime({
            targets: '#introduction',
            translateX: [ '120vh', 0],
            duration: 800,
            loop: false,
            elasticity: 50
        });

        var fullstackdevelop = anime({
            targets: '#fullstackdeveloper',
            translateX:  [ '120vh', 0],
            duration: 800,
            loop: false,
            delay: 800,
            elasticity: 50
        });

        var slash = anime({
            targets: '#slash',
            translateX:  [ '120vh', 0],
            duration: 800,
            loop: false,
            delay: 1000,
            elasticity: 100
        })
        var nomad = anime({
            targets: '#nomad',
            translateX:  [ '120vh', 0],
            duration: 800,
            loop: false,
            delay: 1400,
            elasticity: 200
        })

}