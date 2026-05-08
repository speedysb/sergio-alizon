
function sendMessage(){

  let message =
  "Quiero compartir contigo este día tan especial, cuenta con nuestra presencia. 💍";

  let phone = "13057201027";

  let url =
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");

}

/* FOOD OPTIONS */

function selectFood(food){

  let message =
  `Hola, quiero escoger ${food} como mi opción de menú 🍽️`;

  let phone = "13057201027";

  let url =
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");

}
