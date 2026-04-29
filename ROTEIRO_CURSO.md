# Roteiro do Curso — SyncSound

### React + Tailwind CSS na Prática

---

## Visão Geral do Projeto

O **SyncSound** é uma aplicação de descoberta musical que consome a API pública do Deezer. O aluno vai construir uma plataforma onde é possível:

- Ver as músicas mais tocadas do momento
- Filtrar por gênero musical (Pop, Rock, Rap, etc.)
- Buscar músicas ou artistas pelo nome
- Clicar em uma música e ver sua página de detalhe, com player de preview e outras músicas do mesmo artista

**Stack utilizada:** React 19, Tailwind CSS v4, React Router DOM v7, Lucide Icons, Vite

---

---

# AULA 1 — Configurando o Ambiente e Criando o Projeto

## Objetivo

Ao final desta aula, o aluno terá o ambiente de desenvolvimento funcionando e o projeto base do SyncSound criado, com Vite, Tailwind CSS, React Router e Lucide instalados.

---

## Roteiro de Fala

### Abertura

> "Seja bem-vindo ao curso de React e Tailwind CSS na prática! Ao longo dessas aulas, a gente vai construir juntos um projeto real — o **SyncSound**, uma plataforma de descoberta musical que consome dados reais da API do Deezer. Você vai poder ver as músicas mais tocadas, filtrar por gênero, pesquisar artistas e até ouvir um preview das faixas.
>
> Mas antes de codar qualquer coisa, a gente precisa preparar o ambiente. Então nessa primeira aula, vamos instalar o Node.js, configurar o VS Code, e criar o projeto base com tudo que precisamos."

---

### Parte 1 — Instalando o Node.js

> "O primeiro passo é instalar o **Node.js**. Ele é o motor que permite rodar JavaScript fora do navegador — e é também o que nos dá acesso ao **npm**, o gerenciador de pacotes que usamos para instalar bibliotecas como o React e o Tailwind.
>
> Acesse o site **nodejs.org** e baixe a versão **LTS** — que significa 'Long Term Support', ou seja, a versão mais estável e recomendada para uso em projetos.
>
> Depois de instalar, abra o terminal e rode esses dois comandos para confirmar que deu certo:"

```bash
node -v
npm -v
```

> "Se aparecer um número de versão para cada um, está tudo certo."

---

### Parte 2 — Configurando o VS Code

> "O editor que vamos usar é o **Visual Studio Code** — o VS Code. Se você ainda não tem, baixe em **code.visualstudio.com**.
>
> Depois de instalar, vou recomendar duas extensões que vão facilitar muito a nossa vida:
>
> A primeira é a **ES7+ React/Redux/React-Native snippets** — ela nos dá atalhos de teclado pra criar componentes React rapidinho, sem ter que digitar tudo na mão.
>
> A segunda é a **Tailwind CSS IntelliSense** — ela mostra sugestões automáticas das classes do Tailwind enquanto você digita, o que é muito útil porque o Tailwind tem centenas de classes.
>
> Para instalar, clique no ícone de extensões na barra lateral do VS Code, pesquise pelo nome e clique em instalar."

---

### Parte 3 — Criando o Projeto com Vite

> "Agora vamos criar o projeto. A gente vai usar o **Vite** — pronuncia-se 'Vit', em francês — que é uma ferramenta de build super rápida e moderna. Ela substitui o Create React App, que era muito lento e hoje está descontinuado.
>
> No terminal, navegue até a pasta onde você quer criar o projeto e rode:"

```bash
npm create vite@latest syncsound -- --template react
```

> "O Vite vai perguntar algumas coisas — escolha **React** e depois **JavaScript**. Feito isso, entre na pasta do projeto e instale as dependências base:"

```bash
cd syncsound
npm install
```

> "Agora vamos rodar o projeto pela primeira vez, só pra ver se está funcionando:"

```bash
npm run dev
```

> "Acesse o endereço que aparecer no terminal — geralmente `http://localhost:5173` — e você vai ver a página padrão do Vite. Ótimo, o projeto está vivo!"

---

### Parte 4 — Instalando o Tailwind CSS

> "O **Tailwind CSS** é uma biblioteca de CSS utilitário. Em vez de escrever um arquivo CSS separado com classes como `.card { background: white; padding: 16px }`, você aplica as classes diretamente no HTML, como `bg-white p-4`. Parece estranho no começo, mas você vai perceber que é muito mais rápido na prática.
>
> Para instalar no Vite, rodamos:"

