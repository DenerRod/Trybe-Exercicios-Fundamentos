//Operador AND - &&

const currentHour = 15;
let message = "";

if (currentHour >= 22) {
    console.log(mesage = "Não deveríamos comer nada, é hora de dormir");
}

else if (currentHour >= 18 && currentHour < 22) {
    console.log(mesage = "Rango da noite, vamos jantar :D");
}

else if (currentHour >= 14 && currentHour < 18) {
    console.log(mesage = "Vamos fazer um bolo pro café da tarde?");
}

else if (currentHour > 11 && currentHour < 14) {
    console.log(mesage = "Hora do almoço!!!");
}


else if (currentHour > 4 && currentHour < 11 ) {
    console.log(mesage = "Hmmm, cheiro de café recém passado");
}

else {
    message = null
}



console.log(message);