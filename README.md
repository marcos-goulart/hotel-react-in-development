# HOTEL-REACT

Aplicação web desenvolvida com **React + TypeScript** para um sistema de hotelaria. O projeto utiliza `styled-components` para estilização, `react-router-dom` para navegação entre páginas e `json-server` para simular uma API REST fake durante o desenvolvimento.

---

## 🚀 Scripts disponíveis

No diretório do projeto, você pode rodar:

- `npm start`
  Inicia o app em modo de desenvolvimento.
  Acesse: [http://localhost:3000](http://localhost:3000)

- `npm test`
  Inicia o runner de testes.

- `npm run build`
  Cria uma build de produção na pasta `build/`.

- `npm run lint`
  Executa o ESLint para verificar problemas no código.

- `npm run format`
  Formata o código com Prettier.

- `npm run json-server`
  Inicia o servidor fake com o `db.json` na porta 5000.

---

## 🧰 Tecnologias e Dependências

### Principais

- **React** `^18.2.0`
- **TypeScript** `^4.9.5`
- **React Router DOM** `^6.3.0`
- **styled-components** `^5.3.11`
- **styled-normalize** `^8.0.7`
- **json-server** `^0.17.4`

### Dev e Configuração

- **Prettier** `^2.8.8`
- **ESLint** com plugins:
  - `eslint-plugin-react`
  - `eslint-plugin-react-hooks`
  - `@typescript-eslint/eslint-plugin`
- **Jest / Testing Library** para testes

---

## 🌐 Navegação

A navegação entre páginas é feita utilizando `react-router-dom`, com as rotas definidas em `src/routes.tsx`.

---

## 🎨 Estilização

O projeto utiliza:

- `styled-components` para componentes com estilos encapsulados.
- `styled-normalize` para reset de CSS.
- Um tema customizado em `styles/Theme.tsx`.
- Estilo global configurado em `styles/global.ts`.

---

## 🧪 Testes

Testes são escritos usando **Jest** e **Testing Library** e ficam em arquivos como `App.test.tsx`.

---

## 🗂 Simulação de API / ainda não feito!

Utiliza `json-server` com o arquivo `db.json` como fonte de dados mock para o front-end.

Execute com:

```bash
npm run json-server
```

---

## 📦 Instalação

```bash
git clone https://github.com/seu-usuario/hotel-react.git
cd hotel-react
npm install
```

---

## 📌 Observações

- Certifique-se de criar um arquivo `.env` a partir do `.env.example`, caso necessário.
- O projeto usa configurações padronizadas do Create React App com ajustes para lint, formatação e testes.
