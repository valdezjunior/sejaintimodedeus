let hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function () {
    document.querySelector(".container").classList.toggle("show-menu");
});

//////////////////////////////////////////////////////////////


function dados() {

    let email = document.getElementById('email');
    let texto = document.getElementById('mensagem');


    if (email.value.length == 0 || texto.value.length == 0) {
        alert('Preencha todos os campos!')
    } else {
        alert('Dados enviados!')
    }

}



















/*function validarEmail() {
    let eMail = document.querySelector('#email');
    let error = document.querySelector('#error-email');

    if (!eMail.checkValidity()) {
        error.innerHTML = "Email inválido!";
    }
}

function redefinirMsg() {
    let error = document.querySelector('#error-email');

    if (error.innerHTML == "Email inválido!") {
        error.innerHTML = "";
    }
}

function confirmeEmail() {
    let eMail = document.querySelector('#email');
    let confEmail = document.querySelector('#emaill');
    let errorc = document.querySelector('#error-emaill');

    if (confEmail.checkValidity() !== eMail.checkValidity()) {
        errorc.innerHTML = "Email diferente!"
    }

}

function redefinirMsgm() {
    let errorc = document.querySelector('#error-emaill');

    if (errorc.innerHTML == "Email diferente!") {
        errorc.innerHTML = "";
    }
}*/




