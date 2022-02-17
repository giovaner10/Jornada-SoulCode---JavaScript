function Usuario(posicao, userName, email){

    this.posicao = posicao;
    this.userName = userName;
    this.email = email;

}

let arrayUsers = []

let totalDeUsuarios = window.prompt('informe o total de usuarios para cadastro');

for(i = 0; i < totalDeUsuarios; i++){

    var user = 'usuario' + i;

    let userName = window.prompt(`informe o username do funcionario ${i+1}`);
    let email = window.prompt(`informe o email de ${userName}`);

    user = new Usuario(user, userName, email )

    arrayUsers.push(user);
}


Usuario.prototype.toString = function usuarioToString() {
    var ret = 'User: ' + this.posicao + ' --- Username: ' + this.userName + ' --- email: ' + this.email ;
    return ret;
  }

  for(i = 0; i < totalDeUsuarios; i++){
  window.document.write("<p>" + `${arrayUsers[i].toString()}`+ "</p> ");
  }