```bash
npm install tailwindcss @tailwindcss/vite
```

> "Depois, abrimos o arquivo `vite.config.js` e adicionamos o plugin do Tailwind:"

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [react(), tailwindcss()],
});
```

> "E no arquivo `src/index.css`, apagamos tudo que tem lá e colocamos apenas:"

```css
@import "tailwindcss";
```

> "Pronto! O Tailwind já está configurado. Você pode testar colocando uma classe como `text-red-500` em algum elemento e ver a cor mudar."

---

### Parte 5 — Instalando o React Router

> "O **React Router** é a biblioteca que permite criar navegação entre páginas em uma aplicação React. Sem ele, quando o usuário clica em um link, a página toda recarrega — com ele, a transição é instantânea e suave, como em um app moderno.
>
> Instalação:"

```bash
npm install react-router-dom
```

> "Nessa aula não vamos configurar as rotas ainda — isso fica para a próxima. Só precisamos ter a biblioteca disponível no projeto."

---

### Parte 6 — Instalando o Lucide Icons

> "Por último, vamos instalar o **Lucide** — uma biblioteca de ícones SVG para React. Ela tem ícones lindos e leves, e é super fácil de usar: você importa o ícone pelo nome e usa como um componente.
>
> No nosso projeto, vamos usar ícones como a ondinha de áudio no Header, a setinha de voltar na página de detalhe e o ícone de play nas cards de música."

```bash
npm install lucide-react
```

---

### Parte 7 — Estrutura de Pastas

> "Antes de finalizar a aula, vamos organizar a estrutura de pastas do projeto. Dentro de `src/`, crie as seguintes pastas:"

```
src/
├── components/   ← componentes reutilizáveis
├── pages/        ← páginas da aplicação
└── services/     ← funções que chamam a API
```

> "Essa separação vai nos ajudar muito a manter o código organizado à medida que o projeto cresce. Na próxima aula, a gente começa a criar os primeiros componentes."

---

### Fechamento

> "E é isso pela primeira aula! Você instalou o Node, configurou o VS Code, criou o projeto com Vite e instalou todas as dependências que o SyncSound vai precisar. Na próxima aula, a gente vai começar a codar de verdade — criando nossa primeira página e nosso primeiro componente React."

---

---

# AULA 2 — Criando Páginas e Componentes no React

## Objetivo

Ao final desta aula, o aluno vai entender o modelo mental do React — componentes, JSX, props — e vai criar o `Header` e a página `Home` com a estrutura base do projeto.

---

## Roteiro de Fala

### Abertura

> "Na aula passada a gente configurou o ambiente. Agora a mão vai à massa. Mas antes de criar os arquivos, eu quero explicar como o React funciona de verdade — porque entender isso vai fazer toda a diferença pra você não ficar perdido quando as coisas ficarem mais complexas."

---

### Parte 1 — O que é React e como ele pensa

> "O React é uma biblioteca JavaScript para construir interfaces. A ideia central é simples: em vez de pensar em páginas inteiras, você pensa em **pedaços** — chamados de **componentes**.
>
> Pensa assim: um site tem um header, uma lista de cards, um rodapé. No React, cada um desses pedaços é um componente. E o legal é que você pode reutilizar esses componentes em qualquer lugar — assim como você reutiliza funções em programação.
>
> Cada componente React é basicamente uma **função JavaScript que retorna HTML**. Esse 'HTML dentro do JavaScript' tem um nome: **JSX**. Parece assustador, mas é muito simples na prática."

**Exemplo de componente simples:**

```jsx
const MeuBotao = () => {
    return <button>Clique aqui</button>;
};
```

> "Isso é um componente. Uma função que retorna um pedaço de interface. Para usar ele em outro lugar, é como se fosse uma tag HTML:"

```jsx
<MeuBotao />
```

---

### Parte 2 — Props: passando dados para componentes

> "Mas e se o botão precisar de um texto diferente em cada lugar? É aí que entram as **props** — abreviação de 'properties', ou propriedades.
>
> Props são como os parâmetros de uma função. Você passa dados de fora para dentro do componente:"

```jsx
const MeuBotao = ({ texto }) => {
  return <button>{texto}</button>;
};

// Usando:
<MeuBotao texto="Buscar" />
<MeuBotao texto="Cancelar" />
```

> "Percebe? O mesmo componente, comportamentos diferentes, dependendo do que você passa. Essa é a essência do React."

---

### Parte 3 — Configurando o App.jsx e o main.jsx

> "Agora vamos entender como o projeto se monta. O arquivo `main.jsx` é o ponto de entrada — é ele que injeta toda a aplicação dentro do HTML. Ele pega o `div` com `id='root'` no `index.html` e renderiza o componente `App` dentro dele."

**`src/main.jsx`:**

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>,
);
```

