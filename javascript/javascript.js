function selecionerUsuario() {
    let username = document.getElementById('nomeUsuario').textContent;
    let loginField = document.getElementById('login');
    let senha = document.getElementById('pass');

    loginField.value = username;
    senha.focus();
}