// Code your solutions in this file
function writeCards(names, event) {
    for (i=0; i < names.length; i++) {
      const thankYouCards = [];
      thankYouCards.push(`Thank you ${names[i]} for the ${event} gift!`);
    }
  
     return thankYouCards;
  }

  function countdown(i){
      while(i >= 0){
          console.log(i);
          i--;
      }
  }