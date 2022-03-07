
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

let employeesArr=[
    {
    img:'.img/wayne-barnett-founder-ceo.jpg',
    name: 'Wayne Barnett',
    profession: 'Founder & CEO'
    },
    {
    img:'.img/angela-caroll-chief-editor.jpg',
    name: 'Angela Caroll',
    profession: 'Chief Editor'
    },
    {
    img:'.img/walter-gordon-office-manager.jpg',
    name: 'Walter Gordon',
    profession: 'Office Manager'
    },
    {
    img:'.img/angela-lopez-social-media-manager.jpg',
    name: 'Angela Lopez',
    profession: 'Social Media Manager'
    },
    {
    img:'.img/scott-estrada-developer.jpg',
    name: 'Scott Estrada',
    profession: 'Developer'
    },
    {
    img:'.img/barbara-ramos-graphic-designer.jpg',
    name: 'Barbara Ramos',
    profession: 'Graphic Designer'
    },
];
// testObj.name


// for (let i = 0; i < employeesArr.length; i++) {
//     let employeesArrItem = employeesArr[i];
    
//     console.log(employeesArrItem.name);
//     console.log(employeesArrItem.profession);
//     console.log(employeesArrItem.img).innerHTML;
//   }
// console.log(testObj[3].name)
// for(i=0; i<employeesArr.length; i++){
//     console.log (employeesArr[i].name)
//     console.log (employeesArr[i].profession)
//     console.log(employeesArr[i].img)
   
// }

// for(let key in testObj){
//     console.log(testObj[key]);
// }

// (employeesArr[i].name)


for(let i=0;i<6;i++){

let teamContainer = document.querySelector('.team-container');/*SELEZIONE TEAM-CONTAINER*/
let teamContainerDiv = document.createElement('div');/*DIV TEAM-CONTAINER */
let teamCardDiv = document.createElement('div');/*DIV TEAMCARD */
let cardImgDiv = document.createElement('div');/*DIV CARD IMG */

// imgJs.src = employeesArr[i].img;

// employeesArr[i].img;/* = (employeesArr[i].img).innerHTML;*/
  /*document.createElement('img'); /*IMG ELEMENT*/
// imgJs =  employeesArr[i].img/*'img/wayne-barnett-founder-ceo.jpg'*/;
let cardTextDiv = document.createElement('div');
let h3Js = document.createElement('h3');
h3Js.innerHTML = employeesArr[i].name;
let pJs = document.createElement('p');
pJs.innerHTML= employeesArr[i].profession;
let imgJs = document.createElement('img');
imgJs.innerHTML = employeesArr[i].img;
// h3Js.innerHTML= 'name';

teamContainerDiv.classList.add('team-container'); /*ADD TEAM-CONTAINER CLASS TO TEAMCONTAINERDIV */
teamCardDiv.classList.add('team-card'); /*ADD TEAM-CARD CLASS TO TEAMCARDDIV */
cardImgDiv.classList.add('card-image');/*ADD CARD-IMAGE CLASS TO CARDIMGDIV */
cardTextDiv.classList.add('card-text'); /*ADD CARD-TEXT CLASS TO CARDTEXTDIV */

// cardTextDiv.append(testObj[i].name)
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


