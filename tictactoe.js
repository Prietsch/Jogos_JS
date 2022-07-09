var board = [], player1, player2, jogada1_X = [], jogada1_o = [], win = 'no', new_game = 'sim', again;
do{
    board = [
        ["- ", " - ", " -"],
        ["- ", " - ", " -"],
        ["- ", " - ", " -"],
    ]
    player1 = prompt("Escolha seu time: X ou O?")
    if(player1 == 'X' || player1 == 'x'){
        player1 = 'X'
        player2 = 'O'
    }else if(player1 == 'O' || player1 == 'o'){
        player1 = 'O'
        player2 = 'X'
    }
    alert(`Jogador 1 = ${player1}, e Jogador 2 = ${player2}`)    
    while(win == 'no'){
        if(player1 == 'X'){
            //RODADA 1 JOGADOR 1
            alert('Rodada Jogador 1')
            jogada1_X = prompt("Escolha onde deseja jogar: \n1 2 3\n4 5 6\n7 8 9")
            if(jogada1_X === '1'){
                board[0][0] = 'X'
            }else if(jogada1_X === '2'){
                board[0][1] = 'X'
            }else if(jogada1_X === '3'){
                board[0][2] = 'X'
            }else if(jogada1_X === '4'){
                board[1][0] = 'X'
            }else if(jogada1_X === '5'){
                board[1][1] = 'X'
            }else if(jogada1_X === '6'){
                board[1][2]= 'X'
            }else if(jogada1_X === '7'){
                board[2][0]= 'X'
            }else if(jogada1_X === '8'){
                board[2][1] = 'X'
            }else if(jogada1_X === '9'){
                board[2][2] = 'X'
            }
            alert(board.join('\n'))
            //RODADA 1 JOGADOR 2
            alert('Rodada Jogador 2')
            jogada1_o = prompt("Escolha onde deseja jogar: \n1 2 3\n4 5 6\n7 8 9")
            while(jogada1_o === jogada1_X){
                alert("Insira uma outra posição!")
                jogada1_o = prompt("Escolha onde deseja jogar: \n1 2 3\n4 5 6\n7 8 9")
            }
            if(jogada1_o === '1'){
                board[0][0] = 'O'
            }else if(jogada1_o === '2'){
                board[0][1] = 'O'
            }else if(jogada1_o === '3'){
                board[0][2] = 'O'
            }else if(jogada1_o === '4'){
                board[1][0] = 'O'
            }else if(jogada1_o === '5'){
                board[1][1] = 'O'
            }else if(jogada1_o === '6'){
                board[1][2]= 'O'
            }else if(jogada1_o === '7'){
                board[2][0]= 'O'
            }else if(jogada1_o === '8'){
                board[2][1] = 'O'
            }else if(jogada1_o === '9'){
                board[2][2] = 'O'
            }
            alert(board.join('\n'))
            //RODADA 2 JOGADOR 1
            alert('Rodada Jogador 1')
            let jogada2_X = prompt("Escolha onde deseja jogar: \n1 2 3\n4 5 6\n7 8 9")
            while(jogada2_X === jogada1_o){
                alert("Insira uma outra posição!")
                jogada2_X = prompt("Escolha onde deseja jogar: \n1 2 3\n4 5 6\n7 8 9")
            }
            if(jogada2_X === '1'){
                board[0][0] = 'X'
            }else if(jogada2_X === '2'){
                board[0][1] = 'X'
            }else if(jogada2_X === '3'){
                board[0][2] = 'X'
            }else if(jogada2_X === '4'){
                board[1][0] = 'X'
            }else if(jogada2_X === '5'){
                board[1][1] = 'X'
            }else if(jogada2_X === '6'){
                board[1][2] = 'X'
            }else if(jogada2_X === '7'){
                board[2][0] = 'X'
            }else if(jogada2_X === '8'){
                board[2][1] = 'X'
            }else if(jogada2_X === '9'){
                board[2][2] = 'X'
            }
            alert(board.join('\n'))
            //RODADA 2 JOGADOR 2
            alert('Rodada Jogador 2')
            let jogada2_o = prompt("Escolha onde deseja jogar: \n1 2 3\n4 5 6\n7 8 9")
            while(jogada2_o === jogada2_X){
                alert("Insira uma outra posição!")
                jogada2_o = prompt("Escolha onde deseja jogar: \n1 2 3\n4 5 6\n7 8 9")
            }
            if(jogada2_o === '1'){
                board[0][0] = 'O'
            }else if(jogada2_o === '2'){
                board[0][1] = 'O'
            }else if(jogada2_o === '3'){
                board[0][2] = 'O'
            }else if(jogada2_o === '4'){
                board[1][0] = 'O'
            }else if(jogada2_o === '5'){
                board[1][1] = 'O'
            }else if(jogada2_o === '6'){
                board[1][2]= 'O'
            }else if(jogada2_o === '7'){
                board[2][0]= 'O'
            }else if(jogada2_o === '8'){
                board[2][1] = 'O'
            }else if(jogada2_o === '9'){
                board[2][2] = 'O'
            }
            alert(board.join('\n'))
            //RODADA 3 JOGADOR 1
            alert('Rodada Jogador 1')
            let jogada3_X = prompt("Escolha onde deseja jogar: \n1 2 3\n4 5 6\n7 8 9")
            while(jogada3_X === jogada2_o){
                alert("Insira uma outra posição!")
                jogada3_X = prompt("Escolha onde deseja jogar: \n1 2 3\n4 5 6\n7 8 9")
            }
            if(jogada3_X === '1'){
                board[0][0] = 'X'
            }else if(jogada3_X === '2'){
                board[0][1] = 'X'
            }else if(jogada3_X === '3'){
                board[0][2] = 'X'
            }else if(jogada3_X === '4'){
                board[1][0] = 'X'
            }else if(jogada3_X === '5'){
                board[1][1] = 'X'
            }else if(jogada3_X === '6'){
                board[1][2] = 'X'
            }else if(jogada3_X === '7'){
                board[2][0] = 'X'
            }else if(jogada3_X === '8'){
                board[2][1] = 'X'
            }else if(jogada3_X === '9'){
                board[2][2] = 'X'
            }
            if(board[0] === ['X', 'X', 'X']|| board[1] === ['X', 'X', 'X']|| board[2] === ['X', 'X', 'X']){
                alert('Jogador 1 venceu!')
                break
            }else if(board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X'){
                alert('Jogador 1 venceu!')
                break
            }else if(board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X'){
                alert('Jogador 1 venceu!')
                break
            }else if(board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X'){
                alert('Jogador 1 venceu!')
                break
            }else if(board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X'){
                alert('Jogador 1 venceu!')
                break
            }else if(board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X'){
                alert('Jogador 1 venceu!')
                break
            }else{
                alert(board.join('\n'))
            }
            //RODADA 3 JOGADOR 2
            alert('Rodada Jogador 2')
            let jogada3_o = prompt("Escolha onde deseja jogar: \n1 2 3\n4 5 6\n7 8 9")
            while(jogada3_o === jogada3_X){
                alert("Insira uma outra posição!")
                jogada3_o = prompt("Escolha onde deseja jogar: \n1 2 3\n4 5 6\n7 8 9")
            }
            if(jogada3_o === '1'){
                board[0][0] = 'O'
            }else if(jogada3_o === '2'){
                board[0][1] = 'O'
            }else if(jogada3_o === '3'){
                board[0][2] = 'O'
            }else if(jogada3_o === '4'){
                board[1][0] = 'O'
            }else if(jogada3_o === '5'){
                board[1][1] = 'O'
            }else if(jogada3_o === '6'){
                board[1][2]= 'O'
            }else if(jogada3_o === '7'){
                board[2][0]= 'O'
            }else if(jogada3_o === '8'){
                board[2][1] = 'O'
            }else if(jogada3_o === '9'){
                board[2][2] = 'O'
            }
            if(board[0] === ['O', 'O', 'O']|| board[1] ===  ['O', 'O', 'O']|| board[2] === ['O', 'O', 'O']){
                alert('Jogador 2 venceu!')
                break
            }else if(board[0][0] === 'O' && board[1][0] === 'O' && board[2][0] === 'O'){
                alert('Jogador 2 venceu!')
                break
            }else if(board[0][1] === 'O' && board[1][1] === 'O' && board[2][1] === 'O'){
                alert('Jogador 2 venceu!')
                break
            }else if(board[0][2] === 'O' && board[1][2] === 'X' && board[2][2] === 'O'){
                alert('Jogador 2 venceu!')
                break
            }else if(board[0][0] === 'O' && board[1][1] === 'X' && board[2][2] === 'O'){
                alert('Jogador 2 venceu!')
                break
            }else if(board[0][2] === 'O' && board[1][1] === 'X' && board[2][0] === 'O'){
                alert('Jogador 2 venceu!')
                break
            }else{
                alert(board.join('\n'))
            }
            //RODADA 4 JOGADOR 1
            alert('Rodada Jogador 1')
            let jogada4_X = prompt("Escolha onde deseja jogar: \n1 2 3\n4 5 6\n7 8 9")
            while(jogada4_X === jogada3_o){
                alert("Insira uma outra posição!")
                jogada4_X = prompt("Escolha onde deseja jogar: \n1 2 3\n4 5 6\n7 8 9")
            }
            if(jogada4_X === '1'){
                board[0][0] = 'X'
            }else if(jogada4_X === '2'){
                board[0][1] = 'X'
            }else if(jogada4_X === '3'){
                board[0][2] = 'X'
            }else if(jogada4_X === '4'){
                board[1][0] = 'X'
            }else if(jogada4_X === '5'){
                board[1][1] = 'X'
            }else if(jogada4_X === '6'){
                board[1][2] = 'X'
            }else if(jogada4_X === '7'){
                board[2][0] = 'X'
            }else if(jogada4_X === '8'){
                board[2][1] = 'X'
            }else if(jogada4_X === '9'){
                board[2][2] = 'X'
            }
            if(board[0] === ['X', 'X', 'X']|| board[1] ===['X', 'X', 'X']|| board[2] === ['X', 'X', 'X']){
                alert('Jogador 1 venceu!')
                break
            }else if(board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X'){
                alert('Jogador 1 venceu!')
                break
            }else if(board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X'){
                alert('Jogador 1 venceu!')
                break
            }else if(board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X'){
                alert('Jogador 1 venceu!')
                break
            }else if(board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X'){
                alert('Jogador 1 venceu!')
                break
            }else if(board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X'){
                alert('Jogador 1 venceu!')
                break
            }else{
                alert(board.join('\n'))
            }
            //RODADA 4 JOGADOR 2
            alert('Rodada Jogador 2')
            let jogada4_o = prompt("Escolha onde deseja jogar: \n1 2 3\n4 5 6\n7 8 9")
            while(jogada4_o === jogada4_X){
                alert("Insira uma outra posição!")
                jogada4_o = prompt("Escolha onde deseja jogar: \n1 2 3\n4 5 6\n7 8 9")
            }
            if(jogada4_o === '1'){
                board[0][0] = 'O'
            }else if(jogada4_o === '2'){
                board[0][1] = 'O'
            }else if(jogada4_o === '3'){
                board[0][2] = 'O'
            }else if(jogada4_o === '4'){
                board[1][0] = 'O'
            }else if(jogada4_o === '5'){
                board[1][1] = 'O'
            }else if(jogada4_o === '6'){
                board[1][2]= 'O'
            }else if(jogada4_o === '7'){
                board[2][0]= 'O'
            }else if(jogada4_o === '8'){
                board[2][1] = 'O'
            }else if(jogada4_o === '9'){
                board[2][2] = 'O'
            }
            if(board[0] === ['O', 'O', 'O']|| board[1] ===  ['O', 'O', 'O']|| board[2] ===  ['O', 'O', 'O']){
                alert('Jogador 2 venceu!')
                break
            }else if(board[0][0] === 'O' && board[1][0] === 'O' && board[2][0] === 'O'){
                alert('Jogador 2 venceu!')
                break
            }else if(board[0][1] === 'O' && board[1][1] === 'O' && board[2][1] === 'O'){
                alert('Jogador 2 venceu!')
                break
            }else if(board[0][2] === 'O' && board[1][2] === 'X' && board[2][2] === 'O'){
                alert('Jogador 2 venceu!')
                break
            }else if(board[0][0] === 'O' && board[1][1] === 'X' && board[2][2] === 'O'){
                alert('Jogador 2 venceu!')
                break
            }else if(board[0][2] === 'O' && board[1][1] === 'X' && board[2][0] === 'O'){
                alert('Jogador 2 venceu!')
                break
            }else{
                alert(board.join('\n'))
            }
            //RODADA 5 JOGADOR 1 -- rodada final
            alert('Rodada Jogador 1')
            let jogada5_X = prompt("Escolha onde deseja jogar: \n1 2 3\n4 5 6\n7 8 9")
            while(jogada5_X === jogada4_o){
                alert("Insira uma outra posição!")
                jogada5_X = prompt("Escolha onde deseja jogar: \n1 2 3\n4 5 6\n7 8 9")
            }
            if(jogada5_X === '1'){
                board[0][0] = 'X'
            }else if(jogada5_X === '2'){
                board[0][1] = 'X'
            }else if(jogada5_X === '3'){
                board[0][2] = 'X'
            }else if(jogada5_X === '4'){
                board[1][0] = 'X'
            }else if(jogada5_X === '5'){
                board[1][1] = 'X'
            }else if(jogada5_X === '6'){
                board[1][2] = 'X'
            }else if(jogada5_X === '7'){
                board[2][0] = 'X'
            }else if(jogada5_X === '8'){
                board[2][1] = 'X'
            }else if(jogada5_X === '9'){
                board[2][2] = 'X'
            }
            if(board[0] === ['X', 'X', 'X']|| board[1] === ['X', 'X', 'X']|| board[2] === ['X', 'X', 'X']){
                alert('Jogador 1 venceu!')
                break
            }else if(board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X'){
                alert('Jogador 1 venceu!')
                break
            }else if(board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X'){
                alert('Jogador 1 venceu!')
                break
            }else if(board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X'){
                alert('Jogador 1 venceu!')
                break
            }else if(board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X'){
                alert('Jogador 1 venceu!')
                break
            }else if(board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X'){
                alert('Jogador 1 venceu!')
                break
            }else{
                alert('Deu VELHA!')
                break
            }
        }

        if(player1 == 'O'){
            //RODADA 1 JOGADOR 2
            alert('Rodada Jogador 2')
            jogada1_X = prompt("Escolha onde deseja jogar: \n1 2 3\n4 5 6\n7 8 9")
            if(jogada1_X === '1'){
                board[0][0] = 'X'
            }else if(jogada1_X === '2'){
                board[0][1] = 'X'
            }else if(jogada1_X === '3'){
                board[0][2] = 'X'
            }else if(jogada1_X === '4'){
                board[1][0] = 'X'
            }else if(jogada1_X === '5'){
                board[1][1] = 'X'
            }else if(jogada1_X === '6'){
                board[1][2]= 'X'
            }else if(jogada1_X === '7'){
                board[2][0]= 'X'
            }else if(jogada1_X === '8'){
                board[2][1] = 'X'
            }else if(jogada1_X === '9'){
                board[2][2] = 'X'
            }
            alert(board.join('\n'))
            //RODADA 2 JOGADOR 1
            alert('Rodada Jogador 1')
            jogada1_o = prompt("Escolha onde deseja jogar: \n1 2 3\n4 5 6\n7 8 9")
            while(jogada1_o === jogada1_X){
                alert("Insira uma outra posição!")
                jogada1_o = prompt("Escolha onde deseja jogar: \n1 2 3\n4 5 6\n7 8 9")
            }
            if(jogada1_o === '1'){
                board[0][0] = 'O'
            }else if(jogada1_o === '2'){
                board[0][1] = 'O'
            }else if(jogada1_o === '3'){
                board[0][2] = 'O'
            }else if(jogada1_o === '4'){
                board[1][0] = 'O'
            }else if(jogada1_o === '5'){
                board[1][1] = 'O'
            }else if(jogada1_o === '6'){
                board[1][2]= 'O'
            }else if(jogada1_o === '7'){
                board[2][0]= 'O'
            }else if(jogada1_o === '8'){
                board[2][1] = 'O'
            }else if(jogada1_o === '9'){
                board[2][2] = 'O'
            }
            alert(board.join('\n'))
            //RODADA 2 JOGADOR 2
            alert('Rodada Jogador 2')
            let jogada2_X = prompt("Escolha onde deseja jogar: \n1 2 3\n4 5 6\n7 8 9")
            while(jogada2_X === jogada1_o){
                alert("Insira uma outra posição!")
                jogada2_X = prompt("Escolha onde deseja jogar: \n1 2 3\n4 5 6\n7 8 9")
            }
            if(jogada2_X === '1'){
                board[0][0] = 'X'
            }else if(jogada2_X === '2'){
                board[0][1] = 'X'
            }else if(jogada2_X === '3'){
                board[0][2] = 'X'
            }else if(jogada2_X === '4'){
                board[1][0] = 'X'
            }else if(jogada2_X === '5'){
                board[1][1] = 'X'
            }else if(jogada2_X === '6'){
                board[1][2] = 'X'
            }else if(jogada2_X === '7'){
                board[2][0] = 'X'
            }else if(jogada2_X === '8'){
                board[2][1] = 'X'
            }else if(jogada2_X === '9'){
                board[2][2] = 'X'
            }
            alert(board.join('\n'))
            //RODADA 2 JOGADOR 1
            alert('Rodada Jogador 1')
            let jogada2_o = prompt("Escolha onde deseja jogar: \n1 2 3\n4 5 6\n7 8 9")
            while(jogada2_o === jogada2_X){
                alert("Insira uma outra posição!")
                jogada2_o = prompt("Escolha onde deseja jogar: \n1 2 3\n4 5 6\n7 8 9")
            }
            if(jogada2_o === '1'){
                board[0][0] = 'O'
            }else if(jogada2_o === '2'){
                board[0][1] = 'O'
            }else if(jogada2_o === '3'){
                board[0][2] = 'O'
            }else if(jogada2_o === '4'){
                board[1][0] = 'O'
            }else if(jogada2_o === '5'){
                board[1][1] = 'O'
            }else if(jogada2_o === '6'){
                board[1][2]= 'O'
            }else if(jogada2_o === '7'){
                board[2][0]= 'O'
            }else if(jogada2_o === '8'){
                board[2][1] = 'O'
            }else if(jogada2_o === '9'){
                board[2][2] = 'O'
            }
            alert(board.join('\n'))
            //RODADA 3 JOGADOR 2
            alert('Rodada Jogador 2')
            let jogada3_X = prompt("Escolha onde deseja jogar: \n1 2 3\n4 5 6\n7 8 9")
            while(jogada3_X === jogada2_o){
                alert("Insira uma outra posição!")
                jogada3_X = prompt("Escolha onde deseja jogar: \n1 2 3\n4 5 6\n7 8 9")
            }
            if(jogada3_X === '1'){
                board[0][0] = 'X'
            }else if(jogada3_X === '2'){
                board[0][1] = 'X'
            }else if(jogada3_X === '3'){
                board[0][2] = 'X'
            }else if(jogada3_X === '4'){
                board[1][0] = 'X'
            }else if(jogada3_X === '5'){
                board[1][1] = 'X'
            }else if(jogada3_X === '6'){
                board[1][2] = 'X'
            }else if(jogada3_X === '7'){
                board[2][0] = 'X'
            }else if(jogada3_X === '8'){
                board[2][1] = 'X'
            }else if(jogada3_X === '9'){
                board[2][2] = 'X'
            }
            if(board[0] === ['X', 'X', 'X']|| board[1] ===['X', 'X', 'X']|| board[2] === ['X', 'X', 'X']){
                alert('Jogador 2 venceu!')
                break
            }else if(board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X'){
                alert('Jogador 2 venceu!')
                break
            }else if(board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X'){
                alert('Jogador 2 venceu!')
                break
            }else if(board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X'){
                alert('Jogador 2 venceu!')
                break
            }else if(board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X'){
                alert('Jogador 2 venceu!')
                break
            }else if(board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X'){
                alert('Jogador 2 venceu!')
                break
            }else{
                alert(board.join('\n'))
            }
            //RODADA 3 JOGADOR 1
            alert('Rodada Jogador 1')
            let jogada3_o = prompt("Escolha onde deseja jogar: \n1 2 3\n4 5 6\n7 8 9")
            while(jogada3_o === jogada3_X){
                alert("Insira uma outra posição!")
                jogada3_o = prompt("Escolha onde deseja jogar: \n1 2 3\n4 5 6\n7 8 9")
            }
            if(jogada3_o === '1'){
                board[0][0] = 'O'
            }else if(jogada3_o === '2'){
                board[0][1] = 'O'
            }else if(jogada3_o === '3'){
                board[0][2] = 'O'
            }else if(jogada3_o === '4'){
                board[1][0] = 'O'
            }else if(jogada3_o === '5'){
                board[1][1] = 'O'
            }else if(jogada3_o === '6'){
                board[1][2]= 'O'
            }else if(jogada3_o === '7'){
                board[2][0]= 'O'
            }else if(jogada3_o === '8'){
                board[2][1] = 'O'
            }else if(jogada3_o === '9'){
                board[2][2] = 'O'
            }
            if(board[0] === ['O', 'O', 'O']|| board[1] ===  ['O', 'O', 'O']|| board[2] === ['O', 'O', 'O']){
                alert('Jogador 1 venceu!')
                break
            }else if(board[0][0] === 'O' && board[1][0] === 'O' && board[2][0] === 'O'){
                alert('Jogador 1 venceu!')
                break
            }else if(board[0][1] === 'O' && board[1][1] === 'O' && board[2][1] === 'O'){
                alert('Jogador 1 venceu!')
                break
            }else if(board[0][2] === 'O' && board[1][2] === 'X' && board[2][2] === 'O'){
                alert('Jogador 1 venceu!')
                break
            }else if(board[0][0] === 'O' && board[1][1] === 'X' && board[2][2] === 'O'){
                alert('Jogador 1 venceu!')
                break
            }else if(board[0][2] === 'O' && board[1][1] === 'X' && board[2][0] === 'O'){
                alert('Jogador 1 venceu!')
                break
            }else{
                alert(board.join('\n'))
            }
            //RODADA 4 JOGADOR 2
            alert('Rodada Jogador 2')
            let jogada4_X = prompt("Escolha onde deseja jogar: \n1 2 3\n4 5 6\n7 8 9")
            while(jogada4_X === jogada3_o){
                alert("Insira uma outra posição!")
                jogada4_X = prompt("Escolha onde deseja jogar: \n1 2 3\n4 5 6\n7 8 9")
            }
            if(jogada4_X === '1'){
                board[0][0] = 'X'
            }else if(jogada4_X === '2'){
                board[0][1] = 'X'
            }else if(jogada4_X === '3'){
                board[0][2] = 'X'
            }else if(jogada4_X === '4'){
                board[1][0] = 'X'
            }else if(jogada4_X === '5'){
                board[1][1] = 'X'
            }else if(jogada4_X === '6'){
                board[1][2] = 'X'
            }else if(jogada4_X === '7'){
                board[2][0] = 'X'
            }else if(jogada4_X === '8'){
                board[2][1] = 'X'
            }else if(jogada4_X === '9'){
                board[2][2] = 'X'
            }
            if(board[0] === ['X', 'X', 'X']|| board[1] ===['X', 'X', 'X']|| board[2] === ['X', 'X', 'X']){
                alert('Jogador 2 venceu!')
                break
            }else if(board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X'){
                alert('Jogador 2 venceu!')
                break
            }else if(board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X'){
                alert('Jogador 2 venceu!')
                break
            }else if(board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X'){
                alert('Jogador 2 venceu!')
                break
            }else if(board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X'){
                alert('Jogador 2 venceu!')
                break
            }else if(board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X'){
                alert('Jogador 2 venceu!')
                break
            }else{
                alert(board.join('\n'))
            }
            //RODADA 4 JOGADOR 1
            alert('Rodada Jogador 1')
            let jogada4_o = prompt("Escolha onde deseja jogar: \n1 2 3\n4 5 6\n7 8 9")
            while(jogada4_o === jogada4_X){
                alert("Insira uma outra posição!")
                jogada4_o = prompt("Escolha onde deseja jogar: \n1 2 3\n4 5 6\n7 8 9")
            }
            if(jogada4_o === '1'){
                board[0][0] = 'O'
            }else if(jogada4_o === '2'){
                board[0][1] = 'O'
            }else if(jogada4_o === '3'){
                board[0][2] = 'O'
            }else if(jogada4_o === '4'){
                board[1][0] = 'O'
            }else if(jogada4_o === '5'){
                board[1][1] = 'O'
            }else if(jogada4_o === '6'){
                board[1][2]= 'O'
            }else if(jogada4_o === '7'){
                board[2][0]= 'O'
            }else if(jogada4_o === '8'){
                board[2][1] = 'O'
            }else if(jogada4_o === '9'){
                board[2][2] = 'O'
            }
            if(board[0] === ['O', 'O', 'O']|| board[1] ===  ['O', 'O', 'O']|| board[2] === ['O', 'O', 'O']){
                alert('Jogador 1 venceu!')
                break
            }else if(board[0][0] === 'O' && board[1][0] === 'O' && board[2][0] === 'O'){
                alert('Jogador 1 venceu!')
                break
            }else if(board[0][1] === 'O' && board[1][1] === 'O' && board[2][1] === 'O'){
                alert('Jogador 1 venceu!')
                break
            }else if(board[0][2] === 'O' && board[1][2] === 'X' && board[2][2] === 'O'){
                alert('Jogador 1 venceu!')
                break
            }else if(board[0][0] === 'O' && board[1][1] === 'X' && board[2][2] === 'O'){
                alert('Jogador 1 venceu!')
                break
            }else if(board[0][2] === 'O' && board[1][1] === 'X' && board[2][0] === 'O'){
                alert('Jogador 1 venceu!')
                break
            }else{
                alert(board.join('\n'))
            }
            //RODADA 5 JOGADOR 2 -- rodada final
            alert('Rodada Jogador 2')
            let jogada5_X = prompt("Escolha onde deseja jogar: \n1 2 3\n4 5 6\n7 8 9")
            while(jogada5_X === jogada4_o){
                alert("Insira uma outra posição!")
                jogada5_X = prompt("Escolha onde deseja jogar: \n1 2 3\n4 5 6\n7 8 9")
            }
            if(jogada5_X === '1'){
                board[0][0] = 'X'
            }else if(jogada5_X === '2'){
                board[0][1] = 'X'
            }else if(jogada5_X === '3'){
                board[0][2] = 'X'
            }else if(jogada5_X === '4'){
                board[1][0] = 'X'
            }else if(jogada5_X === '5'){
                board[1][1] = 'X'
            }else if(jogada5_X === '6'){
                board[1][2] = 'X'
            }else if(jogada5_X === '7'){
                board[2][0] = 'X'
            }else if(jogada5_X === '8'){
                board[2][1] = 'X'
            }else if(jogada5_X === '9'){
                board[2][2] = 'X'
            }
            if(board[0] === ['X', 'X', 'X']|| board[1] === ['X', 'X', 'X']|| board[2] ===[ 'X', 'X', 'X']){
                alert('Jogador 2 venceu!')
                break
            }else if(board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X'){
                alert('Jogador 2 venceu!')
                break
            }else if(board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X'){
                alert('Jogador 2 venceu!')
                break
            }else if(board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X'){
                alert('Jogador 2 venceu!')
                break
            }else if(board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X'){
                alert('Jogador 2 venceu!')
                break
            }else if(board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X'){
                alert('Jogador 2 venceu!')
                break
            }else{
                alert('Deu VELHA!')
                break
            }
        }
    }
    again = prompt('Deseja jogar novamente?\nSim|Não')
    new_game = again.toLowerCase()
} while(new_game === 'sim');