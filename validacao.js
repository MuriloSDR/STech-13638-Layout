function validar() {
    /* cria variavel local recebendo valor do form usr usando name's dos inputs*/
    var nome = formUser.nome.value;
    var email = formUser.email.value;
    var telefone = formUser.telefone.value;
    var endereco = formUser.endereco.value;
    var senha = formUser.senha.value;
    var cpf = formUser.cpf.value;
    var cnpj = formUser.cnpj.value;

    if (nome == "" || nome.length <= 3) {
        alert("informe o nome completo!");
        formUser.nome.focus();
        return false;
    }
    if (email == "" || email.length < 10) {
        alert("email nao atende os requisitos!");
        formUser.email.focus();
        return false;
    }
    if (telefone == "" || telefone.length < 11) {
        alert("telefone não atende os requisitos!");
        formUser.telefone.focus();
        return false;
    }
    if (endereco == "" || endereco.length <= 5) {
        alert("Informe o endereço Completo");
        formUser.endereco.focus();
        return false;
    }

    if (cnpj == "") {
        if (cpf == "" || cpf.length < 14) {
            alert("CPF inválido!");
            formUser.cpf.focus();
            return false;
        }
    } else if (cnpj == "" || cnpj < 18) {
        alert("CNPJ incorreto!")
        formUser.cnpj.focus();
        return false;
    }

    if (senha == "" || senha.length <= 6) {
        alert("Informe a senha de 6 Digitos!");
        formUser.senha.focus();
        return false;
    }

    if (cpf == "" && cnpj == "") {
        alert("Preencha pelo o Cpf ou o Cnpj!");
        return false;
    }

    if (cpf != "" && cnpj != "") {
        alert("Escolha Cpf ou Cnpj!");
        return false;
    }

    if (cpf == "" && cnpj != "") {
        if (cnpj.length != 18) {
            alert("CNPJ incorreto!");
            formUser.cnpj.focus();
            return false;
        }
    } else if (cnpj == "" && cpf != "") {
        if (cpf.length != 14) {
            alert("CPF incorreto!")
            formUser.cpf.focus();
            return false;
        }
    }
}