var senhaCorreta = "Marciele";
        var acesso = prompt("Digite seu nome para acessar o site:");

        while (acesso !== senhaCorreta) {
            alert("Esse site não é para você.👍");
            acesso = prompt("Só pode entrar se digitar o nome certo!🥰");
        }

        alert("Bem-vinda,Linda!");
        // Aqui você pode redirecionar o usuário para o site permitido


onload = () =>{
    document.body.classList.remove("container");
};