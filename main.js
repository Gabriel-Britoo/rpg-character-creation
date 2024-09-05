var players = [];

function createNewPlayer(nomeDigitado, classeDigitada, servidorDigitado, cidadeDigitada, emailDigitado, senhaDigitada){
    return{
        nome:nomeDigitado,
        classe:classeDigitada,
        servidor:servidorDigitado,
        cidade:cidadeDigitada,
        email:emailDigitado,
        senha:senhaDigitada
    }
}
function validaForm(event){
    event.preventDefault();
    const nomeDigitado = document.getElementById('id-nome').value;
    const classeDigitada = document.getElementById('id-classe').value;
    const servidorDigitado = document.getElementById('id-servidor').value;
    const cidadeDigitada = document.getElementById('id-cidade').value;
    const emailDigitado = document.getElementById('id-email').value;
    const senhaDigitada = document.getElementById('id-senha').value;

    if(nomeDigitado==""||classeDigitada==""||servidorDigitado==""||cidadeDigitada==""||emailDigitado==""||senhaDigitada==""){
        alert("Preencha todos os campos antes de prosseguir");
    }
    else{
        const newPlayer = createNewPlayer(nomeDigitado, classeDigitada, servidorDigitado, cidadeDigitada, emailDigitado, senhaDigitada);
        players.push(newPlayer);
        displayPlayer(newPlayer);
        console.log(newPlayer);
    }
}
function displayPlayer(newPlayer){
    const showNome = document.getElementById('id-info-nome');
    const showClasse = document.getElementById('id-info-classe');
    const showServidor = document.getElementById('id-info-servidor');

    showNome.textContent = newPlayer.nome;
    showClasse.textContent = newPlayer.classe;
    showServidor.textContent = newPlayer.servidor;
}

const resultForm = document.getElementById('formulario');
resultForm.addEventListener('submit',validaForm);