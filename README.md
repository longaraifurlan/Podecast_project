# 🎙️ Podcast Manager

Um aplicativo estilo **Netflix para podcasts**, com episódios organizados por categorias e filtragem por nome do podcast.

---

## 📚 Descrição

Este projeto é uma API REST feita com Node.js puro, sem frameworks, com foco no gerenciamento de podcasts.

Permite:
- Listar episódios disponíveis.
- Filtrar episódios com base no nome do podcast.
- Categorizar episódios por temas como saúde, humor, bodybuilder, mentalidade, etc.

---

## 🌐 Domínio

**Podcasts**

---

## 🚀 Funcionalidades

✅ Listar episódios com metadados (nome, capa, link, etc.)  
✅ Separar episódios por categorias  
✅ Filtrar episódios por nome de podcast  

---

## 🛠️ Tecnologias utilizadas

- Node.js (sem frameworks)
- TypeScript
- Thunder Client (para testes locais)
- YouTube como fonte de dados
- Padrão de arquitetura MVC

---

## 📦 Instalação

1. Clone o repositório:
git clone https://github.com/seu-usuario/podcast-manager.git

2. Acesse o projeto:
cd podcast-manager

3. Instale as dependências (caso tenha):
npm install

4. Crie um .env com a porta desejada:
PORT=3333

5. Inicie o servidor:
npm run dev


🔀 Rotas da API
▶️ Listar episódios
GET /api/list

📌 Retorna todos os episódios disponíveis:

Exemplo de resposta:

[
  {
    "podcastName": "Flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30&t=5s",
    "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=pQSuQmUfS30&t=5s",
    "categories": ["saúde", "esporte", "bodybuilder"]
  },
  {
    "podcastName": "Flow",
    "episode": "RUBENS BARRICHELLO - Flow #339",
    "videoId": "4KDGTdiOV4I",
    "cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    "categories": ["esporte", "corrida"]
  }
]
🔍 Filtrar por nome do podcast
GET /api/episode?p=flow

📌 Retorna episódios apenas do podcast informado.

Exemplo de chamada:

http://localhost:3333/api/episode?p=flow
🧱 Estrutura

src/
├── controllers/
├── models/
├── repositories/
├── routes/
├── services/
├── utils/
└── server.ts
🧪 Testes
Para testar a API, podes usar ferramentas como o Thunder Client (VSCode) ou o Postman. As rotas estão ativas a partir da PORT definida no .env.

📌 Futuro
 Integração com banco de dados

 Adição de autenticação via token

 Interface Web com HTML, CSS e JS

 Página de favoritos ou episódios salvos

🧑‍💻 Contribuição
Contribuições são bem-vindas! Se quiser sugerir algo, criar um pull request ou abrir uma issue, fique à vontade.

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.


