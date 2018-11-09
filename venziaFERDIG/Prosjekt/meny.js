//Tok tips pg triks fra denne siden for å lage en on scroll header :https://www.w3schools.com/howto/howto_js_sticky_header.asp

// kjøre funksjonene når det scrolles i nettvinduet
window.addEventListener('scroll', function() {
  changeFixedElementWidth();
  scroll();
});

// kjøre funksjonene når nettvinduet lastes
window.addEventListener('load', function() {
  changeFixedElementWidth();
  scroll();
});

// kjøre funksjonene når vinduets størrelse endres
window.addEventListener('resize', function() {
  changeFixedElementWidth();
  scroll();
});

// Hente headerne
var myheader = document.getElementById("headeren");
var menyheader = document.getElementById('menyDiv');

// Hente offset position av headeren
var sticky = myheader.offsetTop;
var stickymeny1 = menyheader.offsetTop;

// Legg til "sticky" class til headerne når man når den scrolle posisjonen,
//legge til placholder for å ta opp plassen headren gir fra seg når den blir tatt ut av noraml flow
// Fjern "sticky" når du forlater scrolle posisjon
//Legge til stiling på strekene for å få de til å stå på samme plass i fixed og ikke fixed header posisjon
function scroll(x) {
  var stickymeny = menyheader.offsetTop;
  var myheaderHeight = myheader.getBoundingClientRect().height;
  if ((window.pageYOffset > sticky ) && (window.pageYOffset > stickymeny-myheaderHeight)) {
    myheader.classList.add("sticky");
    menyheader.classList.add("sticky1");
    document.querySelector('.placeholder1').style.display = "block";
    document.querySelector('.placeholder').style.display = "block";
    document.querySelector('#line1').style.width = "38.15%";
    document.querySelector('#line2').style.margin = "5.1% 0 0 60.8%";
    document.querySelector('#line2').style.width = "36.6%";
  } else if ((window.pageYOffset > sticky)){
    myheader.classList.add("sticky");
    menyheader.classList.remove("sticky1");
    document.querySelector('.placeholder').style.display = "block";
    document.querySelector('.placeholder1').style.display = "none";
    document.querySelector('#line1').style.width = "38.15%";
    document.querySelector('#line2').style.margin = "5.1% 0 0 60.8%";
    document.querySelector('#line2').style.width = "36.6%";
  } else {
    myheader.classList.remove("sticky");
    menyheader.classList.remove("sticky1");
    document.querySelector('.placeholder1').style.display = "none";
    document.querySelector('.placeholder').style.display = "none";
    document.querySelector('#line1').style.width = "34%";
    document.querySelector('#line2').style.margin = "4.5% 0 0 54.2%";
    document.querySelector('#line2').style.width = "32.6%";
  }
}

//Hente parent elemetn til headerne
const parentElement = document.querySelector('body');
const menyparentElement = document.querySelector('#menyhtml')

//insporasjon fra https://stackoverflow.com/questions/16018520/is-it-possible-to-keep-the-width-of-the-parent-element-when-position-fixed-is-a
//Henter parent element width til headerne, endrer headernes width til parent element width
//Henter høyden til myheader, endrer størrelse på menyheader ettesom størrelsen til myheader endres
function changeFixedElementWidth() {
  const parentElementWidth = parentElement.getBoundingClientRect().width;
  myheader.style.width = parentElementWidth - 40 + 'px';
  const menyparentElementWidt = menyparentElement.getBoundingClientRect().width;
  menyheader.style.width = menyparentElementWidt + 'px';
  var myheaderHeight = myheader.getBoundingClientRect().height;
  menyheader.style.top = myheaderHeight - 16 + 'px';
}

/*Allergi buttons*/

/*Hentet inspirasjon fra https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp, men
endret litt på den med hjelp fra studass. Setter klassen allergi til hidden. Funksjonen aktiveres når man trykker på knappen.
Hvis knappen er hidden så blir den visible når man trykker på knappen. Trykker man en gang til så skjules allergiene igjen. */
  document.querySelectorAll('.allergi').forEach(function(element){
    element.style.visibility = "hidden"
  })


  function vis(){
    if (document.querySelector('.allergi').style.visibility == "hidden"){
      document.querySelectorAll('.allergi').forEach(function(element){
        element.style.visibility = "visible";
      })
    } else {
      document.querySelectorAll('.allergi').forEach(function(element){
        element.style.visibility = "hidden"
      })

    }
  }
