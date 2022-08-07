var again = '1';
do{
    var jogo = '', palavra = '', numero, letra = '',letra_1 = '', tabuleiro = '', vida, menos_vida;
    jogo = Number(prompt('Insira o número do nível no qual quer jogar:\n1. Fácil\n2. Médio\n3. Difícil\n4. Especialista em Harry Potter\n')); //selecionar o nível
    if(jogo === 1){
        tabuleiro = "1234"
        numero = Math.ceil(Math.random()*5) //sortear a palavra
        console.log(numero)//deixando isso aqui para testar mais fácil
        vida = 7
        menos_vida = 0
        // palavras: suma, tolo, urge, casa, crer
        if(numero === 1){ //PALAVRA 1- SUMA
            palavra = 'SUMA';  //palavra selecionada
        }
        else if(numero === 2){ //PALAVRA 2 - TOLO
            palavra = 'TOLO';  //palavra selecionada
        }
        else if(numero === 3){ //PALAVRA 3 - URGE
            palavra = 'URGE';  //palavra selecionada
        }
        else if(numero === 4){ //PALAVRA 4 - CASA
            palavra = 'CASA';  //palavra selecionada
        }
        else if(numero === 5){ //PALAVRA 5 - CRER
            palavra = 'CRER';  //palavra selecionada
        }
        while(tabuleiro != palavra){
            alert(`O jogo está assim: ${tabuleiro}`)
            letra_1 = prompt('Insira uma letra');
            letra = letra_1.toUpperCase()
            for(let i = 0; i <= palavra.length - 1; i++){
                if(palavra.charAt(i) === letra){
                    tabuleiro = tabuleiro.replace(tabuleiro.charAt(i), letra)
                }
                else{
                    menos_vida++
                }
            }
            if(menos_vida === 4){ //tirador de vidas oficial da União
                vida--
                alert(`Essa letra não tem na palavra.\nRestam ${vida} vida(s)`)
                if(vida === 6){
                    alert(' O')
                }else if(vida === 5){
                    alert(' O\n-')
                }else if(vida === 4){
                    alert(' O\n-')
                }else if(vida === 3){
                    alert(' O\n- |')
                }else if(vida === 2){
                    alert(' O\n- | -')
                }else if(vida === 1){
                    alert(' O\n- | -\n|')
                }
                menos_vida = 0
            }else{
                menos_vida = 0
            }
            if(vida === 0){ //perdeu
                alert('Você Perdeu!!\n  O\n- | -\n | |')
                alert(`A palavra era ${palavra}`)
                again = prompt('Deseja jogar novemente?\n1. Sim\n2. Não')
                break
            }
            if(tabuleiro === palavra){ //ganhou
                alert('Você Ganhou!!')
                alert(`A palavra era ${tabuleiro}`)
                again = prompt('Deseja jogar novemente?\n1. Sim\n2. Não')
            }
        }  
    }
    if(jogo === 2){
        tabuleiro = "12345"
        numero = Math.ceil(Math.random()*5) //sortear a palavra
        console.log(numero)
        vida = 7
        menos_vida = 0
        // palavras: fosse, ideia, poder, moral, desde
        if(numero === 1){      //PALAVRA 1- FOSSE
            palavra = 'FOSSE';  //palavra selecionada
        }
        else if(numero === 2){ //PALAVRA 2 - IDEIA
            palavra = 'IDEIA';  //palavra selecionada
        }
        else if(numero === 3){ //PALAVRA 3 - PODER
            palavra = 'PODER';  //palavra selecionada
        }
        else if(numero === 4){ //PALAVRA 4 - MORAL
            palavra = 'MORAL';  //palavra selecionada
        }
        else if(numero === 5){ //PALAVRA 5 - DESDE
            palavra = 'DESDE';  //palavra selecionada
        }
        while(tabuleiro != palavra){
            alert(`O jogo está assim: ${tabuleiro}`)
            letra_1 = prompt('Insira uma letra');
            letra = letra_1.toUpperCase()
            for(let i = 0; i <= palavra.length - 1; i++){
                if(palavra.charAt(i) === letra){
                    tabuleiro = tabuleiro.replace(tabuleiro.charAt(i), letra)
                }
                else{
                    menos_vida++
                }
            }
            if(menos_vida === 5){ //tirador de vidas oficial da União
                vida--
                alert(`Essa letra não tem na palavra.\nRestam ${vida} vida(s)`)
                if(vida === 6){
                    alert(' O')
                }else if(vida === 5){
                    alert(' O\n-')
                }else if(vida === 4){
                    alert(' O\n-')
                }else if(vida === 3){
                    alert(' O\n- |')
                }else if(vida === 2){
                    alert(' O\n- | -')
                }else if(vida === 1){
                    alert(' O\n- | -\n|')
                }
                menos_vida = 0
            }else{
                menos_vida = 0
            }
            if(vida === 0){ //perdeu
                alert('Você Perdeu!!\n  O\n- | -\n | |')
                alert(`A palavra era ${palavra}`)
                again = prompt('Deseja jogar novemente?\n1. Sim\n2. Não')            
            }
            if(tabuleiro === palavra){ //ganhou
                alert('Você Ganhou!!')
                alert(`A palavra era ${tabuleiro}`)
                again = prompt('Deseja jogar novemente?\n1. Sim\n2. Não')
            }
        }  
    }
    if(jogo === 3){
        tabuleiro = "123456"
        numero = Math.ceil(Math.random()*5) //sortear a palavra
        console.log(numero)
        vida = 7
        menos_vida = 0
        // palavras: abster, receio, ciente, astuto, idiota
        if(numero === 1){      //PALAVRA 1- ABSTER
            palavra = 'ABSTER';  //palavra selecionada
        }
        else if(numero === 2){ //PALAVRA 2 - RECEIO
            palavra = 'RECEIO';  //palavra selecionada
        }
        else if(numero === 3){ //PALAVRA 3 - CIENTE
            palavra = 'CIENTE';  //palavra selecionada
        }
        else if(numero === 4){ //PALAVRA 4 - ASTUTO
            palavra = 'ASTUTO';  //palavra selecionada
        }
        else if(numero === 5){ //PALAVRA 5 - IDIOTA
            palavra = 'IDIOTA';  //palavra selecionada
        }
        while(tabuleiro != palavra){
            alert(`O jogo está assim: ${tabuleiro}`)
            letra_1 = prompt('Insira uma letra');
            letra = letra_1.toUpperCase()
            for(let i = 0; i <= palavra.length - 1; i++){
                if(palavra.charAt(i) === letra){
                    tabuleiro = tabuleiro.replace(tabuleiro.charAt(i), letra)
                }
                else{
                    menos_vida++
                }
            }
            if(menos_vida === 6){ //tirador de vidas oficial da União
                vida--
                alert(`Essa letra não tem na palavra.\nRestam ${vida} vida(s)`)
                if(vida === 6){
                    alert(' O')
                }else if(vida === 5){
                    alert(' O\n-')
                }else if(vida === 4){
                    alert(' O\n-')
                }else if(vida === 3){
                    alert(' O\n- |')
                }else if(vida === 2){
                    alert(' O\n- | -')
                }else if(vida === 1){
                    alert(' O\n- | -\n|')
                }
                menos_vida = 0
            }else{
                menos_vida = 0
            }
            if(vida === 0){ //perdeu
                alert('Você Perdeu!!\n  O\n- | -\n | |')
                alert(`A palavra era ${palavra}`)
                again = prompt('Deseja jogar novemente?\n1. Sim\n2. Não') 
                break              
            }
            if(tabuleiro === palavra){ //ganhou
                alert('Você Ganhou!!')
                alert(`A palavra era ${tabuleiro}`)
                again = prompt('Deseja jogar novemente?\n1. Sim\n2. Não')
            }
        }  
    }
    if(jogo === 4){
        numero = Math.ceil(Math.random()*5) //sortear a palavra
        console.log(numero)
        vida = 7
        menos_vida = 0
        // palavras: hogwarts, scamander, malfoy, hagrid, testralio
        if(numero === 1){      //PALAVRA 1- HOGWARTS
            palavra = 'HOGWARTS';  //palavra selecionada
            tabuleiro = "12345678"
            while(tabuleiro != palavra){
                alert(`O jogo está assim: ${tabuleiro}`)
                letra_1 = prompt('Insira uma letra');
                letra = letra_1.toUpperCase()
                for(let i = 0; i <= palavra.length - 1; i++){
                    if(palavra.charAt(i) === letra){
                        tabuleiro = tabuleiro.replace(tabuleiro.charAt(i), letra)
                    }
                    else{
                        menos_vida++
                    }
                }
                if(menos_vida === 8){ //tirador de vidas oficial da União
                    vida--
                    alert(`Essa letra não tem na palavra.\nRestam ${vida} vida(s)`)
                    if(vida === 6){
                        alert(' O')
                    }else if(vida === 5){
                        alert(' O\n-')
                    }else if(vida === 4){
                        alert(' O\n-')
                    }else if(vida === 3){
                        alert(' O\n- |')
                    }else if(vida === 2){
                        alert(' O\n- | -')
                    }else if(vida === 1){
                        alert(' O\n- | -\n|')
                    }
                    menos_vida = 0
                }else{
                    menos_vida = 0
                }
                if(vida === 0){ //perdeu
                    alert('Você Perdeu!!\n  O\n- | -\n | |')
                    alert(`A palavra era ${palavra}`)
                    again = prompt('Deseja jogar novemente?\n1. Sim\n2. Não')
                    break               
                }
                if(tabuleiro === palavra){ //ganhou
                    alert('Você Ganhou!!')
                    alert(`A palavra era ${tabuleiro}`)
                    again = prompt('Deseja jogar novemente?\n1. Sim\n2. Não')
                }
            } 
        }else if(numero === 2){ //PALAVRA 2 - SCAMANDER
            palavra = 'SCAMANDER';  //palavra selecionada
            tabuleiro = "123456789"
            while(tabuleiro != palavra){
                alert(`O jogo está assim: ${tabuleiro}`)
                letra_1 = prompt('Insira uma letra');
                letra = letra_1.toUpperCase()
                for(let i = 0; i <= palavra.length - 1; i++){
                    if(palavra.charAt(i) === letra){
                        tabuleiro = tabuleiro.replace(tabuleiro.charAt(i), letra)
                    }
                    else{
                        menos_vida++
                    }
                }
                if(menos_vida === 9){ //tirador de vidas oficial da União
                    vida--
                    alert(`Essa letra não tem na palavra.\nRestam ${vida} vida(s)`)
                    if(vida === 6){
                        alert(' O')
                    }else if(vida === 5){
                        alert(' O\n-')
                    }else if(vida === 4){
                        alert(' O\n-')
                    }else if(vida === 3){
                        alert(' O\n- |')
                    }else if(vida === 2){
                        alert(' O\n- | -')
                    }else if(vida === 1){
                        alert(' O\n- | -\n|')
                    }
                    menos_vida = 0
                }else{
                    menos_vida = 0
                }
                if(vida === 0){ //perdeu
                    alert('Você Perdeu!!\n  O\n- | -\n | |')
                    alert(`A palavra era ${palavra}`)
                    again = prompt('Deseja jogar novemente?\n1. Sim\n2. Não')
                    break               
                }
                if(tabuleiro === palavra){ //ganhou
                    alert('Você Ganhou!!')
                    alert(`A palavra era ${tabuleiro}`)
                    again = prompt('Deseja jogar novemente?\n1. Sim\n2. Não')
                }
            } 
        }else if(numero === 3){ //PALAVRA 3 - MALFOY
            palavra = 'MALFOY';  //palavra selecionada
            tabuleiro = "123456"
            while(tabuleiro != palavra){
                alert(`O jogo está assim: ${tabuleiro}`)
                letra_1 = prompt('Insira uma letra');
                letra = letra_1.toUpperCase()
                for(let i = 0; i <= palavra.length - 1; i++){
                    if(palavra.charAt(i) === letra){
                        tabuleiro = tabuleiro.replace(tabuleiro.charAt(i), letra)
                    }
                    else{
                        menos_vida++
                    }
                }
                if(menos_vida === 6){ //tirador de vidas oficial da União
                    vida--
                    alert(`Essa letra não tem na palavra.\nRestam ${vida} vida(s)`)
                    if(vida === 6){
                        alert(' O')
                    }else if(vida === 5){
                        alert(' O\n-')
                    }else if(vida === 4){
                        alert(' O\n-')
                    }else if(vida === 3){
                        alert(' O\n- |')
                    }else if(vida === 2){
                        alert(' O\n- | -')
                    }else if(vida === 1){
                        alert(' O\n- | -\n|')
                    }
                    menos_vida = 0
                }else{
                    menos_vida = 0
                }
                if(vida === 0){ //perdeu
                    alert('Você Perdeu!!\n  O\n- | -\n | |')
                    alert(`A palavra era ${palavra}`)
                    again = prompt('Deseja jogar novemente?\n1. Sim\n2. Não')
                    break               
                }
                if(tabuleiro === palavra){ //ganhou
                    alert('Você Ganhou!!')
                    alert(`A palavra era ${tabuleiro}`)
                    again = prompt('Deseja jogar novemente?\n1. Sim\n2. Não')
                }
            }  
        }else if(numero === 4){ //PALAVRA 4 - HAGRID
            palavra = 'HAGRID';  //palavra selecionada
            tabuleiro = "123456"
            while(tabuleiro != palavra){
                alert(`O jogo está assim: ${tabuleiro}`)
                letra_1 = prompt('Insira uma letra');
                letra = letra_1.toUpperCase()
                for(let i = 0; i <= palavra.length - 1; i++){
                    if(palavra.charAt(i) === letra){
                        tabuleiro = tabuleiro.replace(tabuleiro.charAt(i), letra)
                    }
                    else{
                        menos_vida++
                    }
                }
                if(menos_vida === 6){ //tirador de vidas oficial da União
                    vida--
                    alert(`Essa letra não tem na palavra.\nRestam ${vida} vida(s)`)
                    if(vida === 6){
                        alert(' O')
                    }else if(vida === 5){
                        alert(' O\n-')
                    }else if(vida === 4){
                        alert(' O\n-')
                    }else if(vida === 3){
                        alert(' O\n- |')
                    }else if(vida === 2){
                        alert(' O\n- | -')
                    }else if(vida === 1){
                        alert(' O\n- | -\n|')
                    }
                    menos_vida = 0
                }else{
                    menos_vida = 0
                }
                if(vida === 0){ //perdeu
                    alert('Você Perdeu!!\n  O\n- | -\n | |')
                    alert(`A palavra era ${palavra}`)
                    again = prompt('Deseja jogar novemente?\n1. Sim\n2. Não')
                    break               
                }
                if(tabuleiro === palavra){ //ganhou
                    alert('Você Ganhou!!')
                    alert(`A palavra era ${tabuleiro}`)
                    again = prompt('Deseja jogar novemente?\n1. Sim\n2. Não')
                }
            }  
        }else if(numero === 5){ //PALAVRA 5 - TESTRALIO
            palavra = 'TESTRALIO';  //palavra selecionada
            tabuleiro = "123456789"
            while(tabuleiro != palavra){
                alert(`O jogo está assim: ${tabuleiro}`)
                letra_1 = prompt('Insira uma letra');
                letra = letra_1.toUpperCase()
                for(let i = 0; i <= palavra.length - 1; i++){
                    if(palavra.charAt(i) === letra){
                        tabuleiro = tabuleiro.replace(tabuleiro.charAt(i), letra)
                    }
                    else{
                        menos_vida++
                    }
                }
                if(menos_vida === 9){ //tirador de vidas oficial da União
                    vida--
                    alert(`Essa letra não tem na palavra.\nRestam ${vida} vida(s)`)
                    if(vida === 6){
                        alert(' O')
                    }else if(vida === 5){
                        alert(' O\n-')
                    }else if(vida === 4){
                        alert(' O\n-')
                    }else if(vida === 3){
                        alert(' O\n- |')
                    }else if(vida === 2){
                        alert(' O\n- | -')
                    }else if(vida === 1){
                        alert(' O\n- | -\n|')
                    }
                    menos_vida = 0
                }else{
                    menos_vida = 0
                }
                if(vida === 0){ //perdeu
                    alert('Você Perdeu!!\n  O\n- | -\n | |')
                    alert(`A palavra era ${palavra}`)
                    again = prompt('Deseja jogar novemente?\n1. Sim\n2. Não')
                    break               
                }
                if(tabuleiro === palavra){ //ganhou
                    alert('Você Ganhou!!')
                    alert(`A palavra era ${tabuleiro}`)
                    again = prompt('Deseja jogar novemente?\n1. Sim\n2. Não')
                }
            } 
        }
    }
}while(again === '1')