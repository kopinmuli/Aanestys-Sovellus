//Tässä projekti äänestyskäyttöliittymästä

//luodaan muuttujia
var piilotaGallupit = document.getElementsByClassName("gallup");
var poistaElementit = document.getElementsByClassName("poista");
var viimeisinid = 1001;
var tulevaid = 1001;
var tulevaid;
var vaihtoon1;
var vaihtoon3;
var vaihtoon4;
var vaihtoehdot;
var elementinId;


// Aanestyksen aloittamisfunktio, tsekataan samalla mitä rivejä täytelty ja luodaan niille parit muuttujat
// Toisella muuttujalla tsekataan kuinka monta vaihtoehtoa jää jäljelle ja toisella että mitä on jätetty täyttämättä
// Näin pystyin määrittämään myöhemmin että mitkä äänestysnappulat jää näkyviin
// Luomisen lopuksi piilotetaan malligallup näkyvistä.

function julkaiseAanestys() {
    vaihtoehdot=4;
    vaihtoon1=0;
    vaihtoon3=0;
    vaihtoon4=0;  
    if (document.getElementById("vaihtoehto3").value == "") {
        vaihtoon3=1;
        vaihtoehdot=vaihtoehdot-1;
    }
    if (document.getElementById("vaihtoehto4").value == "") {
        vaihtoon4=1;  
        vaihtoehdot=vaihtoehdot-1;
    }
    if (document.getElementById("kysymys").value == "") {
        vaihtoon1=1;
    }

    if (document.getElementById("vaihtoehto1").value == "") {
        vaihtoon1=1;
    }

    if (document.getElementById("vaihtoehto2").value == "") {
        vaihtoon1=1;
    }
    if (vaihtoon3 == 1 && vaihtoon4 == 0) {
        alert("Syötä vastaukset järjestyksessä ylhäältä alas.");
        vaihtoon1=1;
    }  
    // perutaan julkaisu jos ei ole täytetty oikein ja jatketaan jos on
    switch (vaihtoon1) {
        case 1: {
            vaihtoon1=1;
            alert("Syötä vähintään kysymys ja kaksi ensimmäistä vastausta, tarkista myös että syötit vastaukset järjestyksessä");
            break; 
        }
        case 0: {
            vaihtoon1=0;
            alert("Luotiin uusi kysely!");
            luoUusi(vaihtoehdot);
            muokkaaSisalto();
            suljeLuonti(); 
        }
    }
    for (i = 0; i < piilotaGallupit.length; i++) {
        piilotaGallupit[i].style.display = "block";
    }  
    document.getElementById("gallup1001").style.display = "none";        
}

