function validar(){
    /* cria variavel local recebendo valor do form usr usando name's dos inputs*/
    var nome = formUser.nome.value;
    var email = formUser.email.value;
    var telefone = formUser.telefone.value;
    var endereco= formUser.endereco.value;
    var senha = formUser.senha.value;
    
    if(nome == "" || nome.length <=3){
        alert("informe o nome completo");
        formUser.nome.focus();
        return false;
    }
}