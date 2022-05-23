# Aula Mongo DB


# Introdução ao Banco de dados

## História do banco de dados
A motivação de criar um sistema para armazenagem de dados surgiu devido ao alto custo de armazenar dados e cusultar dados em HD. Os primeiros fundamentos de banco de dados, que eram relacionais, sugiram por volta das décadas de 1960 a 1970 pela IBM. O primeiro a utlizar a linguagem SQL como padão foi imprementado pela ORACLE na decáda de 80 e pouco tempo depois pela própria IBM.


## Banco de dados Relacionais

No banco de dados relacional, os dados são armazenados em uma tabela, onde cada linha representa um registro e cada coluna representa um campo.
Como os dados são armazenados em uma tabela, é necessário um relacionamento para indentificar quais campos pertencem a quais linhas. Essa referncia é chamada de chave primária. Também podemos ter uma segunda referência chamada de chave estrangeira.

 - linguagen: SQL 
 - Os mais conhecidos do mercado atualmente são o MySQL, PostgreSQL e o Oracle.

## Banco de dados Não Relacionais

No banco de dados não-relacional os dados são armazenados com um par de chave/valor e não acontecerá uma relação do conceito de 'chave' entre os dados, e sim um ID, que nesse caso é chamado de ObjectId, que é um identificador único para cada documento ( como se fosse um cpf). Uma vantagem do banco de dados NOSQL sobre o SQL, que ele nos permite salvar qualquer tipo de dado e em qualquer ordem, isso é muito utíl quando pensamos em data science por exemplo.

- Os mais conhecidos do mercado atualmente são o MongoDB, Redis e o Firebase.

## Introdução ao Mongo
MongodDb é um banco de dados NOSQL (não relacional) surgiu em 2009 e foi desenvolvido em c++. Ele utiliza documentos bem parecido com JSON, conhecido como BSON para armazenar os dados.

###  Database
Acho que já ouvimos a famosa expressão 'quebrei a base de prod' então, nossa database( base de dados ) é constituida por collections, que possui documentos( mas para frente falarei deles), geralmente num projeto, a gente possui diferentes tipos de base, para diferentes tipos de ambientes, como por exemplo: Produção, Homologação, Desenvolvimento, Testes, etc.

### Collection
Nossa collection é constituida por documentos, uma collection ( coleção ), pode ser entendida como um array ou lista, onde armazemanos os nossos documentos( recursos). Utilizando um exemplo:  Playlist seria uma collection, enquanto cada música seria um documento(objeto) contendo as informações daquela música.

### Document
E finalmente chegamos no tão esperado Document, ele é um BJSON, ou seja, nosso famoso JSON, mas que funciona um pouco diferente, permitindo mais flexibilidade. Como não poderia faltar um exemplo. Uma música, contendo todas as suas informações, como nome, artista, album, ano, etc.

### Introdução ao ORM
Um ORM é uma técnica de desenvolvimento para nós devas, conseguimos manipular de forma simples o nosso banco, sem ele precisariamos de um especialista(DBA). Nos permite fazer como por exemplo migrations( versionamento de base ) de forma simples.

### Introdução ao ORM Mongoose
O ORM Mongoose não é o banco, é uma ferramenta que como mencionado acima, facilita o nosso dia-a-dia enquanto devas, ele possui um conjunto recursos / funções que nos auxilia no desenvolvimento.

### Schema
Quando utilizamos um ORM é porque queremos por ordem na ' bagunça ', afinal como podemos salvar qualquer coisa, de qualquer jeito, seria uma loucura não? Para isso precisamos de um schema( espelho ) de como será salvo nosso documento.

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

### Model
Nossa Model ( modelo ) é a nossa representação da Collection ( coleção ), nele assim como no Array, possuimos métodos ( funções ) que nos permite realizar as operações do CRUD ( Create, Read, Update, Delete ) bem como outros recursos.

```javascript
const MusicaModel = mongoose.model('musica', MusicaSchema);
```
Obs: Não é necessário salvar como músicas, pois o ORM cria no plural por nós, que massa né :nail_care:

### ObjectId
O ObjectId é um identificador único para cada documento, ele é gerado pelo MongoDB automaticamente, podemos pensar nele como um CPF, unico por dado, é por ele que conseguimo identificar um Document para salvar ou obter um dado

## Classes | OOP (orientação a objetos) Conceitos básicos
Uma breve introdução sobre classes e objetos, para que possamos entender melhor o que o nosso ORM.

###  uso da palavra reservada new
Quando possuimos uma classe, podemos utilizar a palavra reservada `new`  para instanciar um objeto, ou seja, criar um novo documento a partir da classe. Afinal, não queremos que a musica da Anitta seja a mesma da Ludmila.

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


### Métodos
Como mencionamos em aulas passadas assim como objeto, classes possuiem métotodos, que são funções que nos auxiliam a realizar ações como por exemplo: salvar um dado. Ou nosso nosso `console.log` `.log()` é um método que permite imprimir no terminal uma mensagem de texto.

### Constructor
Nosso `constructor` é responsável por inicializar a nossa classe, ou seja, eu passo os parametros da música que quero criar e ela a constrói.

### Tipagem - Tipos primários
Na programação, existem tipos primários, que são responsáveis por definir o tipo de informação ( dado ) que estamos trabalhando, por exemplo um número de celular, ou um email que é texto, ou até mesmo se é verdadeiro ou falso que é um bolean.

 - String -> representa texto -> `""`
 - Number -> representa número  `0`
 - Boolean -> representa `true` ou `false`

## Arquitetura do Projeto
```
ReprogramaMusic  
├── api_com_mongo           
    ├─ src                       
    │  ├─ controllers            
    │  │  └─ musicController.js  
    │  ├─ database               
    │  │  └─ moogoseConnect.js      
    │  ├─ models                 
    │  │  └─ musicModel.js      
    │  ├─ routes                 
    │  │  └─ musicRouter.js      
    │  └─ app.js                 
    ├─ package-lock.json         
    ├─ package.json  
    ├─ .gitignore   
    ├─ README.md        
    └─ server.js
```

### Referências

### Trabalho entregável

