// Definimos las cartas con sus respectivos retos
const cards = [
    { challenge: "Habla con tu ex y dile lo que piensas de él/ella", id: 1 },
    { challenge: "Haz una imitación de alguien del grupo", id: 2 },
    { challenge: "Baila en medio de la calle", id: 3 },
    { challenge: "Llama a alguien y dile que le quieres", id: 4 },
    { challenge: "Dale un beso en la mejilla a la persona que tengas a tu izquierda", id: 5 }
  ];
  
  // Función para seleccionar una carta al azar
  function pickRandomCard() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    return cards[randomIndex];
  }
  
  // Función para mostrar el reto de la carta seleccionada y esperar la respuesta del usuario
  async function playGame() {
    const card = pickRandomCard();
    const response = await askQuestion(`¿Aceptas el reto "${card.challenge}"?`);
    // if (response.toLowerCase() === "si") {
    //   alert("¡Genial, adelante con el reto!");
    // } else {
    //   alert("¡Una lástima, intenta de nuevo!");
    // }
//     const messageContainer = document.getElementById("message-container");
//   if (response.toLowerCase() === "si") {
//     messageContainer.textContent = "¡Genial, adelante con el reto!";
//   } else {
//     messageContainer.textContent = "¡Una lástima, intenta de nuevo!";
//   }
const challengeElement = document.getElementById("challenge");
  if (response.toLowerCase() === "si") {
    challengeElement.innerHTML = `<p>Genial, adelante con el reto: "${card.challenge}"</p>`;
  } else {
    challengeElement.innerHTML = `<p>Una lástima, intenta de nuevo.</p>`;
  }
  }
  
  // Función para pedir la respuesta del usuario y esperar a que la ingrese
  function askQuestion(question) {
    return new Promise(resolve => {
      const answer = prompt(question);
      resolve(answer);
    });
  }
  
  // Ejecutamos el juego
  playGame();
  
// Agregamos el evento "click" al botón "Jugar"
const playBtn = document.getElementById("play-btn");
playBtn.addEventListener("click", playGame);