// kopioidaan malli gallupin sisukset ja luodaan niistä uusi div 
// tuodaan myös malligallup näkyviin hetkeksi kopiointia varten
// päivitetään samalla id:t uuteen julkaisuun
function luoUusi(vaihtoehdot) {
    vaihtoehdot=vaihtoehdot;
    document.getElementById("gallup1001").style.display = "block";
    var tyhjaDiv = document.createElement("div");
    var uusigallup = document.getElementById("gallup1001").innerHTML;
    document.getElementById("gallup1001").style.display = "none";

   
    tulevaid = viimeisinid+1;
   
    uusigallup = uusigallup.replace("avaa1001", "avaa"+tulevaid);
    uusigallup = uusigallup.replace("sulje1001", "sulje"+tulevaid);
    uusigallup = uusigallup.replace("piilota1001", "piilota"+tulevaid);
    uusigallup = uusigallup.replace("poista1001", "poista"+tulevaid);
    uusigallup = uusigallup.replace("ehto1001a", "ehto"+tulevaid+"a");
    uusigallup = uusigallup.replace("ehto1001b", "ehto"+tulevaid+"b");
    uusigallup = uusigallup.replace("ehto1001c", "ehto"+tulevaid+"c");
    uusigallup = uusigallup.replace("ehto1001d", "ehto"+tulevaid+"d");
    uusigallup = uusigallup.replace("ehto1001aa", "ehto"+tulevaid+"aa");
    uusigallup = uusigallup.replace("ehto1001ba", "ehto"+tulevaid+"ba");
    uusigallup = uusigallup.replace("ehto1001ca", "ehto"+tulevaid+"ca");
    uusigallup = uusigallup.replace("ehto1001da", "ehto"+tulevaid+"da");
    uusigallup = uusigallup.replace("aanet1001a", "aanet"+tulevaid+"a");
    uusigallup = uusigallup.replace("aanet1001b", "aanet"+tulevaid+"b");
    uusigallup = uusigallup.replace("aanet1001c", "aanet"+tulevaid+"c");
    uusigallup = uusigallup.replace("aanet1001d", "aanet"+tulevaid+"d");
    uusigallup = uusigallup.replace("aanet1001aa", "aanet"+tulevaid+"aa");
    uusigallup = uusigallup.replace("aanet1001ba", "aanet"+tulevaid+"ba");
    uusigallup = uusigallup.replace("aanet1001ca", "aanet"+tulevaid+"ca");
    uusigallup = uusigallup.replace("aanet1001da", "aanet"+tulevaid+"da");
    uusigallup = uusigallup.replace("aanet1001d", "aanet"+tulevaid+"d");
    uusigallup = uusigallup.replace("aanet1001aaa", "aanet"+tulevaid+"aaa");
    uusigallup = uusigallup.replace("aanet1001baa", "aanet"+tulevaid+"baa");
    uusigallup = uusigallup.replace("aanet1001caa", "aanet"+tulevaid+"caa");
    uusigallup = uusigallup.replace("aanet1001daa", "aanet"+tulevaid+"daa");
    uusigallup = uusigallup.replace("kyssari1001", "kyssari"+tulevaid);
    uusigallup = uusigallup.replace("aanet1001aa", "aanet"+tulevaid+"aa");
    uusigallup = uusigallup.replace("aanet1001ba", "aanet"+tulevaid+"ba");
    uusigallup = uusigallup.replace("aanet1001ca", "aanet"+tulevaid+"ca");
    uusigallup = uusigallup.replace("aanet1001da", "aanet"+tulevaid+"da");
    tyhjaDiv.setAttribute("name", vaihtoehdot);
    tyhjaDiv.setAttribute("class", "gallup");
    tyhjaDiv.setAttribute("id", "gallup"+tulevaid);
    tyhjaDiv.innerHTML = uusigallup;
    document.getElementById("sisalto").insertBefore(tyhjaDiv, document.getElementById("sisalto").firstChild);
    viimeisinid=tulevaid; 

// tässä määritellään kuinka monta vastausvaihtoehtoa tulee näkyviin riippuen täytetyistä kohdista
    if (vaihtoehdot==2) {
        document.getElementById("aanet"+tulevaid+"c").style.display = "none";
        document.getElementById("aanet"+tulevaid+"ca").style.display = "none";
        document.getElementById("aanet"+tulevaid+"caa").style.display = "none";
        document.getElementById("aanet"+tulevaid+"d").style.display = "none";
        document.getElementById("aanet"+tulevaid+"da").style.display = "none";
        document.getElementById("aanet"+tulevaid+"daa").style.display = "none";
    }

    if (vaihtoehdot==3) {
        document.getElementById("aanet"+tulevaid+"d").style.display = "none";
        document.getElementById("aanet"+tulevaid+"da").style.display = "none";
        document.getElementById("aanet"+tulevaid+"daa").style.display = "none";
    }
}

