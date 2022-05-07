//Exercicio 1

function changeText(){
  let texto =  document.getElementsByTagName("p")[0];
    texto.innerText = "Daqui à dois anos me vejo trabalhando em uma empresa, como desenvolvedor web, sempre aprendendo e aprimorando minhas habilidades";
}
changeText();

//Exercicio 2

function changeColorSquare(){
   let verde = document.getElementsByClassName("main-content");
       verde[0].style.backgroundColor = "rgb(76,164,109)";
}
changeColorSquare();

//Exercico 3

function changeColorSquare2(){
    let branco = document.getElementsByClassName("center-content");
        branco[0].style.backgroundColor = "white";
}
changeColorSquare2();

//Exercicio 4

function rightText(){
    let corrige = document.getElementsByTagName("h1")[0];
        corrige.innerText = "Exercício 5.1 - JavaScript";
}
rightText();

//Exercicio 5

function upperText(){
    let maiusculo = document.getElementsByTagName("p")[0];
        maiusculo.innerHTML = maiusculo.innerHTML.toUpperCase();
}
upperText();

//Exercico 6

function showTags(){
    let exibir = document.getElementsByTagName("p");
    for(index = 0; index < exibir.length; index += 1){
        console.log(exibir[index].innerText);
    }
}
showTags();
