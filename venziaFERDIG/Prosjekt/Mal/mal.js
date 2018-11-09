//Tok tips pg triks fra denne siden for å lage en on scroll header :https://www.w3schools.com/howto/howto_js_sticky_header.asp
// Kjøre funksjonen når det scrolles i nettvinduet
window.onscroll = function() {scroll()};

// Hente headeren
var myheader = document.getElementById("headeren");

// Hente offset position av headeren
var sticky = myheader.offsetTop;


// Legg til "sticky" class til headeren når man når den scrolle posisjonen,
//legge til placholder for å ta opp plassen headeren gir fra seg når den blir tatt ut av noraml flow
// Fjern "sticky" når du forlater scrolle posisjon

function scroll() {
  if (window.pageYOffset > sticky ){
    myheader.classList.add("sticky");
    document.querySelector('.placeholder').style.display = "block";
    document.querySelector('#line1').style.width = "38.15%";
    document.querySelector('#line2').style.margin = "5.1% 0 0 60.8%";
    document.querySelector('#line2').style.width = "36.6%";
  } else {
    myheader.classList.remove("sticky");
    document.querySelector('.placeholder').style.display = "none";
    document.querySelector('#line1').style.width = "34%";
    document.querySelector('#line2').style.margin = "4.5% 0 0 54.2%";
    document.querySelector('#line2').style.width = "32.6%";
  }
}

const parentElement = document.querySelector('body');
const fixedElement = document.querySelector('#headeren');

//insporasjon fra https://stackoverflow.com/questions/16018520/is-it-possible-to-keep-the-width-of-the-parent-element-when-position-fixed-is-a
//Kjør funksjonen når nettvinduet lastes
window.addEventListener('load', changeFixedElementWidth);

//Kjør funksjonen når nettvinduet endrer størrelse
window.addEventListener('resize', changeFixedElementWidth);

//Henter parent element width til headerne, endrer headernes width til parent element width
function changeFixedElementWidth() {
  const parentElementWidth = parentElement.getBoundingClientRect().width;
  fixedElement.style.width = parentElementWidth - 40 + 'px';
}
