
# ALLTAX Interview Challenge – API

Este é um servidor simples desenvolvido em Node.js com Express. Ele simula uma API REST que fornece os dados de categorias, produtos, marcas e vendas, que podem ser consumidos pelo frontend.

**Link para o repositório do FrontEnd:**  
> https://github.com/Pedro-254/ALLTAX-Interview-Chalenge

## Tecnologias

- Node.js
- Express

## Instalação e Execução

### 1. Clone o repositório:

```bash
git clone https://github.com/Pedro-254/ALLTAX-Interview-Chalenge-API.git
```

### 2. Acesse a pasta do projeto:

```bash
cd ALLTAX-Interview-Chalenge-API
```

### 3. Instale as dependências:

```bash
npm install
```

### 4. Execute o servidor:

```bash
node server.js
```

### 5. O servidor estará rodando em:

```
http://localhost:3000
```

## Endpoints disponíveis

| Método | Rota           | Descrição                          |
|--------|----------------|-------------------------------------|
| GET    | /categorias    | Retorna lista de categorias        |
| GET    | /vendas?marca= | Retorna dados de vendas por marca  |
