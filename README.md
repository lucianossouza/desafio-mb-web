# Desafio Mercado Bitcoin Web

## Como iniciar este projeto

Na pasta raiz execute o comando para instalar as dependências:

```sh
npm install
```

O próximo comando executará a aplicação frontend na url `http://localhost:5173/`:

```sh
npm run dev
```

Para executar o backend **é necessário abrir um novo terminal**, entrar na pasta `backend` a partir da pasta raiz do projeto, instalar as dependências e executá-lo:

```sh
cd backend
npm install
node index.js
```

O backend será executado na url `http://localhost:3000/`

## Como iniciar este projeto no servidor backend

Após configurado todo o projeto seguindo as etapas da seção anterior, abra um novo terminal e gere o build do projeto a partir da pasta raiz:

```sh
npm run build
```

Deve ser gerada uma pasta `dist`. No terminal onde o projeto backend está sendo executado, encerre a aplicação e a reinicie:

```sh
node index.js
```

Acesse a url `http://localhost:3000/registration` para visualizar o arquivo html no servidor.
