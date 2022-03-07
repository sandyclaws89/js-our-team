
/*Viene fornito un layout di base. Come prima cosa nel file js definitevi un array di oggetti che rappresentano i membro del team (prendete i dati dallo screen fornito). Ogni membro deve avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Prendendo come riferimento la card di esempio presente nell'html, stampiamo dinamicamente una card per ogni membro del team.
BONUS:
Utilizziamo gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale, e viene stampata una nuova card con tutte le informazioni inserite dall'utente.
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
console.log() è nostro amico.
Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.*/


// CREARE GLI ELEMENTI COME IN ESEMPIO HTML E APPENDERLI AL DIV GIUSTO







for(let i=0;i<6;i++){

let teamContainer = document.querySelector('.team-container');/*SELEZIONE TEAM-CONTAINER*/
let teamContainerDiv = document.createElement('div');/*DIV TEAM-CONTAINER */
let teamCardDiv = document.createElement('div');/*DIV TEAMCARD */
let cardImgDiv = document.createElement('div');/*DIV CARD IMG */
let imgJs = document.createElement('img'); /*IMG ELEMENT*/
imgJs.src ='https://picsum.photos/400/429/';
let cardTextDiv = document.createElement('div');
let h3Js = document.createElement('h3');
let pJs = document.createElement('p');
pJs.innerHTML= 'profession';
h3Js.innerHTML= 'name';

teamContainerDiv.classList.add('team-container'); /*ADD TEAM-CONTAINER CLASS TO TEAMCONTAINERDIV */
teamCardDiv.classList.add('team-card'); /*ADD TEAM-CARD CLASS TO TEAMCARDDIV */
cardImgDiv.classList.add('card-image');/*ADD CARD-IMAGE CLASS TO CARDIMGDIV */
cardTextDiv.classList.add('card-text'); /*ADD CARD-TEXT CLASS TO CARDTEXTDIV */


cardTextDiv.append(h3Js);/*APPENDO L'ELEMENTO H3 AL DIV CONTENITORE CARDTEXTDIV */
cardTextDiv.append(pJs);/*APPENDO L'ELEMENTO P AL DIV CONTENITORE CARDTEXTDIV */
cardImgDiv.append(imgJs); /*APPENDO L'IMMAGINE AL DIV CONTENITORE CARDIMG */
teamCardDiv.append(cardImgDiv);/* APPENDO IL DIV CONTENITORE IMG AL DIV TEAM-CARD CONTENITORE */
teamCardDiv.append(cardTextDiv)/*APPENDO IL DIV CARDTEXT AL DIV TEAMCARD CONTENITORE */
teamContainer.append(teamCardDiv);/*APPENDO IL DIV TEAM-CARD A TEAM-CONTANIER SELEZIONATO */
}


/*
<div class="team-container">
          <!-- Inseriamo inizialmente una card statica per stilarla e vedere l'effetto finale -->

          <div class="team-card">
            <div class="card-image">
              <img
                src="img/wayne-barnett-founder-ceo.jpg"
                alt="Wayne Barnett"
              />
            </div>
            <div class="card-text">
              <h3>Wayne Barnett</h3>
              <p>Founder & CEO</p>
            </div>
          </div>
        </div>
*/


