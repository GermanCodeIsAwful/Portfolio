var seite = "home";

$(function () {
    $("#home p#grosPhome").removeClass("nichtzusehen");
    $("#home p").removeClass("grau");
    $("#home p").addClass("weiss");
    $("#leiste p#kleinPworks").removeClass("nichtzusehen");
    $("#leiste p#kleinPabout").removeClass("nichtzusehen");
    $("#leiste p#kleinPcontact").removeClass("nichtzusehen");
});

bindMouse();

function bindMouse() {
    $(window).bind('mousewheel', function (event) {
        if (event.originalEvent.wheelDelta >= 0) {
            $(window).unbind('mousewheel');
            switch (seite) {
                case "home":
                    seite = "contact";
                    sehen("home", "contact", "hoch");
                    break;
                case "works":
                    seite = "home";
                    sehen("works", "home", "hoch");
                    break;
                case "about":
                    seite = "works";
                    sehen("about", "works", "hoch");
                    break;
                case "contact":
                    seite = "about";
                    sehen("contact", "about", "hoch");
                    break;
                default:
                    seite = "home";
            }
            switchSeite("hoch", "scroll");
        } else {
            $(window).unbind('mousewheel');
            switch (seite) {
                case "home":
                    seite = "works";
                    sehen("home", "works", "runter");
                    break;
                case "works":
                    seite = "about";
                    sehen("works", "about", "runter");
                    break;
                case "about":
                    seite = "contact";
                    sehen("about", "contact", "runter");
                    break;
                case "contact":
                    seite = "home";
                    sehen("contact", "home", "runter");
                    break;
                default:
                    seite = "home";
            }
            switchSeite("runter", "scroll");
        }

    });
}

function sehen(alt, jung, richtung) {

    let altwg = "#" + alt + " p";
    let jungwg = "#" + jung + " p";

    let altGros = "#leiste p#grosP" + alt;
    let altklein = "#leiste p#kleinP" + alt;
    let jungGros = "#leiste p#grosP" + jung;
    let jungklein = "#leiste p#kleinP" + jung;

    switch (richtung) {
        case "hoch":
            $(altGros).addClass("nichtzusehen");
            $(altklein).removeClass("nichtzusehen");
            $(altwg).removeClass("weiss");
            $(altwg).addClass("grau");

            $(jungGros).removeClass("nichtzusehen");
            $(jungklein).addClass("nichtzusehen");
            $(jungwg).removeClass("grau");
            $(jungwg).addClass("weiss");

            break;
        case "runter":
            $(altGros).addClass("nichtzusehen");
            $(altklein).removeClass("nichtzusehen");
            $(altwg).removeClass("weiss");
            $(altwg).addClass("grau");

            $(jungGros).removeClass("nichtzusehen");
            $(jungklein).addClass("nichtzusehen");
            $(jungwg).removeClass("grau");
            $(jungwg).addClass("weiss");
            break;
    }

}

