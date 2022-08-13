# Car-shop

Neste projeto foi desenvolvido uma API com CRUD para gerenciar uma concessionária de veículos, utilizando o banco de dados MongoDB.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte **Instalação** para saber como implantar o projeto.

### 🔧 Instalação

> É necessário ter Docker na sua máquina local para executar os seguintes comandos.

- Rode os serviços `node` e `mongodb` com o comando `docker-compose up -d`.
- Lembre-se de parar o `mongo` se estiver usando localmente na porta padrão (`27017`), ou adapte, caso queria fazer uso da aplicação em containers
- Esses serviços irão inicializar um container chamado `car_shop` e outro chamado `car_shop_db`.
- A partir daqui você pode rodar o container `car_shop` via CLI ou abri-lo no VS Code.

> Use o comando `docker exec -it car_shop bash`.
- Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

- Use comando `npm run dev` na raiz do projeto.
- Ele vai subir sua API na porta `3001`

## 🛠️ Construído com

* [Express](https://expressjs.com/pt-br/)
* [Node](https://nodejs.org/pt-br/docs/)
* [TypeScript](https://www.typescriptlang.org/)
* [Mongoose](https://mongoosejs.com/)
