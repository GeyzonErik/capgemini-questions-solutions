
/* 
    OBS:{ O codigo sem os comentarios tem cerca de 46 linhas }
    
    Depois de muita pesquisa, descobri que se tratava de Sherlock and Anagrams

    Aqui em baixo está minha explicação passo a passo de como Aprendi a fazer
    Vi e revi varios codigos em diferentes linguagens, e por fim consegui entender cada
    passo e transpassar para JavaScript

*/

let string = 'ifailuhkqq' //Digite a String a ser testada neste local.
let arrayDeSubstrings = [];
let contador = 0;

function sherlockAndAnagrams(string) {
    /*
        Passo 1, vamos checar quantas letras repetidas tem na palavra
        o metodo split separa as letras, transformando em um array, 
        logo após usamos o filter para filtrar as letras.
        e dentro do filter passamos uma comparação, 
        onde pegamos a string e vemos o index da letra
        e retonra então um valor boolean ao comparar com o index.
        Exemplo: {
            string: ovo
            Na primeira posição teremos a letra O, que será comparada no metodo filter
            e veremos que o resultado é False
            Na segunda teremos V, que mais uma vez passado no filter dará Fale
            Já na terceira, como a letra é a mesma da primeira, o resultado da comparação entre
            letra e index dará True, já que pelo meotodo filter termos o 'O' na primeira posição
            sendo que agora estamos comparando ao index 2;
        }
        Sendo assim, retornaremos apenas as letras repetidas para o array (pois o filter retorna um novo array) 
        de letras duplicadas (duplicatesLetter), então pegaremos o tamanho dese array através do .length
    */
    const duplicatesLetter = string.split('').filter((letter, letterIndex) => {
        return string.indexOf(letter) !== letterIndex

    }).length

    if (!duplicatesLetter) {
        console.log(0);
        return 0
    }; //Usado para encerrar o programa, visto que sem letra repetida não formara anagrama.


    /*
        Passo 2: achar todas as substrings da string que estamos passando;
        Usando o for separaremos em i j (a principo se poderia pensar em linhas e colunas)
        mas aqui estaremos pegando indices para usarmos na propriedade .slice() que faz uma repartição
        da string.
        Por no j inicializara com (i + 1), para que a sim o array com a "fatia" da palavra nunca fique zerado
        e o j terminara com (<= string.length) para que possamos comparar do começo ao fim da palavra

    */

    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j <= string.length; j++) {
            arrayDeSubstrings.push(string.slice(i, j))
        }
    }

    /*
        Esta proxima etapa foi quebrada em varias funções contendo outras etapas dentro,
        então para afim de entendimento chamaremos essa de 3
        e as dentro desta de 3.1, 3.2 e assim por diante

        No Passo 3 faremos mais um loop, dessa vez para fazer a contagem, dentro dele teremos uma
        função que fará a contagem dentro dela;
    */

    for (let i = 0; i < arrayDeSubstrings.length; i++) {
        countAnagrams(i, arrayDeSubstrings) //A função irá servir para contar quantos anagramas a String possui
    }

    console.log(contador);
}


/*
    Este agora é o passo 3.1
    Na função countAnagrams(), passaremos um index, represanto pelo i do loope do passo 3
    e um array, que será o própio arrayDeSubstrings;
    Assim, criaremos um const para armanezar a cada repeditção o Elemento atual do
    Arrau que entrou no loop 
*/

function countAnagrams(index, array) {
    const substringAtual = array[index];
    const restoDoArray = array.slice(index + 1);
    /*
        porém, antes de retornar teremos que validar se é ou não um Anagrama
        Já que até então não comparamos... e isso entrara não condição a ser
        atendidada dentro do IF, usando o &&.
        Ambas as condições tem que retornar TRUE para poder acrescer 1 ao contador;
    */
    for (let i = 0; i < restoDoArray.length; i++) {
        if (substringAtual.length == restoDoArray[i].length && checkIfIsAnagram(substringAtual, restoDoArray[i])) {
            return contador++
        }
    }

}

/*
    Este agora é o passo 3.2
    Na função checkIfIsAnagram(), será uma checagem de Anagrama,
    Se ambas possuem a mesma letra, e a mesma quantidade, retorna True,
    Caso n, retorna False, normalmente feita com duas Palavras diferentes
    porém embaralhadas.
    Aqui usaremos a substringAtual passado no loop do countAnagrams(), e a substring da
    sobra do Array (restoDoArray) no indice [i] do passado de acordo com o loop;
    
*/

function checkIfIsAnagram(string1, string2) {
    return (string1.split('').sort().join() === string2.split('').sort().join())
}

sherlockAndAnagrams(string);

