# Sistema Bancário - StefBank

## Visão Geral

StefBank é uma aplicação de sistema bancário desenvolvida com Vue.js no frontend e Java no backend. O sistema permite a gestão de usuários, contas e transações financeiras, interagindo com uma API RESTful para realizar operações básicas de um banco.

## Funcionalidades

### Usuários
- **Cadastrar Usuário**: Permite adicionar novos usuários ao sistema.
- **Consultar Usuário**: Permite visualizar as informações de um usuário específico.
- **Atualizar Usuário**: Permite editar as informações de um usuário existente.
- **Excluir Usuário**: Permite remover um usuário do sistema.
- **Listar Usuários**: Permite visualizar todos os usuários cadastrados.

### Contas
- **Cadastrar Conta**: Permite adicionar novas contas bancárias ao sistema.
- **Consultar Conta**: Permite visualizar as informações de uma conta específica.
- **Listar Contas**: Permite visualizar todas as contas cadastradas.

### Transações
- **Realizar Transferência**: Permite realizar transferências entre contas.
- **Realizar Saque**: Permite realizar saques de uma conta.
- **Realizar Depósito**: Permite realizar depósitos em uma conta.
- **Listar Transações**: Permite visualizar todas as transações realizadas.
- **Consultar Transação**: Permite visualizar as informações de uma transação específica.

## Estrutura da API

### Endpoints de Usuários
- **GET /usuarios/{id}**: Retorna os detalhes de um usuário específico.
- **PUT /usuarios/{id}**: Atualiza as informações de um usuário específico.
- **DELETE /usuarios/{id}**: Exclui um usuário específico.
- **GET /usuarios**: Retorna uma lista de todos os usuários.
- **POST /usuarios**: Cria um novo usuário.

### Endpoints de Transações
- **POST /transacoes/fazer-transferencias**: Realiza uma transferência entre contas.
- **POST /transacoes/fazer-saques**: Realiza um saque de uma conta.
- **POST /transacoes/fazer-depositos**: Realiza um depósito em uma conta.
- **GET /transacoes**: Retorna uma lista de todas as transações.
- **GET /transacoes/{id}**: Retorna os detalhes de uma transação específica.

### Endpoints de Contas
- **GET /contas**: Retorna uma lista de todas as contas.
- **POST /contas**: Cria uma nova conta.
- **GET /contas/{id}**: Retorna os detalhes de uma conta específica.

## Instalação e Configuração

### Pré-requisitos
- Node.js e npm instalados.
- Java Development Kit (JDK) instalado.
- Backend em Java configurado e em execução.

### Passo a Passo

1. **Clonar o Repositório**
   ```bash
   git clone https://github.com/seu-usuario/stefbank.git
   cd stefbank
   ```

2. **Instalar Dependências**
   ```bash
   npm install
   ```

3. **Configurar Variáveis de Ambiente**
   Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
   ```
   VUE_APP_API_URL=http://localhost:8080
   ```

4. **Executar a Aplicação**
   ```bash
   npm run serve
   ```
   A aplicação estará disponível em `http://localhost:8080`.

## Uso

### Interface do Usuário
A interface do usuário do StefBank é intuitiva e fácil de usar. Após iniciar a aplicação, você pode navegar pelas seguintes seções:

- **Usuários**: Gerencie os usuários do sistema.
- **Contas**: Gerencie as contas bancárias.
- **Transações**: Gerencie e visualize as transações financeiras.

### Exemplos de Uso

#### Adicionar um Novo Usuário
1. Navegue até a seção "Usuários".
2. Clique em "Adicionar Usuário".
3. Preencha o formulário com as informações do novo usuário.
4. Clique em "Salvar".

#### Realizar uma Transferência
1. Navegue até a seção "Transações".
2. Clique em "Fazer Transferência".
3. Preencha o formulário com os detalhes da transferência.
4. Clique em "Confirmar".

## Tecnologias Utilizadas

- **Frontend**: Vue.js
- **Backend**: Java com Spring Boot
- **Banco de Dados**: Pode ser configurado conforme a necessidade (ex. MySQL, PostgreSQL)

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões, encontrar bugs ou quiser adicionar novas funcionalidades, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Para mais informações, entre em contato