//muokataan tulevan gallupin sisällöt syötteen mukaisiksi ja samalla nollataan äänestyslaskurit
function muokkaaSisalto() {
        document.getElementById("aanet"+tulevaid+"aa").innerHTML = 0;
        document.getElementById("aanet"+tulevaid+"ba").innerHTML = 0;
        document.getElementById("aanet"+tulevaid+"ca").innerHTML = 0;
        document.getElementById("aanet"+tulevaid+"da").innerHTML = 0;
        document.getElementById("aanet"+tulevaid+"aaa").innerHTML = 0;
        document.getElementById("aanet"+tulevaid+"baa").innerHTML = 0;
        document.getElementById("aanet"+tulevaid+"caa").innerHTML = 0;
        document.getElementById("aanet"+tulevaid+"daa").innerHTML = 0;
        document.getElementById("kyssari"+tulevaid).innerHTML = document.getElementById("kysymys").value;
        document.getElementById("ehto"+tulevaid+"a").innerHTML = document.getElementById("vaihtoehto1").value;
        document.getElementById("ehto"+tulevaid+"b").innerHTML = document.getElementById("vaihtoehto2").value;
        document.getElementById("ehto"+tulevaid+"c").innerHTML = document.getElementById("vaihtoehto3").value;
        document.getElementById("ehto"+tulevaid+"d").innerHTML = document.getElementById("vaihtoehto4").value;
        document.getElementById("ehto"+tulevaid+"aa").innerHTML = document.getElementById("vaihtoehto1").value;
        document.getElementById("ehto"+tulevaid+"ba").innerHTML = document.getElementById("vaihtoehto2").value;
        document.getElementById("ehto"+tulevaid+"ca").innerHTML = document.getElementById("vaihtoehto3").value;
        document.getElementById("ehto"+tulevaid+"da").innerHTML = document.getElementById("vaihtoehto4").value;  
    }

// kirajutumis funktio, yksinkertainen pelkän nimen tunnistava, tuodaan ylläptäjän työkalut näkyviin kirjautuessa
function kirjaudu() {
    if (document.getElementById("kayttaja").value  == "admin") {
        document.getElementById("kirjautuminen").style.display= "none";
        document.getElementById("kirjautunut").style.display = "block";
      }
    else {
        alert("Väärä käyttäjänimi, jatkat käyttäjänä!");
    }
}

// suljetaan tuo luonti joko nappulasta tai sitten tuolta luomisen kautta
// tuodaan samalla esiin gallupit ja poistetaan malligallup joka on pohjana noille uusille näkyvistä.
function suljeLuonti() {
    for (i = 0; i < piilotaGallupit.length; i++) {
        piilotaGallupit[i].style.display = "block";
    }
document.getElementById("gallup1001").style.display = "none";  
document.getElementById("kyselynluonti").style.display = "none";
}

// tuodaan uuden gallupin luonti esiin, samassa lähtee galluppien poistot näkyvistä jos ne painettu näkyviin
// lisäksi piilotellaan gallupit taustalta näkyvistä visuaalisuuden vuoksi
function luoAanestys() {
    for (i = 0; i < poistaElementit.length; i++) {
        poistaElementit[i].style.display = "none";
      }
    for (i = 0; i < piilotaGallupit.length; i++) {
        piilotaGallupit[i].style.display = "none";
    }  
      document.getElementById("kyselynluonti").style.display = "block";
      document.getElementById("kysymys").focus();
}

// ulos kirjautuminen, näkymä samaksi kuin peruskäyttäjille eli poistellaan ylläpitäjän näkymät
function kirjauduUlos() {
        document.getElementById("kirjautuminen").style.display= "block";
        document.getElementById("kirjautunut").style.display = "none";
        document.getElementById("gallup1001").style.display = "none";
        for (var i = 0; i < poistaElementit.length; i++){
            poistaElementit[i].style.display = "none";
        }
}

//Tuodaan galluppeihin näkyviin poistamis vaihtoehto, tosin piilotetaan se malligallupista
function poistaAanestyksia() {
    if (poistaElementit.length > 1) {
    for (var i = 0; i < poistaElementit.length; i++){
            poistaElementit[i].style.display = "block";
        }
        document.getElementById("poista1001").style.display ="none";
    } else {
        alert("Poistaaksesi äänestyksiä sinun tulee ensiksi luoda sellainen.")
    }
}
// Gallupin laajennusfunktio, tuo esiin äänestys tilanteen ja nuo äänestysnamikat.
function sulje(x) {
    var suljettavaId = String(x);
    suljettavaId = suljettavaId.slice(5);
    console.log(suljettavaId);
    document.getElementById("piilota"+suljettavaId).style.display="none";
    document.getElementById("avaa"+suljettavaId).style.display="block";
    document.getElementById("sulje"+suljettavaId).style.display="none";
   }
