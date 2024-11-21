import { getTodosOsPosts } from "../models/postModel.js";

export async function listarPosts(req, res) {
    const posts = await getTodosOsPosts(); // Chama a função `getTodosOsPosts` para obter todos os posts do banco de dados.
    res.status(200).json(posts); // Envia uma resposta HTTP com status 200 (sucesso) e o array de posts no formato JSON.
  }


