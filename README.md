# TITULO DO REPOSITORIO

##   π§π½βπ» ApresentaΓ§Γ£o

  Meu nome Γ© Beatriz Ramerindo, sou Engenheira de Software, atualmente com desenvolvimento back-end com Spring boot Com Koltin e Node com Express com TypeScript/JavaScript. Sou carioca, mas estou atualmente resido em SΓ£o Paulo, tenho como Hobbies assistir um pirata que estica.

###  π©π½βπ« recadinho da professora 
    - Bebam Γ‘gua meninas
    - Qualquer pergunta Γ© vΓ‘lida, principalmente aquela que a gente pensa que nΓ£o faz sentido.
    - Pode deixar a camera aberta para a prof nΓ£o se sentir sozinha
    
### π ConteΓΊdo da Aula

    - IntroduΓ§Γ£o ao Banco de Dados(sql, nosql, mongo e orm)
    - Projeto sem mongo
    - Criar conta no MongoAtlas
    - Conhecendo o mongoCompass
    - Projeto com mongo
    - get com mongo
    - post com mongo
    - patch com mongo

## π Arquitetura do Projeto
```
ReprogramaMusic  
βββ api_com_mongo           
β    ββ src                       
β    β  ββ controllers            
β    β  β  ββ musicController.js  
β    β  ββ database               
β    β  β  ββ moogoseConnect.js      
β    β  ββ models                 
β    β  β  ββ musicModel.js      
β    β  ββ routes                 
β    β  β  ββ musicRouter.js      
β    β  ββ app.js                 
β    ββ package-lock.json         
β    ββ package.json  
β    ββ .gitignore            
β    ββ server.js
|
βββ api_sem_mongo           
β    ββ src                       
β    β  ββ controllers            
β    β  β  ββ musicController.js      
β    β  ββ models                 
β    β  β  ββ music.json      
β    β  ββ routes                 
β    β  β  | index.js
β    |  |  ββmusicRouter.js   
β    β  ββ app.js                 
β    ββ package-lock.json         
β    ββ package.json
β    ββ .gitignore      
β    ββ server.js
|
ββREADME.md
```

## π¦ HistΓ³ria do banco de dados

A motivaΓ§Γ£o de criar um sistema para armazenagem de dados surgiu devido ao alto custo de leitura/escrita de arquivos no HD. Os primeiros fundamentos de banco de dados relacionais surgiram entre as dΓ©cadas de 1960 a 1970 pela IBM. Na  dΓ©cada de 80, a Oracle, com a permissΓ£o da IBM, foi a primeira empresa a desenvolver o banco utilizando o padrΓ£o SQL para consulta/escrita como Γ© conhecido hoje. ApΓ³s a explosΓ£o da web, tambΓ©m conhecida como web 2.0, foi necessΓ‘rio uma alternativa ao SQL, pois na Γ©poca as empresas , a partir de 1998, surgi

####  As diferenΓ§as De SQL(relacional) vs NOSQL(nΓ£o relacional)

No resumo, um banco de dados SQL, Γ© aquele que possui tabelas e que podem ter relaΓ§Γ£o entre si. Para relacionar uma tabela com uma ou mais  Γ© necessΓ‘rio uma chave, podendo ser primΓ‘ria ou estrangeira. Um banco NOSQL Γ© aquele que possui uma estrutura de chave/valor, sem relaΓ§Γ£o entre si.

#### Banco de dados Relacionais

No banco de dados relacional, os dados sΓ£o armazenados em tabelas, onde cada linha representa um registro que Γ© um dado salvo  e cada coluna representa um campo.
Como os dados sΓ£o armazenados em uma tabela, Γ© necessΓ‘rio um relacionamento para identificar quais campos pertencem a quais linhas. Essa referΓͺncia Γ© chamada de chave primΓ‘ria, tambΓ©m podemos usar outras chaves como a estrangeira.


Exemplo de consulta em SQL com MySQL:

```sql
    $ SELECT from musicas
    WHERE artista = "ludmila"
```

 - Os mais conhecidos do mercado atualmente sΓ£o o MySQL, PostgreSQL e o Oracle.

#### Banco de dados NΓ£o Relacionais

No banco de dados nΓ£o-relacional, os dados sΓ£o estruturados com um par de chaves/valor. Caso seja necessΓ‘rio fazer uma relaΓ§Γ£o, utilizamos  um id, que nesse caso Γ© chamado de ObjectId, que Γ© um identificador ΓΊnico para cada documento ( como se fosse um cpf). Uma vantagem do banco de dados NOSQL sobre o SQL, Γ© que ele nos permite salvar qualquer tipo de dado e em qualquer ordem, isso Γ© muito ΓΊtil quando, por exemplo, precisamos salvar um array.


Exemplo de consulta em NOSQL com Mongo

```javascript
    $ db.musicas.find({ artista: "ludmila"})
```

- Os mais conhecidos do mercado atualmente sΓ£o o MongoDB, Redis e o Firebase.

