# Podcast Menager


### Description
Um app ao estilo NetFlix, com epsódios de diversos podcasts separados por categoria,

### Domain
Podcasts 


### Features
 - Listar podcasts em sessões de categorias
   - [saúde, bodybuilder, mentalidade, humor]
 - Filtrar epsódios por nome de podcasts

## Planning


#### Feature:
  Listar podcasts em sessões de categorias

### Implementation:
 GET: retorna lista de episódios

response:

```js
[
{
    podcastName: "Flow",
    episode: "CBUM - Flow #319",
    videoId: "pQSuQmUfS30&t=5s",
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30&t=5s",
    categories: ["saúde", "esporte", "bodybuilder"]
},
{
    podcastName: "Flow",
    episode: "RUBENS BARRICHELLO - Flow #339",
    videoId: "4KDGTdiOV4I",
    cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    categories: ["esporte", "corrida"]
},
]
```

GET: retorna lista de episódios, com base em parametros fornecidos pelo client (nome do podcast)

