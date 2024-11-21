import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosOsPosts() {
    const db = conexao.db("imersion-instabytes"); // Seleciona o banco de dados "imersion-instabytes" dentro da conexão estabelecida.
    const colecao = db.collection("posts"); // Seleciona a coleção "posts" dentro do banco de dados.
    return colecao.find().toArray(); // Executa uma consulta para encontrar todos os documentos (posts) na coleção e retorna os resultados em um array.
  }
  