> "Repara que envolvemos tudo com o `BrowserRouter` do React Router — isso habilita a navegação entre páginas na nossa aplicação. O `StrictMode` é um modo de desenvolvimento que ajuda a encontrar problemas no código.
>
> Agora o `App.jsx` é o componente raiz — é ele que define quais componentes aparecem em quais rotas:"

**`src/App.jsx`:**

```jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TrackDetail from "./pages/TrackDetail";
import Header from "./components/Header";

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/track/:id" element={<TrackDetail />} />
            </Routes>
        </>
    );
};

export default App;
```

> "O `Header` aparece em todas as páginas — por isso fica fora das `Routes`. As rotas definem: quando o endereço for `/`, mostra o componente `Home`. Quando for `/track/123`, mostra o `TrackDetail`. O `:id` é um parâmetro dinâmico — na próxima aula a gente vai usar ele para buscar os dados da música certa.
>
> O fragmento vazio `<>...</>` serve pra agrupar os elementos sem adicionar uma `div` desnecessária no HTML."

---

### Parte 4 — Criando o componente Header

> "Vamos criar o primeiro componente do projeto: o `Header`. Crie o arquivo `src/components/Header.jsx`.
>
> A extensão `.jsx` indica que é um arquivo React com JSX — não é obrigatório, mas é uma boa prática pra deixar claro o que o arquivo faz."

**`src/components/Header.jsx`:**

```jsx
import { AudioWaveform } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950 backdrop-blur-sm border-b border-slate-800">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center">
                <Link
                    to="/"
                    className="text-xl font-bold text-slate-200 tracking-tight flex gap-2 items-center"
                >
                    <AudioWaveform size={32} />
                    SyncSound
                </Link>
            </div>
        </header>
    );
};

export default Header;
```

> "Vamos destrinchar isso:
>
> - `AudioWaveform` é um ícone do Lucide — importamos pelo nome e usamos como componente. O `size={32}` é uma prop que define o tamanho em pixels.
> - `Link` é o componente de navegação do React Router — funciona como um `<a>`, mas sem recarregar a página. O `to='/'` define o destino.
> - As classes como `fixed top-0 left-0 right-0` são classes do Tailwind — elas deixam o header fixo no topo da tela. `bg-slate-950` é a cor de fundo escura, `border-b border-slate-800` é a borda inferior, e assim por diante.
>
> O `export default` no final é necessário para que outros arquivos possam importar esse componente."

---

### Parte 5 — Criando a página Home (estrutura base)

> "Agora vamos criar a página `Home`. Por enquanto ela vai ter apenas a estrutura — sem dados reais, sem estado. Os dados chegam na próxima aula.
>
> Crie o arquivo `src/pages/Home.jsx`:"

**`src/pages/Home.jsx` (versão estrutural):**

```jsx
const Home = () => {
    return (
        <main className="max-w-6xl mx-auto px-4 pt-24 pb-12">
            <form className="flex gap-2 mb-6">
                <input
                    type="text"
                    placeholder="Buscar músicas ou artistas..."
                    className="flex-1 bg-slate-800 border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-300 placeholder:text-slate-400"
                />
                <button
                    type="submit"
                    className="bg-orange-400 hover:bg-orange-300 text-slate-950 font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
                >
                    Buscar
                </button>
            </form>

            <p className="text-slate-400 text-center py-20">
                As músicas vão aparecer aqui...
            </p>
        </main>
    );
};

export default Home;
```

> "O `pt-24` no `main` é um padding-top grande — porque o nosso header é fixo, então o conteúdo precisa começar abaixo dele.
>
> O `max-w-6xl mx-auto` centraliza o conteúdo na tela com uma largura máxima — é um padrão de layout muito comum.
>
> Salva o arquivo, abre o navegador e você já deve ver o header e a barra de pesquisa funcionando visualmente."

---

### Fechamento

> "Muito bem! Nessa aula você entendeu como o React pensa com componentes e props, criou o Header do projeto e montou a estrutura da página Home. Na próxima aula, a gente vai aprender a consumir uma API e conectar dados reais a essa interface."

---

---

# AULA 3 — Consumindo a API do Deezer

## Objetivo

Ao final desta aula, o aluno vai entender o que é uma API, como o `fetch` funciona, e vai criar todas as funções do arquivo `services/api.js`, testando cada uma no navegador.