function switchSeite(richtung, vonwo) {

    const homeText = '<h1>Hi,<br>I´m Marc,<br>a developer.</h1><img src="assets/testPB.png" id="PB"><img src="assets/Strich%20main.png" id="strich"><div id="ersterP1"><h2>Front-Back End Developer</h2><p>I am web designer &amp; front-end developer with 1 year of experience. I am interested in all kinds of visual communication, but my major focus is on designing web interfaces &amp; offline programs. I also have skills in other fields like video cutting, creating design or web development.</p></div><div id="ersterP2"><h2>17 year old Student</h2><p>When I discovered programming withe 10 in Minecraft. I realized it would be the perfect fit. I could use my creative side to design basic UI´s and my logical side to code. As a bonus, being both designer and developer allows me to make sure no detail is lost in translation. If I start a Project, I’m already planning how to build it out.</p></div><div id="ersterP3"><h2>Contact</h2><p>Feel free to ask me any questions. I can help you in your project from the UI mockups, back-end and front-end web development to offline programs and installing &amp; configuration of the application on production enviroments.</p>';

    const worksText = '<h1>My Works</h1><img src="assets/Strich%20main.png" id="strich"><div id="switchwork"><p>Auswahl meiner Arbeit</p></div>';

    const aboutText = '<h1>About Me</h1><img src="assets/Strich%20main.png" id="strich"><div id="story"><p>Meine Story</p></div>';

    const contactText = '<h1>Contact Me</h1><img src="assets/Strich%20main.png" id="strich"><div id="email"><p>E-Mail kontakt formular</p></div><div id="faq"><p>FAQ</p></div>';

    switch (seite) {
        case "home":
            switch (richtung) {
                case "runter":
                    $("#erster").fadeOut(300).animate({
                        "top": "-=100px"
                    }, {
                        duration: 'slow',
                        queue: false,
                        complete: function () {
                            $("#erster").css("top", "100px");
                            $('#erster').html(homeText);
                            $("#erster").fadeIn(300).animate({
                                "top": "-=100px"
                            }, {
                                duration: 'slow',
                                queue: false,
                                complete: function () {
                                    if (vonwo == "scroll") {
                                        bindMouse();
                                    }
                                }
                            });

                        }
                    });
                    break;
                case "hoch":
                    $("#erster").fadeOut(300).animate({
                        "top": "+=100px"
                    }, {
                        duration: 'slow',
                        queue: false,
                        complete: function () {
                            $("#erster").css("top", "-100px");
                            $('#erster').html(homeText);
                            $("#erster").fadeIn(300).animate({
                                "top": "+=100px"
                            }, {
                                duration: 'slow',
                                queue: false,
                                complete: function () {
                                    if (vonwo == "scroll") {
                                        bindMouse();
                                    }
                                }
                            });

                        }
                    });
                    break;
            }
            break;
        case "works":
            switch (richtung) {
                case "runter":
                    $("#erster").fadeOut(300).animate({
                        "top": "-=100px"
                    }, {
                        duration: 'slow',
                        queue: false,
                        complete: function () {
                            $("#erster").css("top", "100px");
                            $('#erster').html(worksText);
                            $("#erster").fadeIn(300).animate({
                                "top": "-=100px"
                            }, {
                                duration: 'slow',
                                queue: false,
                                complete: function () {
                                    if (vonwo == "scroll") {
                                        bindMouse();
                                    }
                                }
                            });

                        }
                    });
                    break;
                case "hoch":
                    $("#erster").fadeOut(300).animate({
                        "top": "+=100px"
                    }, {
                        duration: 'slow',
                        queue: false,
                        complete: function () {
                            $("#erster").css("top", "-100px");
                            $('#erster').html(worksText);
                            $("#erster").fadeIn(300).animate({
                                "top": "+=100px"
                            }, {
                                duration: 'slow',
                                queue: false,
                                complete: function () {
                                    if (vonwo == "scroll") {
                                        bindMouse();
                                    }
                                }
                            });

                        }
                    });
                    break;
            }
            break;
        case "about":
            switch (richtung) {
                case "runter":
                    $("#erster").fadeOut(300).animate({
                        "top": "-=100px"
                    }, {
                        duration: 'slow',
                        queue: false,
                        complete: function () {
                            $("#erster").css("top", "100px");
                            $('#erster').html(aboutText);
                            $("#erster").fadeIn(300).animate({
                                "top": "-=100px"
                            }, {
                                duration: 'slow',
                                queue: false,
                                complete: function () {
                                    if (vonwo == "scroll") {
                                        bindMouse();
                                    }
                                }
                            });

                        }
                    });
                    break;
                case "hoch":
                    $("#erster").fadeOut(300).animate({
                        "top": "+=100px"
                    }, {
                        duration: 'slow',
                        queue: false,
                        complete: function () {
                            $("#erster").css("top", "-100px");
                            $('#erster').html(aboutText);
                            $("#erster").fadeIn(300).animate({
                                "top": "+=100px"
                            }, {
                                duration: 'slow',
                                queue: false,
                                complete: function () {
                                    if (vonwo == "scroll") {
                                        bindMouse();
                                    }
                                }
                            });

                        }
                    });
                    break;
            }
            break;
        case "contact":
            switch (richtung) {
                case "runter":
                    $("#erster").fadeOut(300).animate({
                        "top": "-=100px"
                    }, {
                        duration: 'slow',
                        queue: false,
                        complete: function () {
                            $("#erster").css("top", "100px");
                            $('#erster').html(contactText);
                            $("#erster").fadeIn(300).animate({
                                "top": "-=100px"
                            }, {
                                duration: 'slow',
                                queue: false,
                                complete: function () {
                                    if (vonwo == "scroll") {
                                        bindMouse();
                                    }
                                }
                            });

                        }
                    });
                    break;
                case "hoch":
                    $("#erster").fadeOut(300).animate({
                        "top": "+=100px"
                    }, {
                        duration: 'slow',
                        queue: false,
                        complete: function () {
                            $("#erster").css("top", "-100px");
                            $('#erster').html(contactText);
                            $("#erster").fadeIn(300).animate({
                                "top": "+=100px"
                            }, {
                                duration: 'slow',
                                queue: false,
                                complete: function () {
                                    if (vonwo == "scroll") {
                                        bindMouse();
                                    }
                                }
                            });

                        }
                    });
                    break;
            }
            break;


    }
}

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
    const navLinks = document.querySelectorAll('.navlinks li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('navactive');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
            }
        });

        burger.classList.toggle('toggle');

    });


}

navSlide();

document.querySelector('.navlinks .homelink').addEventListener('click', () => {
    let alteseite = seite;
    seite = "home";
    sehen(alteseite, seite, "runter");
    switchSeite("runter", "burger");
    console.log(seite + alteseite);
});

document.querySelector('nav .logo img').addEventListener('click', () => {
    let alteseite = seite;
    seite = "home";
    sehen(alteseite, seite, "runter");
    switchSeite("runter", "burger");
    console.log(seite + alteseite);
});

document.querySelector('.navlinks .worklink').addEventListener('click', () => {
    let alteseite = seite;
    seite = "works";
    sehen(alteseite, seite, "runter");
    switchSeite("runter", "burger");
    console.log(seite + alteseite);
});

document.querySelector('.navlinks .aboutlink').addEventListener('click', () => {
    let alteseite = seite;
    seite = "about";
    sehen(alteseite, seite, "runter");
    switchSeite("runter", "burger");
    console.log(seite + alteseite);
});

document.querySelector('.navlinks .contactlink').addEventListener('click', () => {
    let alteseite = seite;
    seite = "contact";
    sehen(alteseite, seite, "runter");
    switchSeite("runter", "burger");
    console.log(seite + alteseite);
});