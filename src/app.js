import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon', 'camion', 'flor', 'raton', 'ciudad',];
  let dom = ['.com', '.es', '.gov'];

  pronoun.forEach((vali) => {
    adj.forEach((valj) => {
      noun.forEach((valk) => {
        dom.forEach((vall) => {

          let lastLetter = valk[valk.length - 1];

          if (vall === '.es' && !'aeiou'.includes(lastLetter)) {
            console.log(valk + 'es');
            return;
          }

          console.log(`${vali}${valj}${valk}${vall}`);
        })
      })
    })
  })
}