---

## Roteiro de Fala

### Abertura

> "Na aula de hoje, a gente vai dar vida ao projeto. Até agora temos uma interface bonita mas com dados fictícios. A partir de agora, vamos buscar músicas reais da internet usando a **API do Deezer**."

---

### Parte 1 — O que é uma API?

> "Imagine que você tem um aplicativo de previsão do tempo. Ele não vai ficar verificando a temperatura lá fora sozinho — ele pede essas informações para alguém que já tem esses dados. Esse 'alguém' é a **API**.
>
> **API** significa _Application Programming Interface_ — é basicamente um canal de comunicação entre sistemas. O Deezer tem um banco de dados gigante de músicas, e eles disponibilizam uma API pública para que aplicativos possam acessar essas informações.
>
> A forma de comunicação é simples: você manda uma **requisição HTTP** para um endereço (chamado de _endpoint_), e o servidor te responde com dados em formato **JSON**.
>
> Por exemplo, esse endereço:"

```
https://api.deezer.com/chart/0/tracks?limit=40
```

> "...retorna as 40 músicas mais ouvidas no momento. Se você abrir esse link no navegador, vai ver um monte de dados em formato JSON — que é basicamente um objeto JavaScript com as informações das músicas.
>
> No nosso projeto, a API vai alimentar tudo: a lista inicial, o filtro por gênero, a busca, e a página de detalhe de cada música."

---

### Parte 2 — Criando o arquivo de serviços

> "Para manter o código organizado, vamos centralizar todas as chamadas à API em um único arquivo: `src/services/api.js`. Assim, se o endereço da API mudar, a gente muda em um só lugar."

**`src/services/api.js`:**

```js
const BASE_URL = import.meta.env.DEV ? "/deezer" : "https://api.deezer.com";
```

> "Essa primeira linha é importante: em desenvolvimento, usamos `/deezer` em vez da URL real. Isso é porque a API do Deezer bloqueia requisições de outros domínios no navegador — o que se chama de **CORS**. Para resolver isso localmente, configuramos um **proxy** no Vite que redireciona `/deezer` para `https://api.deezer.com`.
>
> Quando o projeto for publicado em produção, usamos a URL real diretamente.
>
> No arquivo `vite.config.js`, adicione a configuração do proxy:"

```js
server: {
  proxy: {
    '/deezer': {
      target: 'https://api.deezer.com',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/deezer/, '')
    }
  }
}
```

---

### Parte 3 — Os gêneros musicais

> "Antes das funções, vamos definir a lista de gêneros que vamos usar nos filtros. Cada gênero tem um `id` — que é o código que a API do Deezer usa para identificar aquele gênero — e um `name` que é o nome que vamos exibir na tela:"

```js
export const GENRES = [
    { id: 0, name: "Todos" },
    { id: 132, name: "Pop" },
    { id: 116, name: "Rap / Hip Hop" },
    { id: 152, name: "Rock" },
    { id: 113, name: "Dance" },
    { id: 165, name: "R&B / Soul" },
    { id: 106, name: "Eletrônica" },
    { id: 85, name: "Alternativo" },
];
```

> "Exportamos essa constante para que outros componentes possam importá-la. O `GenreFilter` vai usar essa lista para renderizar os botões de filtro."

---

### Parte 4 — As funções de busca

> "Agora as funções em si. Todas elas seguem o mesmo padrão: são funções **assíncronas** que usam o `fetch` para buscar dados, verificam se deu erro, e retornam os dados tratados."

#### `fetchTopTracks` — músicas em alta

```js
export const fetchTopTracks = async () => {
    const response = await fetch(`${BASE_URL}/chart/0/tracks?limit=40`);
    if (!response.ok) throw new Error("Erro ao buscar músicas em alta");
    const data = await response.json();
    return data.data;
};
```

> "Alguns pontos importantes aqui:
>
> - `async/await` é a sintaxe moderna para lidar com operações assíncronas — coisas que levam tempo, como buscar dados na internet. O `await` pausa a execução até a resposta chegar.
> - `response.ok` verifica se o servidor respondeu com sucesso (código 200). Se não, lançamos um erro.
> - `response.json()` converte a resposta para um objeto JavaScript.
> - A API retorna um objeto com uma propriedade `data` que é a lista de músicas — por isso fazemos `return data.data`."

#### `searchTracks` — busca por texto

