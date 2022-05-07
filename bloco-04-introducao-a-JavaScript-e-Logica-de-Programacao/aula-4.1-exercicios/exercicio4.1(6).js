let pecaXadrez = "Peao";
let result = pecaXadrez.toLowerCase();

switch(result) {
    case "bispo":
        console.log("O bispo move-se a qualquer casa ao longo de uma diagonal que ocupa. Ao executar seus lances, a dama, a torre ou o bispo não podem 'pular' sobre nenhuma peça em seu caminho.");
        break;
    case "rei":
         console.log("move-se para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance.");
         break;
    case "dama":
        console.log("é a peça mais poderosa do jogo, uma vez que seu movimento combina o da torre e o do bispo, ou seja, pode mover-se pelas colunas, fileiras e diagonal de outra cor."); 
    case "peao":
        console.log("O peão avança a uma casa ocupada por uma peça adversária, que esteja diagonalmente à sua frente, numa coluna adjacente, capturando aquela peça.");
        break; 
    default:
        console.log("Error");       

}

