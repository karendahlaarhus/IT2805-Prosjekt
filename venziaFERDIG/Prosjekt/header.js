headertekst=`
  <header>
  <div id="line1"><hr></div>
  <div id="line2"><hr></div>
  <ul class="centerlogo">
    <li><a class="meny" href="../html/meny.html">Meny</a></li>
    <li><a class="meny" href="../html/about.html">Om oss</a></li>
    <li><a class="meny" href="../html/index.html"> <img id="logo" src="../bilder/logo.png" alt="logo Venezia"></a></li>
    <li><a class="meny" href="../html/bordbestilling.html">Bordbestilling</a></li>
  </ul>
  </header>
`

function addHeader(){
  const headeren=document.getElementById("headeren");
  headeren.innerHTML=headertekst;
}
addHeader()