```js
export const searchTracks = async (query) => {
    const response = await fetch(
        `${BASE_URL}/search?q=${encodeURIComponent(query)}&limit=40`,
    );
    if (!response.ok) throw new Error("Erro ao buscar músicas");
    const data = await response.json();
    return data.data;
};
```

> "O `encodeURIComponent` garante que caracteres especiais no texto de busca — como espaços, acentos ou `&` — não quebrem a URL."

#### `fetchTracksByGenre` — músicas por gênero

```js
export const fetchTracksByGenre = async (genreId) => {
    const response = await fetch(
        `${BASE_URL}/chart/${genreId}/tracks?limit=40`,
    );
    if (!response.ok) throw new Error("Erro ao buscar por gênero");
    const data = await response.json();
    return data.data;
};
```

#### `fetchTrackById` — detalhes de uma música

```js
export const fetchTrackById = async (id) => {
    const response = await fetch(`${BASE_URL}/track/${id}`);
    if (!response.ok) throw new Error("Erro ao buscar detalhes da faixa");
    return response.json();
};
```

> "Aqui retornamos `response.json()` diretamente — sem o `.data` — porque esse endpoint retorna o objeto da música direto, não dentro de um array."

#### `fetchArtistTopTracks` — músicas de um artista

```js
export const fetchArtistTopTracks = async (artistId) => {
    const response = await fetch(`${BASE_URL}/artist/${artistId}/top?limit=10`);
    if (!response.ok) throw new Error("Erro ao buscar músicas do artista");
    const data = await response.json();
    return data.data;
};
```

> "Essa função vai ser usada na página de detalhe para mostrar 'Mais músicas de [Artista]'."

---

### Parte 5 — Testando as funções

> "Antes de seguir, vamos testar se as funções estão funcionando. Você pode importar uma delas temporariamente no `App.jsx` e chamar no console:"

```jsx
import { fetchTopTracks } from "./services/api";

// dentro do componente, de forma temporária:
fetchTopTracks().then((data) => console.log(data));
```

> "Abra o console do navegador (F12) e você deve ver um array de 40 objetos de músicas com título, artista, álbum, duração, preview e muito mais. Isso confirma que a comunicação com a API está funcionando.
>
> Depois de testar, remove esse código temporário."

---

### Fechamento

> "Excelente trabalho! Você aprendeu o que é uma API, como usar `async/await` com `fetch`, e criou todas as funções que o SyncSound vai precisar para funcionar. Na próxima e última aula, vamos conectar tudo isso à interface — finalizando a Home e construindo a página de detalhe completa."

---

---

# AULA 4 — Finalizando os Componentes e Páginas

## Objetivo

Ao final desta aula, o projeto SyncSound estará 100% funcional: com a página Home completa (estado, busca, filtro por gênero, lista de músicas) e a página TrackDetail com player de áudio e músicas relacionadas.

---

## Roteiro de Fala

### Abertura

> "Chegamos à reta final! Nessa aula a gente vai conectar tudo que fizemos — a interface da aula 2 e as funções da aula 3 — e finalizar o projeto completo. Vamos criar quatro arquivos: os componentes `GenreFilter`, `TrackCard` e `TrackList`, e completar a página `TrackDetail`."

---

### Parte 1 — useState e useEffect (conceitos antes de codar)

> "Antes de partir pro código, preciso explicar dois conceitos fundamentais do React que vamos usar bastante agora: `useState` e `useEffect`.
>
> **useState** serve para guardar dados que podem mudar na interface. Por exemplo: o texto que o usuário digitou na busca, ou a lista de músicas que veio da API. Quando o estado muda, o React automaticamente re-renderiza o componente com os novos dados.
>
> A sintaxe é assim:"

```jsx
const [valor, setValor] = useState(valorInicial);
```

> "`valor` é o dado em si, `setValor` é a função que você chama pra atualizar ele.
>
> **useEffect** serve para executar código _em resposta a algo_ — como quando um componente aparece na tela, ou quando um valor muda. É o lugar certo para chamar a API:
> quando o componente montar, busca os dados. Quando o gênero mudar, busca de novo."

```jsx
useEffect(() => {
    // código que executa quando o componente aparece
    fetchTopTracks().then((data) => setTracks(data));
}, []); // array de dependências — vazio = executa só uma vez
```

---

### Parte 2 — Componente GenreFilter

> "O `GenreFilter` recebe o gênero ativo e uma função de callback, e renderiza um botão para cada gênero da nossa lista.
>
> Crie `src/components/GenreFilter.jsx`:"

