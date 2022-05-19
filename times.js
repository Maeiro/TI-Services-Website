let times = [{
        modal: "Futebol",
        nome: "São Paulo",
        qtd: "11",
        cor: "Vermelho",
    },
    {
        modal: "Futebol",
        nome: "Corinthians",
        qtd: "11",
        cor: "Preto",
    },
    {
        modal: "Futebol",
        nome: "Palmeiras",
        qtd: "11",
        cor: "Verde",
    },
]   

let timeprincipalEL = document.getElementById('timeprincipal');

timeprincipalEL.innerHTML=`${times[0].nome}, ${times[0].modal}, ${times[0].qtd}, ${times[0].cor}.<br>
                           ${times[1].nome}, ${times[1].modal}, ${times[1].qtd}, ${times[1].cor}.<br>
                           ${times[2].nome}, ${times[2].modal}, ${times[2].qtd}, ${times[2].cor}.`;

document.getElementById('time1').onclick = function() {
   timeprincipalEL.innerHTML=`${times[0].nome}, ${times[0].modal}, ${times[0].qtd}, ${times[0].cor}.<br><br><img src="./images/time1.png">`;
   timeprincipalEL.style.backgroundColor="red";
};

document.getElementById('time2').onclick = function() {
    timeprincipalEL.innerHTML=`${times[1].nome}, ${times[1].modal}, ${times[1].qtd}, ${times[1].cor}.<br><br><img src="./images/time2.png">`;
    timeprincipalEL.style.backgroundColor="black";
 };

 document.getElementById('time3').onclick = function() {
    timeprincipalEL.innerHTML=`${times[2].nome}, ${times[2].modal}, ${times[2].qtd}, ${times[2].cor}.<br><br><img src="./images/time3.png">`;
    timeprincipalEL.style.backgroundColor="green";
 };