window.onload = function () {
    alert(`Victor Maeiro Mendes da Silva \nSP/ADS-MACK \n${horario()}, hoje é ${diaSemana()}`);
}


function horario(diatardenoite) {
    const hora = new Date().getHours();
    let saudacao = ''
    if (hora < 12) saudacao = 'Bom dia';
    else if (hora < 18) saudacao = 'Boa tarde';
    else saudacao = 'Boa noite';
    return saudacao;
}

function diaSemana(diaAtual) {
    const semana = ["Domingo.", "Segunda.", "Terça.", "Quarta.", "Quinta.", "Sexta.", "Sábado."];
    const d = new Date();
    let dia = semana[d.getDay()];
    return dia
}