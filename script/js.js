
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

// let teamCardJs = document.querySelector('.team-card');
let teamContainerJs = document.querySelector('.team-container');
let teamCardJs = document.createElement('div');
let cardImgJs = document.createElement ('div');
let imgJs = document.createElement('img')
imgJs.src ='https://picsum.photos/400/429/';

// let  varTest = 
// teamCardJs = varTest;
teamContainerJs.append(imgJs);




// let 

// teamCardJs= 'ciao';
// teamCardJs.innerHTML = varTest;

/*
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
*/


