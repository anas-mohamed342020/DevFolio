















$(".ful1").slideToggle(250);
$(".ful2").slideToggle(250);

$(".drop").click(function () {
  $(".ful1").slideToggle(250);
});

$(".drop2").click(function () {
  $(".ful2").slideToggle(250);
});
$(".navbar-toggler").click(() => {
  $(".nav-fixed-container").fadeIn(250);
});
$(".fa-times").click(() => {
  $(".nav-fixed-container").fadeOut(250);
});

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const textArray = ["Developer", "Freelancer", "Photographer"];
const typingDelay = 300;
const erasingDelay = 300;
const newTextDelay = 300;
let textArrayIndex = 0;
let charIndex = 0;
function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}
function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

let navButtons = $(".hidenav");
for (let i = 0; i < navButtons.length; i++) {
  if (i != 5) {
    $(navButtons[i]).click(() => {
      $(".nav-fixed-container").fadeOut(250);
    });
  }
}