```jsx
import { GENRES } from "../services/api";

const GenreFilter = ({ activeGenre, onGenreChange }) => {
    return (
        <div className="flex gap-2 flex-wrap">
            {GENRES.map((genre) => (
                <button
                    key={genre.id}
                    onClick={() => onGenreChange(genre.id)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                        activeGenre === genre.id
                            ? "bg-orange-400 text-zinc-950"
                            : "bg-slate-800 text-slate-300 hover:bg-slate-700 cursor-pointer"
                    }`}
                >
                    {genre.name}
                </button>
            ))}
        </div>
    );
};

export default GenreFilter;
```

> "Dois detalhes importantes aqui:
>
> O `.map()` percorre o array de gêneros e retorna um botão pra cada um — isso é como o React renderiza listas. O `key={genre.id}` é obrigatório quando renderizamos listas — o React usa ele para identificar qual elemento mudou.
>
> A classe do botão é **dinâmica** — usamos template literal com ternário para aplicar classes diferentes dependendo se o gênero é o ativo ou não. Quando `activeGenre === genre.id`, o botão fica laranja. Caso contrário, fica cinza."

---

### Parte 3 — Componente TrackCard

> "O `TrackCard` é o card de música — vai aparecer em várias partes do projeto. Ele recebe um objeto `track` como prop e exibe a capa, o título, o artista e a duração.
>
> Crie `src/components/TrackCard.jsx`:"

```jsx
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

const TrackCard = ({ track }) => {
    const cover =
        track.album?.cover_medium ||
        "https://placehold.co/250x250/27272a/71717a?text=Sem+Capa";

    const duration = track.duration
        ? `${Math.floor(track.duration / 60)}:${String(track.duration % 60).padStart(2, "0")}`
        : null;

    return (
        <Link
            to={`/track/${track.id}`}
            className="group block bg-slate-800 rounded-xl overflow-hidden hover:ring-2 hover:ring-orange-400 transition-all duration-200"
        >
            <div className="relative aspect-square overflow-hidden">
                <img
                    src={cover}
                    alt={track.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-950/50 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Play size={32} />
                </div>
                {duration && (
                    <span className="absolute bottom-2 right-2 bg-slate-950/70 text-slate-300 text-xs px-2 py-0.5 rounded-full">
                        {duration}
                    </span>
                )}
            </div>
            <div className="p-3">
                <h3 className="text-sm font-medium text-slate-200 line-clamp-1">
                    {track.title}
                </h3>
                <p className="text-xs text-rose-400 mt-0.5 line-clamp-1">
                    {track.artist?.name}
                </p>
                <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                    {track.album?.title}
                </p>
            </div>
        </Link>
    );
};

export default TrackCard;
```

> "Alguns pontos de destaque:
>
> O `?.` é o **optional chaining** — ele evita erros quando `track.album` pode ser `undefined`. Em vez de dar erro, retorna `undefined` e cai no fallback `||`.
>
> `Math.floor(track.duration / 60)` converte os segundos para minutos. `padStart(2, '0')` garante que segundos menores que 10 apareçam com zero na frente — como `3:07` em vez de `3:7`.
>
> O `group` e `group-hover:` são utilitários do Tailwind para aplicar estilos no filho quando o pai é hoverado. O ícone de play aparece sobre a capa só quando você passa o mouse no card."

---

### Parte 4 — Componente TrackList

> "O `TrackList` é simples — recebe o array de músicas e renderiza um `TrackCard` pra cada uma. Ele também cuida do caso em que não há músicas:"

```jsx
import TrackCard from "./TrackCard";

const TrackList = ({ tracks }) => {
    if (tracks.length === 0) {
        return (
            <p className="text-center text-slate-300 py-20">
                Nenhuma música encontrada.
            </p>
        );
    }
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {tracks.map((track) => (
                <TrackCard key={track.id} track={track} />
            ))}
        </div>
    );
};

export default TrackList;
```

> "O `grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5` é o Tailwind sendo responsivo. Em celular mostra 2 colunas, em tablet 3, em desktop 4 ou 5. O prefixo `sm:`, `md:`, `lg:` define a partir de qual tamanho de tela a classe é aplicada."

---

### Parte 5 — Completando a página Home

> "Agora vamos finalizar a página Home com estado, efeitos e as funções da API. Atualize `src/pages/Home.jsx`:"

```jsx
import { useState, useEffect } from "react";
import TrackList from "../components/TrackList";
import GenreFilter from "../components/GenreFilter";
import {
    fetchTopTracks,
    fetchTracksByGenre,
    searchTracks,
} from "../services/api";