## π¦ IntroduΓ§Γ£o ao Mongo
Mongodb Γ© um banco de dados NOSQL (nΓ£o relacional) que surgiu em 2009 e foi desenvolvido em C + +. Ele utiliza BJSON que Γ© bem similar com o JSON, sua linguagem de consulta/escrita Γ© javascript, logo, por ser uma  linguagem comum ( eu amo o js ),  a sua curva de aprendizagem Γ© pequena  para quem vem da web.

  alguns comandos com mongo

```javascript
     $ show databases;
     $ show collections;
     $ db.createCollection("nome_da_colecao");
     $ db.nome_da_colecao.insert({nome: "nome", idade: "22"});
     $ db.nome_da_colecao.drop();
```

mais sobre: [mogodb comandos](https://www.tutorialspoint.com/mongodb/index.htm)

###  Database
Acho que jΓ‘ ouvimos a famosa expressΓ£o 'quebrei a base de prod' entΓ£o, nossa database( base de dados ) Γ© constituΓ­da por collections, que possui document,  geralmente num projeto, a gente possui diferentes tipos de base, para diferentes tipos de ambientes, como por exemplo: ProduΓ§Γ£o, HomologaΓ§Γ£o, Desenvolvimento, Testes, etc.

exemplo: criando um banco de dados

```javascript
    $ mongo
    $ use musicas;
    $ db.musicas.find();
```

### Collection e Document
Nossa `collection` Γ© uma coleΓ§Γ£o(lista) de `document`, similar a  array, onde armazenamos, por exemplo, as nossas mΓΊsicas. Nesse exemplo, uma playlist seria a `collection`, enquanto cada mΓΊsica seria um `document`, contendo as informaΓ§Γ΅es daquela mΓΊsica.

exmplo:

```json
[
    {   
        "_id": "ObjectId('5c8f8f8f8f8f8f8f8f8f8f8f')",
        "nome": "Duas doses de Saudade",
        "artista": "ludmila",
        "genero": "pop",
        "ano": "2016"
    },
    {   
        "_id": "ObjectId('4fsd44ffassasdasd234f56f')",
        "nome": "Amor de Que",
        "artista": "Pablo Vittar",
        "genero": "pop",
        "ano": "2016"
    }
]

```

## βοΈ IntroduΓ§Γ£o ao ORM
Um ORM Γ© uma `tΓ©cnica de desenvolvimento para nΓ³s devas`, conseguimos manipular de forma simples o nosso banco, sem ele precisamos de um especialista(DBA). Nos permite fazer como por exemplo `migrations` ( versionamento de base ) de forma simples.

### IntroduΓ§Γ£o ao ORM Mongoose
O ORM Mongoose `nΓ£o Γ© o banco`, Γ© uma ferramenta que como mencionado acima, facilita o nosso dia-a-dia enquanto devas, ele possui um conjunto recursos / funΓ§Γ΅es que nos auxilia no desenvolvimento.

### `{}` Schema

Nosso mongoose utiliza a `Schema` para pΓ΄r ordem na ' bagunΓ§a ', afinal como podemos salvar qualquer coisa, de qualquer jeito, seria uma loucura nΓ£o?  Para isso precisamos de um schema( espelho ) de como serΓ‘ salvo nosso `document`.


exemplo de schema:

```javascript
const mongoose = require('mongoose');
const MusicaSchema = monogoose.Schema({
    nome: String,
    artista: String,
    album: String,
    ano: Number,
    genero: String,
    duracao: Number,
    link: String,
    capa: String
});

```

### `[]` Model
Nossa `Model` ( modelo ) Γ© a nossa representaΓ§Γ£o da Collection ( coleΓ§Γ£o ), nele assim como no Array, possuΓ­mos `mΓ©todos` ( funΓ§Γ΅es ) que nos permite realizar as operaΓ§Γ΅es do CRUD: 

| OPERAΓΓO| DESCRIΓΓO | HTTP |
| --- | --- | --- |
| C | criar/gerar | POST |
| R | ler/obter |  GET | 
| U | atualizar/substiuir | PUT/PATCH |
| D | remover/deletar | DELETE |


Exemplo de como criar uma model

```javascript
const MusicaModel = mongoose.model('musica', MusicaSchema);
```
Obs: NΓ£o Γ© necessΓ‘rio salvar como mΓΊsicas, pois o ORM cria no plural por nΓ³s, que massa nΓ© π

### ObjectId( )
O ObjectID Γ© um identificador ΓΊnico para cada documento, ele Γ© gerado automaticamente, podemos pensar nele como um CPF, ΓΊnico por dado, Γ© por ele que consegue identificar um `Document` realizar as operaΓ§Γ΅es do CRUD.

```javascript
    const musicId = new moogose.Types.ObjectId();
```

## π§π½βπ» Classes | OOP (orientaΓ§Γ£o a objetos) Conceitos bΓ‘sicos
Uma breve introduΓ§Γ£o sobre classes e objetos, para que possamos entender melhor o  nosso ORM.

###  uso da palavra reservada `new`
Quando possuΓ­mos uma classe, podemos utilizar a palavra reservada `new`  para instanciar um objeto, ou seja, construir um novo documento a partir da classe( nossa `Schema` ),  afinal, nΓ£o queremos que a mΓΊsica da Anitta tenha altere as informaΓ§Γ΅es da mΓΊsica da Ludmila nΓ©? π€

```javascript
const musica = new MusicaModel({
    nome: 'Cat',
    artista: 'Gatinho',
    album: 'Cat Aleatorio',
    ano: '2019',
    genero: 'MPB',
    duracao: '3:00',
    link: 'https://www.youtube.com/watch?v=QH2-TGUlwu4',
    capa: 'https://i.ytimg.com/vi/QH2-TGUlwu4/maxresdefault.jpg'
});

```


### MΓ©todos
Como mencionamos em aulas passadas, assim como o objeto, as classes possuiem mΓ©todos, que sΓ£o funΓ§Γ΅es que nos auxiliam a realizar **aΓ§Γ΅es** como por exemplo: salvar um mΓΊsica, ou tocar uma mΓΊsica, no nosso dia-a-dia usamos o console`.log`, *.log("hello word")* Γ© um mΓ©todo que nos permite imprimir no terminal uma mensagem de texto.

#### MΓ©todos relaΓ§Γ£o com a nossa API

| OPERAΓΓO | MONGODB | MOOGOSE | DESCRIΓΓO | HttpCode
| ---------- | -------------- | ---------------- | ----------------- | ---- |
| **C**REATE | **db**.insertOne() | new **MusicModel**() | cria um documento | 201 |
| **R**EAD | **db**.find() |  **MusicModel**.find() | ler um documento | 200 |
| **U**PDATE | **db**.updateOne() | **MusicModel**.updateOne() | atualiza um documento | 200 |
| **D**ELETE | **db**.deleteOne() | **MusicModel**.deleteOne() | deleta um documento | 200 ou 204


### Constructor
Nosso `constructor` Γ© responsΓ‘vel por inicializar a nossa classe, ele recebe os parametros para criar construir a instancia da classe, como por exemplo, nossa mΓΊsica, Γ© assim que nossa Schema gera a mΓΊsica no formato que o banco espera, no caso do mongo, um BJSON.

### Tipagem - Tipos primΓ‘rios
Na programaΓ§Γ£o, existem tipos primΓ‘rios, que sΓ£o responsΓ‘veis por definir o tipo de informaΓ§Γ£o ( dado ) que estamos trabalhando, por exemplo um nΓΊmero de celular `Number`, ou um email que Γ© texto `String`, ou atΓ© mesmo se Γ© verdadeiro(true) ou falso(false) que Γ© um `Boolean`, alΓ©m disso, temos o `Date` que representa uma data. 

 - String -> representa *texto* -> `""`
 - Number -> representa *nΓΊmero*  `0`
 - Boolean -> representa `true` ou `false`
 - Date -> representa uma data, por exemplo, 1970-01-13 -> `Date`

```typescript
    class Musica {
        nome: String,
        artista: String,
        album: String,
        ano: Date,
        duracao: Number,
        curtidas: Number,
        comentarios: String,
        disponivel: Boolean,
    };
```

## π ReferΓͺncias
- https://www.gartner.com/en/information-technology/glossary/object-data-model
- https://medium.com/tkssharma/node-js-with-mongoose-odm-9697c09665df
- https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/mongoose
- https://docs.mongodb.com/
- https://docs.mongodb.com/manual/crud/
- https://docs.atlas.mongodb.com/tutorial/create-new-cluster/
- https://studio3t.com/academy/topic/mongodb-vs-sql-concepts/
- https://dzone.com/articles/sql-vs-nosql
- https://mongoosejs.com/docs/index.html

### π₯ Videos de apoio

- [Resumo Mongodb - Codigo Fonte TV](https://www.youtube.com/watch?v=4dTI1mVLX3I)
- [nodeJs Express Mongo - Api rest full Turitorial](https://www.youtube.com/watch?v=K5QaTfE5ylk)
- [O que Γ© banco de dados? - Curso em Video](https://www.youtube.com/watch?v=Ofktsne-utM)



## βοΈ Dependencias do Projeto
    - Mongoose
    - Cors
    - Express
    - Nodemom

### π» DependΓͺncias de ambiente
- Node `~> 16`
- Mongodb > `~> 4`


##  π Combinado da semana


## ππΎ Minhas redes sociais
 - [LINKEDIN](https://www.linkedin.com/in/beatriz-ramerindo/)
 - [GITHUB](https://github.com/isjanebia)
 - [INSTAGRAN](https://www.instagram.com/isjanebea/)
 - [SITE](beatriz.ramerindo.com.br)