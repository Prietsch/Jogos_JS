var flag = true;
do{
    var banco_palavras_1 = "veja,como,para,liga,fera,vivo,mira,pode,goma,nome,alta,esta,loja,cabe,azul"; //4 letras
    var banco_palavras_2 = "negro,termo,algoz,plena,vigor,sutil,inato,muito,honra,etnia,icone,fazer,tange,edipo,lapso"; //5 letras
    var banco_palavras_3 = "exceto,vereda,mister,infame,anseio,apogeu,idento,hostil,abster,dispor,formal,difuso,decora,avidez,utopia"; //6 letras

    var sorteio_1 = Math.floor(Math.random()*74); //0 à 73
    var sorteio_2 = Math.floor(Math.random()*88); //0 à 87
    var sorteio_3 = Math.floor(Math.random()*104); //0 à 103

    var posicao_1 = banco_palavras_1.indexOf(",", sorteio_1); //pega a posição da vírgula
    var posicao_2 = banco_palavras_2.indexOf(",", sorteio_2); 
    var posicao_3 = banco_palavras_3.indexOf(",", sorteio_3); 

    var palavra_1 = banco_palavras_1.slice(posicao_1 + 1, posicao_1 + 5); //pega a palavra de 4 letras
    var palavra_2 = banco_palavras_2.slice(posicao_2 + 1, posicao_2 + 6); //pega a palavra de 5 letras
    var palavra_3 = banco_palavras_3.slice(posicao_3 + 1, posicao_3 + 7); //pega a palavra de 6 letras

    var nivel = Number(prompt('Insira o número do nível no qual quer jogar:\n1. Fácil\n2. Médio\n3. Difícil'));
    var jogo = '';
    var desistir = 2; // 1 ---> sim 2 ---> nao
    var Chute= '';
    var chute = '';
    var CHUTE = '';
    var contador = 0;
    var final = ''
    var repetidas = 0;
    var vida = 7;
    var novamente = 2;

    console.log(sorteio_1, posicao_1, palavra_1)
    console.log(sorteio_2, posicao_2, palavra_2)
    console.log(sorteio_3, posicao_3, palavra_3)


    //JOGO NÍVEL FÁCIL
    if(nivel == 1){
        while(jogo != palavra_1){
            contador = 0;
            repetidas = 0;
            final = palavra_1.toUpperCase();
            Chute = prompt('Insira uma palavra');
            chute = Chute.toLowerCase();
            jogo = chute;
            CHUTE = Chute.toUpperCase();
            for(let i = 0; i<4; i++){//palavra_1
                for(let j = 0; j<4; j++){//chute
                    if(palavra_1[i] === chute[j]){
                            contador+= 1;
                        if(i == j){
                            jogo = jogo.substring(0,j) + CHUTE[j] + jogo.substring(j+1); //coloca a letra maiúscula no jogo
                        }
                        if(chute[j]===chute[j+1]||chute[j]===chute[j+2]||chute[j]===chute[j+3]){
                            repetidas+=1;
                        }
                    }
                }
            }
            if(jogo == final){
                jogo = jogo.toLowerCase();
                alert('Tu ganhou!!\nParabéns!!')
            }else{
                vida-=1
                if(vida<4){
                desistir = Number(prompt('Deseja desistir??\n1.Sim\n2.Não'));
                    if(desistir == 1 || vida === 0){
                        alert(`A palavra era "${palavra_1}"`)
                        break;
                    }
                }
            }
            alert(`O jogo está assim:\n${jogo}\nPossui ${contador - repetidas} letra(s) correta(s)\n${vida} vida(s) restante(s)`);

        }
        novamente = Number(prompt('Deseja jogar novamente?\n1.Sim\n2.Não'));
        if(novamente == 2){
            flag = false;
        }
    }

    //JOGO NÍVEL MÉDIO
    if(nivel == 2){
        while(jogo != palavra_2){
            contador = 0;
            repetidas = 0;
            final = palavra_2.toUpperCase();
            Chute = prompt('Insira uma palavra');
            chute = Chute.toLowerCase();
            jogo = chute;
            CHUTE = Chute.toUpperCase();
            for(let i = 0; i<5; i++){//palavra_1
                for(let j = 0; j<5; j++){//chute
                    if(palavra_2[i] === chute[j]){
                            contador+= 1;
                        if(i == j){
                            jogo = jogo.substring(0,j) + CHUTE[j] + jogo.substring(j+1); //coloca a letra maiúscula no jogo
                        }
                        if(chute[j]===chute[j+1]||chute[j]===chute[j+2]||chute[j]===chute[j+3]||chute[j]===chute[j+4]){
                            repetidas+=1;
                        }
                    }
                }
            }
            if(jogo == final){
                jogo = jogo.toLowerCase();
                alert('Tu ganhou!!\nParabéns!!')
            }else{
                vida-=1
                if(vida<4){
                desistir = Number(prompt('Deseja desistir??\n1.Sim\n2.Não'));
                    if(desistir == 1 || vida === 0){
                        alert(`A palavra era "${palavra_}"`)
                        break;
                    }
                }
            }
            alert(`O jogo está assim:\n${jogo}\nPossui ${contador - repetidas} letra(s) correta(s)\n${vida} vida(s) restante(s)`);
        }
        novamente = Number(prompt('Deseja jogar novamente?\n1.Sim\n2.Não'));
        if(novamente == 2){
            flag = false;
        }
    }

    //JOGO NÍVEL DIFÍCIL
    if(nivel == 3){
        while(jogo != palavra_3){
            contador = 0;
            repetidas = 0;
            final = palavra_3.toUpperCase();
            Chute = prompt('Insira uma palavra');
            chute = Chute.toLowerCase();
            jogo = chute;
            CHUTE = Chute.toUpperCase();
            for(let i = 0; i<6; i++){//palavra_1
                for(let j = 0; j<6; j++){//chute
                    if(palavra_3[i] === chute[j]){
                            contador+= 1;
                        if(i == j){
                            jogo = jogo.substring(0,i) + CHUTE[j] + jogo.substring(i+1); //coloca a letra maiúscula no jogo
                        }
                        if(chute[j]===chute[j+1]||chute[j]===chute[j+2]||chute[j]===chute[j+3]||chute[j]===chute[j+4]||chute[j]===chute[j+5]){
                            repetidas+=1;
                        }
                    }
                }
            }
            if(jogo == final){
                jogo = jogo.toLowerCase();
                alert('Tu ganhou!!\nParabéns!!')
            }else{
                vida-=1
                if(vida<4){
                desistir = Number(prompt('Deseja desistir??\n1.Sim\n2.Não'));
                    if(desistir == 1 || vida === 0){
                        alert(`A palavra era "${palavra_3}"`)
                        break;
                    }
                }
            }
            alert(`O jogo está assim:\n${jogo}\nPossui ${contador - repetidas} letra(s) correta(s)\n${vida} vida(s) restante(s)`);

        }
        novamente = Number(prompt('Deseja jogar novamente?\n1.Sim\n2.Não'));
        if(novamente == 2){
            flag = false;
        }
    }

}while(flag)