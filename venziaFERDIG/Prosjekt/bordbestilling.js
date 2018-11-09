var btnSubmit=document.getElementById("btnSubmit");
var inpFornavn=document.getElementById("inpFornavn");
var inpEtternavn=document.getElementById("inpEtternavn");
var inp=document.getElementsByClassName("inp");
var inpDato=document.getElementById("inpDato");
var outpBestilling=document.getElementById("outpBestilling");


btnSubmit.addEventListener("click", sendBestilling);

var dagensDato=new Date();






function sendBestilling(){
    if (inpAntallVoksne.value!="" && inpAntallBarn!="" && inpFornavn.value!="" && inpEtternavn.value!="" && inpEmail.value!="" && inpMobilnr.value!="" && inpDato.value!="" && inpKlokkeslett.value!=""){
      let dato=String(dagensDato.getFullYear())+String(("0"+(dagensDato.getMonth()+1)).slice(-2))+String(("0"+dagensDato.getDate()).slice(-2));
      console.log(dato);

      let inputdato=inpDato.value.replace(/-/g,""); //fjerner bindestrek på valuen fra inputfeltet

              if (dato>=inputdato) { //Prøver å skrive at man ikke kan bestille før dagens dato
                console.log("velgEnDato i fremtiden");
                  outpBestilling.innerHTML="Du må velge en fremtidig dato";
              }
              else {
                //outpBestilling.innerHTML=("virker "+inputdato.slice(4,6));

                outpBestilling.innerHTML="<h1>"+"Takk for din bestilling!"+"</h1>"+"<br>"+"<br>"+"Du har bestilt bord for "+inpAntallVoksne.value+" voksne og "+inpAntallBarn.value+" barn den "+inputdato.slice(6,9)+"."+inputdato.slice(4,6)+". Klokken "+inpKlokkeslett.value+". Det har blitt sendt en bekreftelsesmail til "+inpEmail.value
                                          +"<br>"+"<br>"+"Hvis du har noen spørsmål, vennligst ta kontakt!";
              }
    }
    else{
        outpBestilling.innerHTML="Vennligst fyll ut alle feltene";

        }
    }
