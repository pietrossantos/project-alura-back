import express from "express";
import routes from "./src/routes/postsRoutes.js";
// Importa o framework Express.js, que será utilizado para criar a aplicação web.

const app = express();
routes(app)
// Inicializa uma nova aplicação Express.js, que será o ponto de partida para a criação das rotas e funcionalidades da aplicação.

app.listen(3000, () => {
  console.log("Servidor escutando...");
});
// Inicia o servidor Express.js na porta 3000 e exibe uma mensagem no console indicando que o servidor está em execução.