// Gallupin piilotusfunktio, piilottaa äänestys tilanteen ja nuo äänestysnamikat.
function avaa(x) {
    var avattavaId = String(x);
    avattavaId = avattavaId.slice(4);
    console.log(avattavaId);
    document.getElementById("piilota"+avattavaId).style.display="block";
    document.getElementById("avaa"+avattavaId).style.display="none";
    document.getElementById("sulje"+avattavaId).style.display="block";
   }
// Määritetään minkä gallupin sisältä poisto tapahtuu ja sen mukaan sitten poistetaan se
// Piilotetaan lopuksi poistamisvaihtoehdot näkyvistä
function poista(x) {
 poistettavaId = String(x);
 poistettavaId = poistettavaId.slice(6);
 document.getElementById("gallup"+poistettavaId).remove();
 for (i = 0; i < poistaElementit.length; i++) {
    poistaElementit[i].style.display = "none";
  }
}


//Lisätään ääni Äänestä napin painalluksesta ja näytetään se
function lisaaAani(x) {
    muokattava = String(x);
    elementinId = String(x);
    elementinId = elementinId.slice(5, -1);
    nykyiset = parseInt(document.getElementById(x+"a").innerHTML);
    document.getElementById(muokattava+"a").innerHTML = nykyiset+1; 
}

// Tässä lasketaan prosentuaaliset osuudet Äänestä napin painalluksesta ja näytetään ne
function lisaaProsentit(x) {
    
    elementinId = String(x);
    elementinId = elementinId.slice(5, -1);
    y = document.getElementById("gallup"+elementinId).getAttribute("name");
    
    var a;
    var b;
    var c;
    var d;
    var yhteensa;

    if (y == 2) {
        a = parseInt(document.getElementById("aanet"+elementinId+"aa").innerHTML);
        b = parseInt(document.getElementById("aanet"+elementinId+"ba").innerHTML);
       yhteensa = a+b;
       document.getElementById("aanet"+elementinId+"aaa").innerHTML = ((a/yhteensa)*100).toFixed(2) +"%";
       document.getElementById("aanet"+elementinId+"baa").innerHTML = ((b/yhteensa)*100).toFixed(2) +"%";
    }
    if (y == 3) {
        a = parseInt(document.getElementById("aanet"+elementinId+"aa").innerHTML);
        b = parseInt(document.getElementById("aanet"+elementinId+"ba").innerHTML);
        c = parseInt(document.getElementById("aanet"+elementinId+"ca").innerHTML);
        yhteensa = a+b+c;
        document.getElementById("aanet"+elementinId+"aaa").innerHTML =  ((a/yhteensa)*100).toFixed(2) +"%";
        document.getElementById("aanet"+elementinId+"baa").innerHTML =  ((b/yhteensa)*100).toFixed(2) +"%";
        document.getElementById("aanet"+elementinId+"caa").innerHTML =  ((c/yhteensa)*100).toFixed(2) +"%";
     }
     if (y == 4) {
        a = parseInt(document.getElementById("aanet"+elementinId+"aa").innerHTML);
        b = parseInt(document.getElementById("aanet"+elementinId+"ba").innerHTML);
        c = parseInt(document.getElementById("aanet"+elementinId+"ca").innerHTML);
        d = parseInt(document.getElementById("aanet"+elementinId+"da").innerHTML);
        yhteensa = a+b+c+d;
        document.getElementById("aanet"+elementinId+"aaa").innerHTML =  ((a/yhteensa)*100).toFixed(2) +"%";
        document.getElementById("aanet"+elementinId+"baa").innerHTML =  ((b/yhteensa)*100).toFixed(2) +"%";
        document.getElementById("aanet"+elementinId+"caa").innerHTML =  ((c/yhteensa)*100).toFixed(2) +"%";
        document.getElementById("aanet"+elementinId+"daa").innerHTML =  ((d/yhteensa)*100).toFixed(2) +"%";
     }
}


  