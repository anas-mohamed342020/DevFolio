document.addEventListener('scroll', function () {
    let wScroll = $(window).scrollTop();
    let aboutTop = $('#about').offset().top;

    number(wScroll)
    line(wScroll)
    navBg(wScroll, aboutTop)

})
let lines = $('.line')
function line(x) {

    let home = $('#home');
    let about = $('#about');
    let services = $('#services');
    let portfoli = $('#portfoli');
    let blog = $('#blog');
    let footer = $('#footer');


    if (x > home.offset().top - 250 && x < home.offset().top - 250 + home.outerHeight()) {
        hideLine(0)
        console.log("home")
    }
    else if (x > about.offset().top - 250 && x < about.offset().top - 250 + home.outerHeight()) {
        hideLine(1)
        console.log("about")
    }
    else if (x > services.offset().top - 250 && x < services.offset().top - 250 + services.outerHeight()) {
        hideLine(2)
        console.log("services")

    }
    else if (x > portfoli.offset().top - 250 && x < portfoli.offset().top - 250 + portfoli.outerHeight()) {
        hideLine(3)
        console.log("portfoli")

    }
    else if (x > blog.offset().top - 250 && x < blog.offset().top - 250 + blog.outerHeight()) {
        hideLine(4)
        console.log("blog")

    }
    else if (x > footer.offset().top - 250 && x < footer.offset().top - 250 + footer.outerHeight()) {
        hideLine(6)
        console.log("footer")
    }
}
$("a[href^='#'").click(function (e) {
    let aHref = e.currentTarget.attributes[1].nodeValue;//get link id from targrt
    let secOffset = $(aHref).offset().top;//get element position from the top to scroll down 
    $("html,body").animate({ scrollTop: secOffset }, 100);//scroll to the div
})
function hideLine(x) {
    for (let i = 0; i < lines.length; i++) {
        if (i == x) {
            $(lines[i]).css({ 'width': '80%' })
        }
        else {
            $(lines[i]).css({ 'width': '0%' })
        }
    }
}









$('#btnUp').click(function () {
    $("html,body").animate({ scrollTop: 0 }, 100);
})
function navBg(x, abouttop) {
    if (x > (abouttop - 500)) {
        $('#navbar').css("backgroundColor", "rgba(0,0,0,0.6");

        $('#btnUp').fadeIn(500)
    }
    else {
        $('#navbar').css("backgroundColor", "transparent");
        $('#btnUp').fadeOut(500)
    }

}


function number(wS) {
    if (wS > $('.numbers').offset().top - ($('.numbers').outerHeight() + 50)) {
        if ($('#first-h1').html() == "") {
            first();
            second();
            third()
            fourth();
        }
    }
}
function first() {
    let i = 0;

    let s = setInterval(() => {
        i++;
        $('#first-h1').html(i);


        if (i == 450) {
            clearInterval(s)
        }
    }, 6);


}

function second() {
    let i = 0;

    let s = setInterval(() => {
        i++;
        $('#second-h1').html(i);


        if (i == 25) {
            clearInterval(s)
        }
    }, 10);


}

function third() {
    let i = 0;

    let s = setInterval(() => {
        i++;
        $('#third-h1').html(i);


        if (i == 550) {
            clearInterval(s)
        }
    }, 6);


}

function fourth() {
    let i = 0;

    let s = setInterval(() => {
        i++;
        $('#th4-h1').html(i);


        if (i == 48) {
            clearInterval(s)
        }
    }, 6);


}

window.addEventListener('load', function () {
    $('.load').remove();
    $('body').css('overflow-y', 'auto')
})

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Developer", "Freelancer", "Photographer"];
const typingDelay = 300;
const erasingDelay = 300;
const newTextDelay = 300; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});






 let navButtons = $('.nav-lis');
 for (let i = 0; i < navButtons.length; i++) {
     $(navButtons[i]).click(() => {
         $('#navbarNav').removeClass('show');
     })
 }
// $('.navbar-toggler').click(()=> { 
//     $('.navbar-nav').slideToggle(250);
// });

// $('.navbar-toggler').click(function () { 
//     console.log('e.preventDefault()');
    
// });





