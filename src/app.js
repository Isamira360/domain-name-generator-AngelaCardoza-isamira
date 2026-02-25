import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here


  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon', 'camiones', 'flor','raton', 'ciudad'];
  let dom = ['.com', '.es', '.gov'];


  if(dom.includes('.es')){
    noun.forEach((vall,l)=>{

      let lastLetter= vall[vall.length-1];
      let newVal;

         if ('rnds'.includes(lastLetter)) {

        newVal=vall+ 'es';

        noun.splice(l,1,newVal);



    }

    console.log(noun);
  })
  

  pronoun.forEach((vali, i) => {
    adj.forEach((valj, j) => {
      noun.forEach((valk, k) => {
        dom.forEach((vall, l) => {
if(newVal!== vall){

  console.log(noum)
} else{
  console.log(`${vali}${valj}${valk}${vall}`)
}

          
          
        })
  })
    })
  })}


  }