const Home = () => {
    const [tracks, setTracks] = useState([]);
    const [search, setSearch] = useState("");
    const [activeGenre, setActiveGenre] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (search.trim()) return;
        loadByGenre(activeGenre);
    }, [activeGenre]);

    const loadByGenre = async (genreId) => {
        try {
            setLoading(true);
            setError(null);
            const data =
                genreId === 0
                    ? await fetchTopTracks()
                    : await fetchTracksByGenre(genreId);
            setTracks(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!search.trim()) {
            loadByGenre(activeGenre);
            return;
        }
        try {
            setLoading(true);
            setError(null);
            const data = await searchTracks(search);
            setTracks(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGenreChange = (genreId) => {
        setActiveGenre(genreId);
        setSearch("");
    };

    return (
        <main className="max-w-6xl mx-auto px-4 pt-24 pb-12">
            <form onSubmit={handleSearch} className="flex gap-2 mb-6">
                <input
                    type="text"
                    placeholder="Buscar músicas ou artistas..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 bg-slate-800 border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-300 placeholder:text-slate-400"
                />
                <button
                    type="submit"
                    className="bg-orange-400 hover:bg-orange-300 text-slate-950 font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
                >
                    Buscar
                </button>
            </form>

            <div className="mb-8">
                <GenreFilter
                    activeGenre={activeGenre}
                    onGenreChange={handleGenreChange}
                />
            </div>

            {loading && (
                <p className="text-center text-slate-300 py-20">
                    Carregando...
                </p>
            )}
            {error && (
                <p className="text-center text-red-300 py-20">Erro: {error}</p>
            )}
            {!loading && !error && <TrackList tracks={tracks} />}
        </main>
    );
};

export default Home;
```

> "Vamos entender o fluxo:
>
> Quando a página carrega pela primeira vez, o `useEffect` dispara — como o `activeGenre` começa como 0, ele chama `loadByGenre(0)`, que busca as músicas em alta.
>
> Quando o usuário clica em um gênero, `handleGenreChange` atualiza o `activeGenre` — isso faz o `useEffect` disparar de novo, buscando as músicas do gênero escolhido. O `setSearch('')` limpa a busca quando troca de gênero.
>
> O `try/catch/finally` garante que, mesmo se der erro, o `loading` volta pra `false`. Assim a interface nunca fica travada numa tela de carregamento.
>
> O input é **controlado**: `value={search}` e `onChange` mantêm o estado do React sincronizado com o que o usuário digita — esse é o padrão React para inputs."

---

### Parte 6 — Página TrackDetail

> "A última peça do projeto. A página de detalhe mostra a capa ampliada, informações da música e um player de preview.
>
> Crie `src/pages/TrackDetail.jsx`:"

```jsx
import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchTrackById, fetchArtistTopTracks } from "../services/api";
import TrackCard from "../components/TrackCard";
import { ArrowLeft, Pause, Play } from "lucide-react";

const TrackDetail = () => {
    const { id } = useParams();
    const [track, setTrack] = useState(null);
    const [related, setRelated] = useState([]);
    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const audioRef = useRef();

    useEffect(() => {
        const loadTrack = async () => {
            try {
                setLoading(true);
                setError(null);
                setPlaying(false);
                const data = await fetchTrackById(id);
                setTrack(data);
                const artistTracks = await fetchArtistTopTracks(data.artist.id);
                setRelated(
                    artistTracks.filter((t) => t.id !== data.id).slice(0, 5),
                );
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        loadTrack();
    }, [id]);

    useEffect(() => {
        if (audioRef.current) audioRef.current.volume = volume;
    }, [volume]);

    const togglePlay = () => {
        if (!audioRef.current) return;
        if (playing) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setPlaying(!playing);
    };

    if (loading)
        return (
            <p className="text-center text-slate-300 pt-32">Carregando...</p>
        );
    if (error)
        return <p className="text-center text-red-300 pt-32">Erro: {error}</p>;

    const cover =
        track.album?.cover_big ||
        "https://placehold.co/500x500/27272a/71717a?text=Sem+Capa";
    const duration = track.duration
        ? `${Math.floor(track.duration / 60)}:${String(track.duration % 60).padStart(2, "0")}`
        : null;

    return (
        <main className="max-w-4xl mx-auto px-4 pt-24 pb-12">
            <Link
                to="/"
                className="inline-flex items-center gap-1 text-sm text-slate-300 hover:text-slate-100 mb-8 transition-colors"
            >
                <ArrowLeft size={16} />
                Voltar
            </Link>

            <div className="flex flex-col sm:flex-row items-center gap-8">
                <div className="shrink-0">
                    <img
                        src={cover}
                        alt={track.title}
                        className="w-48 rounded-xl"
                    />
                </div>
                <div className="sm:flex-1">
                    <p className="text-xs text-rose-400 uppercase tracking-widest mb-1">
                        {track.album?.title}
                    </p>
                    <h1 className="text-2xl font-bold text-slate-200 leading-tight">
                        {track.title}
                    </h1>
                    <p className="text-fuchsia-400 text-sm mt-1">
                        {track.artist?.name}
                    </p>
                    {duration && (
                        <p className="text-slate-400 text-sm mt-2">
                            Duração: {duration}
                        </p>
                    )}

                    {track.preview ? (
                        <div className="mt-6">
                            <p className="text-xs text-slate-300 mb-2">
                                Preview (30 segundos)
                            </p>
                            <audio
                                ref={audioRef}
                                src={track.preview}
                                onEnded={() => setPlaying(false)}
                            />
                            <button
                                onClick={togglePlay}
                                className="flex items-center gap-3 bg-orange-400 hover:bg-orange-300 text-slate-950 font-semibold px-6 py-2.5 rounded-full transition-colors cursor-pointer"
                            >
                                {playing ? <Pause /> : <Play />}
                            </button>
                        </div>
                    ) : (
                        <p className="text-slate-300 text-sm mt-6">
                            Preview não disponível.
                        </p>
                    )}
                </div>
            </div>

            {related.length > 0 && (
                <div className="mt-12">
                    <h2 className="text-lg font-semibold text-slate-200 mb-4">
                        Mais de {track.artist?.name}
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                        {related.map((t) => (
                            <TrackCard key={t.id} track={t} />
                        ))}
                    </div>
                </div>
            )}
        </main>
    );
};

export default TrackDetail;
```

> "Alguns destaques desta página:
>
> `useParams()` captura o `:id` da URL — se o endereço for `/track/1234`, `id` vai ser `'1234'`. Usamos ele para buscar a música certa.
>
> `useRef()` cria uma referência direta ao elemento de áudio do HTML. É assim que controlamos o player: `audioRef.current.play()` e `audioRef.current.pause()`. Com o `useState` sozinho não conseguiríamos isso — precisamos de acesso direto ao elemento.
>
> O segundo `useEffect` sincroniza o volume: sempre que o estado `volume` muda, atualiza o volume do player de áudio.
>
> O `filter((t) => t.id !== data.id)` remove a música atual da lista de relacionados — pra não aparecer 'Mais de X' com a própria música que você já está vendo."

---

### Fechamento

> "E com isso, o SyncSound está completo! Parabéns — você construiu uma aplicação React funcional do zero, com consumo de API real, navegação entre páginas, componentes reutilizáveis e um player de áudio.
>
> Ao longo do curso você aprendeu como configurar um projeto moderno com Vite, como o React pensa em componentes e estado, como consumir APIs com fetch e async/await, e como o Tailwind acelera a estilização.
>
> Essas são as bases de praticamente qualquer projeto React do mercado. A partir daqui, o caminho é continuar praticando — pegue o projeto, tente adicionar novas funcionalidades, mude o visual, conecte outra API. O aprendizado de programação é na prática."

---

---

## Resumo das Dependências

| Pacote                              | Versão | Para que serve               |
| ----------------------------------- | ------ | ---------------------------- |
| `react` + `react-dom`               | ^19    | A biblioteca em si           |
| `vite` + `@vitejs/plugin-react`     | ^8     | Build tool e servidor de dev |
| `tailwindcss` + `@tailwindcss/vite` | ^4     | Estilização utilitária       |
| `react-router-dom`                  | ^7     | Navegação entre páginas      |
| `lucide-react`                      | ^1.3   | Ícones SVG                   |

## Estrutura Final do Projeto

```
src/
├── components/
│   ├── GenreFilter.jsx   ← botões de filtro por gênero
│   ├── Header.jsx        ← barra de navegação fixa
│   ├── TrackCard.jsx     ← card individual de música
│   └── TrackList.jsx     ← grade de cards
├── pages/
│   ├── Home.jsx          ← página principal com busca e filtros
│   └── TrackDetail.jsx   ← página de detalhe com player
├── services/
│   └── api.js            ← todas as funções de chamada à API
├── App.jsx               ← configuração de rotas
├── main.jsx              ← ponto de entrada
└── index.css             ← import do Tailwind
```
