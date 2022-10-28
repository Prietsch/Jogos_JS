//SODUKU VERSÃO PRÉ-DETERMINADA;
//LOOP
    //TABULEIRO:
    var board = [
        ['3 ' , ' 4 ', ' 1 ' ,'◼'],
        ['◼', ' 2 ' ,'◼','◼'],
        ['◼' ,'◼' , ' 2 ' ,'◼'],
        ['◼' , ' 1 ' , ' 4 ' , ' 3 '],
    ]

do{
    //VARIÁVEIS:
    var contador_linha = 0, contador_coluna = 0, contador_quadrante = 0;


    //VERIFICAÇÃO DO TABULEIRO;
    //alert(board.join('\n')) 


    //INSERIR LINHA E POSIÇÃO
    var jogada = prompt("Insira a linha - de 0 à 3 -, a coluna - de 0 à 3 - e o número - de 1 à 4 -, respectivamente, separados por um espaço:\n\n "+ board.join('\n') + "\n\n");

    //VERIFICAÇÃO ARMAZENAMENTO NA ARRAY
    //console.log(jogada)

    //VERIFICAÇÃO SE A STRING É UM NÚMERO
    while(jogada[4] != '1' && jogada[4] != '2' && jogada[4] != '3' && jogada[4] != '4' ||jogada[0] != '0' && jogada[0] != '1' && jogada[0] != '2' && jogada[0] != '3' || jogada[2] != '0' && jogada[2] != '1' && jogada[2] != '2' && jogada[2] != '3' )
    jogada = prompt("Insira a linha - de 0 à 3 -, a coluna - de 0 à 3 - e o número - de 1 à 4 -, respectivamente, separados por um espaço:\n\n "+ board.join('\n') + "\n\n");
    
    //PEGAR OS NÚMEROS DA LINHA, COLUNA E O NÚMERO
    var linha = Number(jogada[0]);
    var coluna = Number(jogada[2]);
    var numero = Number(jogada[4]);

    //VERIFICAÇÃO COLETA DE DADOS
    //console.log(linha, coluna, numero)

    //VERIFICAÇÃO LINHA
    for(let i = 0; i< 4; i++){
        if(board[linha][i] != numero){
            contador_linha++;
        }
    }

    //VERIFICAÇÃO COLUNA
    for(let i = coluna; i<coluna+1; i++){
        for(let j = 0; j<4; j++){
            if(board[j][i] != numero){
                contador_coluna++;
            }
        }
    }

    //VERIFICAÇÃO QUADRANTE
    if(linha == 1 || linha == 3){
        if(coluna == 0 || coluna == 2){
            for(let i = linha - 1; i<=linha; i++){
                for(let j = coluna; j <= coluna + 1; j++ ){
                    if(board[i][j] != numero){
                        contador_quadrante++;
                    }
                }
            }
        }else if(coluna == 1 || coluna == 3){
            for(let i = linha - 1; i<=linha; i++){
                for(let j = coluna - 1; j <= coluna; j++ ){
                    if(board[i][j] != numero){
                        contador_quadrante++;
                    }
                }
            }
        }
    }else if(linha == 0 || linha == 2){
        if(coluna == 0 || coluna == 2){
            for(let i = linha; i<=linha +1; i++){
                for(let j = coluna; j <= coluna + 1; j++ ){
                    if(board[i][j] != numero){
                        contador_quadrante++;
                    }
                }
            }
        }else if(coluna == 1 || coluna == 3){
            for(let i = linha; i<=linha+1; i++){
                for(let j = coluna - 1; j <= coluna; j++ ){
                    if(board[i][j] != numero){
                        contador_quadrante++;
                    }
                }
            }
        }
    }

    //VERIFICAÇÃO FINAL
    if(contador_coluna == 4 && contador_linha == 4 && contador_quadrante == 4){
        board[linha][coluna] = " " + numero;
        alert("Posição correta!\n" + board.join("\n"))
    }else{
        alert("Número na posição errada, tente novamente!")
    }
}while(board[0][0] === '◼' || board[0][1] ==='◼' || board[0][2] === '◼' || board[0][3] === '◼' || board[1][0] === '◼' || board[1][1] === '◼' || board[1][2] === '◼' || board[1][3] === '◼' || board[2][0] === '◼'  || board[2][1] === '◼' || board[2][2] === '◼' || board[2][3] === '◼' || board[3][0] === '◼' || board[3][1] === '◼' || board[3][2] === '◼' || board[3][3] === '◼')

alert("Parabéns, você ganhou!!")
