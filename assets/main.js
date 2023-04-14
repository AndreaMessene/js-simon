// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.

// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



let numeriRandom = [

]

for (i = 0; i < 5; i++) {
    numeriRandom.push(Math.floor(Math.random() * 100) + 1);
}
console.log(numeriRandom)

document.querySelector('body').innerHTML = `<div> ${numeriRandom} </div>`

setTimeout(scadenza, 3000);

function scadenza() {
    document.querySelector('body').innerHTML = "";

    setTimeout(domandaPrompt, 1000)
    function domandaPrompt() {
        for (k = 0; k < 5; k++) {

            let domanda = prompt('ti ricordi i numeri?')
            console.log(domanda)

            numeriInseriti.push(domanda)

        }


        for (a = 0; a < numeriRandom.length; a++) {
            if(numeriRandom.includes( parseInt(numeriInseriti[a]) )){

                numeriIndovinati.push(numeriInseriti[a])

            }
            
        }
        console.log(numeriIndovinati)
        document.querySelector('body').innerHTML = ` hai indovinato: ${numeriIndovinati.length} numeri. I numeri indovinati sono ${numeriIndovinati}`
    }
}58586482

let numeriInseriti = []
console.log(numeriInseriti)

let numeriIndovinati = []













