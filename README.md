# reactjs-store-admin (work in progress)

Este projeto é um painel de administração construído com React.js para gerenciar uma loja online. Ele oferece funcionalidades para adicionar, editar e remover produtos, além de visualizar e gerenciar pedidos e clientes.

## Funcionalidades

- **Gerenciamento de Produtos:**
  - Adicionar novos produtos com detalhes como nome, descrição, preço e imagens.
  - Editar informações de produtos existentes.
  - Remover produtos do catálogo.
- **Gerenciamento de Pedidos:**
  - Visualizar lista de pedidos com detalhes como cliente, produtos, status e valor total.
  - Atualizar o status dos pedidos (por exemplo, "pendente", "enviado", "entregue").
- **Gerenciamento de Clientes:**
  - Visualizar lista de clientes com informações como nome, e-mail e histórico de pedidos.
  - Adicionar novos clientes.
  - Editar informações de clientes existentes.
  - Remover clientes.
- **Painel de Controle:**
  - Visão geral das principais métricas da loja, como número de pedidos, vendas totais e novos clientes.
- **Autenticação:**
  - Sistema de login para acesso seguro ao painel de administração.
  - Gerenciamento de usuários com diferentes níveis de permissão.

## Tecnologias Utilizadas

- **React.js:** Biblioteca JavaScript para construção de interfaces de usuário.
- **React Router:** Para navegação entre as diferentes páginas do painel de administração.
- **Axios:** Para requisições HTTP à API da loja.
- **Material-UI:** Biblioteca de componentes React para criação de interfaces modernas e responsivas.
- **Redux:** Para gerenciamento de estado da aplicação (a escolher).

## Pré-requisitos

- Node.js e npm ou yarn instalados.

## Instalação

1.  Clone o repositório:

    ```bash
    git clone https://github.com/romaopedro199/reactjs-store-admin.git
    ```

2.  Navegue até o diretório do projeto:

    ```bash
    cd reactjs-store-admin
    ```

3.  Instale as dependências:

    ```bash
    npm install ou yarn install
    ```

4.  Configure as variáveis de ambiente (se necessário):

    - Crie um arquivo `.env` na raiz do projeto.
    - Adicione as variáveis de ambiente necessárias, como a URL da API backend.

5.  Inicie o servidor de desenvolvimento:

    ```bash
    npm run dev ou yarn dev
    ```

6.  Acesse o painel de administração no seu navegador:

    ```
    http://localhost:5173/
    ```

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum bug ou tiver alguma sugestão de melhoria, por favor, abra uma issue ou envie um pull request.

## Licença

Este projeto está sob a licença [MIT](LICENSE).
