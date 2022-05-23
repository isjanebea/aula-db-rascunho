const musicsModel = require("../models/musics.json")

const findAllMusics = (request, response) => { // 10 min
/**
 *  Find ( encontrar / achar ) ->  encontra algo - para deixar nossa função com um nove mais prágmatico, ou seja, direta e bem definida,
 * expressando o que queremos achar de fato.
 * All ( tudo ) pois queremos encontrar/achar todas as músicas
 * E musicas e não musica, porque  a gente que várias musicas, ou seja, uma playlist de musicas ou uma coleção de músicas
 */
    response.status(200).json(musicsModel)
}

const findOneMusicById = (request, response) => {
    /**
     * findOneMusicById 
     * Find ( encontrar / acha )
     * One -> aqui indicamos que queremos somente achar uma música por id
     * By -> pelo o que?  Ou atravéz de?   -> aqui indicamos o método / caminho o qual acharemos a nossa musica( recurso )
     * Id -> Geralmente esse numero é exclusivo, assim como um CPF, podemos utiliza-lo por exemplo como um ID ( identificação ) de um funcionario
     * número de série ou seu uso mais comum pensando em banco de dados é Chave Primaria ou Chave Estrageira
     */
    const { id } = request.params 
    /**
     * const { id } = request.params 
     * colocar o atributo dentro de { } (bigodinho ou chaves) no caso de objeto, nos permite extrair
     * ou seja, retirar aquele valor e o transforma-lo numa váriavel
     * seria equivalente à  const id = request.params.id
     */

    const findMusic = musicsModel.find(music => music.id == id)
    /**
     * find -> encontrar / achar / obter
     * music -> no singular, pois é uma música somente
     * musicsModel.find ->  O método de array find, nos permite interar um objeto javascript e retornar de acordo com a lógica de entrada
     * traduzindo: eu quero uma música, neste exemplo quero encontra-lá por id, então o método find ( intera / percorre / passa ) por cada música
     * e eu acrescento a minha verificação, neste caso, eu to dizendo se music.id é igual ao id, quando essa verificacao é verdadeira, ele interrompe o loop
     * e retorna a música encontrada
     */

    response.status(200).json(findMusic)
}

const createMusic = (request, response) => {
    const music = request.body // 2min
    /**
     * para deixar o meu código mais légivel, eu prefiro usar uma váriavel para utiliza-lo depois para criar minha música
     */

    music.id = musicsModel.length 
    /**
     * Como ainda não estamos utilizando um banco de dados, precisamos criar  o nosso ID manualmente, 
     * como nesse caso o id é numérico, basta pegar o tamanho total do array, por exemplo
     * se tenho 2 músicas,   musica 1, o id é 0 música 2 o id é 1, isso porque quando falamos em programação, geralmente 
     * a contagem começa em 0, exemplos os dias da semana que vai de 0 a 6, sendo 0 = domingo
     */

    musicsModel.push(music) // 1min
    /**
     * aqui vamos utilizar um método  o push, que irá inserir uma música no final da nossa playlist
     */

    response.status(200).json(music)

}

const updateOneMusic = (request, response) => {

    const updatedMusic = request.body // 1min
    /**
     * aqui definimos uma váriavel para 
     * nesse caso recebemos uma requisicao que contém um body ( corpo ) 
     * com os valores que desejamos atualizar ( no caso ) `author` e `title`
     * eu prefiro colocar numa variavel para ficar mais légivel
     */

    const { id } = request.params // 1min

    const findMusic = musicsModel.find(music => music.id == id) 
    /**
     * aqui encontramos uma música por id
     */
    findMusic.author = updatedMusic.author || findMusic.author // 5min
    /**
     * nessa linha dizemos:  se existir um updatedMusic.author ele altera ( atualiza / modifica )
     * o valor pelo o valor requisitado, também poderiamos usar um if else ou  uma operação ternaria
     * if (updatedMusic.author != null || updatedMusic.author != undefined) {
     *      findMusic.author = updatedMusic.author
     * } 
     */

    findMusic.title = updatedMusic.title || findMusic.title //  1min

    response.status(200).json(findMusic)
}

const deleteOneMusic = (request, response) => {
    const { id } = request.params // 5min

    musicsModel.splice(id, 1) // 1min
    /**
     * O método splice é utilizado para remover um ou mais itens de um array, ou até mesmo remover e adiconar um ou mais itens
     * no nosso caso, apenas estamos deletando um item, como nosso id é o proprio indice, não precisamos localizar o indice,
     * então só precisamos informar o id e a magica acontece
     */

    const message = "Música deletada com sucesso!" // 1min

    response.status(200).json({ message }) // 5min
}


module.exports = { // 5min
    findAllMusics,
    findOneMusicById,
    createMusic,
    updateOneMusic,
    deleteOneMusic
}