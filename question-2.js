/*

    Nesse desafio a melhor solução que pensei seria utilizando o REGEX
    Cada parte consiste em um dos criterios:
    (?=.*[a-z])                 =>  Contém no mínimo 1 letra em minúsculo;
    (?=.*[A-Z])                 =>  Contém no mínimo 1 letra em maiúsculo.
    (?=.*\\d)                   =>  Contém no mínimo 1 digito.
    (?=.*[-+_!@#$%^&*.,?])      =>  Contém no mínimo 1 caractere especial
    (?=.{6,})                   =>  Possui no mínimo 6 caracteres.

    Caso a verificação do Regex não seja atendida, ele retornará uma mensagem de erro;
    
*/

const senha = 'aB@d2f'; //Digite sua senha neste local!!

let pattern = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?])(?=.{6,}).+$"
)

pattern.test(senha) ? console.log('Password valid') : console.error('Invalid Password, check the conditions again');



