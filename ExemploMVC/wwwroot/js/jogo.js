
function valorAleatorio() {
    min = Math.ceil(1);
    max = Math.floor(14);
    var aleatorio = Math.floor(Math.random() * (max - min)) + min;
    return aleatorio;
}

function jogador1() {
    var number = valorAleatorio()
    var cartas1 = document.getElementById("cartas1");
    $(cartas1).attr("src", '/images/' + number + '.png'); 
    switch (number) {
        case 1:
            document.getElementById("resultado").textContent = parseFloat(document.getElementById("resultado").textContent) + 1;
            break;
        case 2:
            document.getElementById("resultado").textContent = parseFloat(document.getElementById("resultado").textContent) + 2;
            break;
        case 3:
            document.getElementById("resultado").textContent = parseFloat(document.getElementById("resultado").textContent) + 3;
            break;
        case 4:
            document.getElementById("resultado").textContent = parseFloat(document.getElementById("resultado").textContent) + 4;
            break;
        case 5:
            document.getElementById("resultado").textContent = parseFloat(document.getElementById("resultado").textContent) + 5;
            break;
        case 6:
            document.getElementById("resultado").textContent = parseFloat(document.getElementById("resultado").textContent) + 6;
            break;
        case 7:
            document.getElementById("resultado").textContent = parseFloat(document.getElementById("resultado").textContent) + 7;
            break;
        case 8:
            document.getElementById("resultado").textContent = parseFloat(document.getElementById("resultado").textContent) + 8;
            break;
        case 9:
            document.getElementById("resultado").textContent = parseFloat(document.getElementById("resultado").textContent) + 9;
            break;
        case 10:
            document.getElementById("resultado").textContent = parseFloat(document.getElementById("resultado").textContent) + 10;
            break;
        case 11:
            document.getElementById("resultado").textContent = parseFloat(document.getElementById("resultado").textContent) + 10;
            break;
        case 12:
            document.getElementById("resultado").textContent = parseFloat(document.getElementById("resultado").textContent) + 10;
            break;
        case 13:
            document.getElementById("resultado").textContent = parseFloat(document.getElementById("resultado").textContent) + 10;
            break;
    }
}
function jogador2() {
    var number = valorAleatorio()
    var cartas2 = document.getElementById("cartas2");
    $(cartas2).attr("src", '/images/' + number + '.png'); 
    switch (number) {
        case 1:
            document.getElementById("resultado2").textContent = parseFloat(document.getElementById("resultado2").textContent) + 1;
            break;
        case 2:
            document.getElementById("resultado2").textContent = parseFloat(document.getElementById("resultado2").textContent) + 2;
            break;
        case 3:
            document.getElementById("resultado2").textContent = parseFloat(document.getElementById("resultado2").textContent) + 3;
            break;
        case 4:
            document.getElementById("resultado2").textContent = parseFloat(document.getElementById("resultado2").textContent) + 4;
            break;
        case 5:
            document.getElementById("resultado2").textContent = parseFloat(document.getElementById("resultado2").textContent) + 5;
            break;
        case 6:
            document.getElementById("resultado2").textContent = parseFloat(document.getElementById("resultado2").textContent) + 6;
            break;
        case 7:
            document.getElementById("resultado2").textContent = parseFloat(document.getElementById("resultado2").textContent) + 7;
            break;
        case 8:
            document.getElementById("resultado2").textContent = parseFloat(document.getElementById("resultado2").textContent) + 8;
            break;
        case 9:
            document.getElementById("resultado2").textContent = parseFloat(document.getElementById("resultado2").textContent) + 9;
            break;
        case 10:
            document.getElementById("resultado2").textContent = parseFloat(document.getElementById("resultado2").textContent) + 10;
            break;
        case 11:
            document.getElementById("resultado2").textContent = parseFloat(document.getElementById("resultado2").textContent) + 10;
            break;
        case 12:
            document.getElementById("resultado2").textContent = parseFloat(document.getElementById("resultado2").textContent) + 10;
            break;
        case 13:
            document.getElementById("resultado2").textContent = parseFloat(document.getElementById("resultado2").textContent) + 10;
            break;
    }
}




function parar1() {

    var btn_jogador1 = document.getElementById("btn_jogador_1");
    var btn_parar1 = document.getElementById("btn_parar_1");

    $(btn_jogador1).attr('disabled', 'disabled');
    $(btn_parar1).attr('disabled', 'disabled');
    Stop()

}
function parar2() {
    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_parar2 = document.getElementById("btn_parar_2");

    $(btn_jogador2).attr('disabled', 'disabled');
    $(btn_parar2).attr('disabled', 'disabled');
    Stop()
}
function Stop() {
    var btn_parar1 = document.getElementById("btn_parar_1").disabled;
    var btn_parar2 = document.getElementById("btn_parar_2").disabled;
    if (btn_parar1 === true && btn_parar2 === true) {
        if (parseFloat(document.getElementById("resultado").textContent) > parseFloat(document.getElementById("resultado2").textContent) && parseFloat(document.getElementById("resultado").textContent) <= 21)
            alert("Jogador 1 GANHOU!") 
        else
            if (parseFloat(document.getElementById("resultado").textContent) < parseFloat(document.getElementById("resultado2").textContent) && parseFloat(document.getElementById("resultado2").textContent) <= 21)
                alert("Jogador 2 GANHOU!");
            else
                if (parseFloat(document.getElementById("resultado").textContent) < parseFloat(document.getElementById("resultado2").textContent) && parseFloat(document.getElementById("resultado").textContent) <= 21)
                    alert("Jogador 1 GANHOU!") 
                else
                    if (parseFloat(document.getElementById("resultado").textContent) > parseFloat(document.getElementById("resultado2").textContent) && parseFloat(document.getElementById("resultado2").textContent) <= 21)
                        alert("Jogador 2 GANHOU!");
                    else
                        if (parseFloat(document.getElementById("resultado").textContent) <= 21 && parseFloat(document.getElementById("resultado2").textContent) <= 21)
                            alert("EMPATE!");
                        else
                            alert("SEM VENCEDOR!");

    }
    
}
function reiniciar() {
    location.reload()
}
