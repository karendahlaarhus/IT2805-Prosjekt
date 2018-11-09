footertekst=`
<footer id="footeren">
  <ul>
     <li class="footer">Tmv-kaia 10, 7042 Trondheim</li>
     <li class="footer">Mandag - Fredag (11-21) Lørdag (12-22)</li>
     <li class="footer">Telefon: 22 22 55 55 </li>
 </ul>
</footer>
`
function addfooter(){
const footeren=document.getElementById("footeren");
footeren.innerHTML+=footertekst;
}
addfooter()
