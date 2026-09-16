# Full Stack JWT Auth

> Aplicação fullstack de autenticação e autorização utilizando **Spring Boot, Spring Security, JWT/RSA e React**.

Implementa um fluxo completo de **autenticação e autorização segura** entre uma API RESTful e uma aplicação React.

O projeto utiliza **Spring Security, OAuth2, JWT assinado com chaves RSA e controle de acesso baseado em roles**, demonstrando práticas de segurança da informação, separação de responsabilidades e integração frontend-backend.

## Tecnologias

### Backend

* Java 17
* Spring Boot 3.5.6
* Spring Security
* Spring Authorization Server / OAuth2
* Spring Data JPA
* MySQL
* JWT com assinatura RSA
* Lombok
* Springdoc OpenAPI / Swagger
* Maven

### Frontend

* React 19
* Vite
* React Router 7
* Bootstrap 5
* Lucide Icons
* JavaScript

## Funcionalidades

* Registro de usuários
* Autenticação utilizando JWT
* Assinatura de tokens com par de chaves RSA
* Autorização baseada em roles (`USER` / `ADMIN`)
* Rotas e endpoints protegidos
* Listagem de usuários
* Integração frontend-backend via API RESTful
* Configuração de CORS para ambiente de desenvolvimento
* Documentação da API com Swagger / OpenAPI
* Persistência de usuários utilizando Spring Data JPA e MySQL

## Como rodar o projeto

### Pré-requisitos

* Java 17+
* Maven
* Node.js
* MySQL

### Backend

Clone o repositório e entre na pasta do backend:

```bash
git clone https://github.com/seu-usuario/fullstack-jwt-auth.git
cd fullstack-jwt-auth/backend
```

Crie o arquivo:

```text
src/main/resources/application.properties
```

Configure as propriedades do ambiente local, incluindo a conexão com o MySQL e as configurações necessárias para autenticação.

Execute a aplicação:

```bash
./mvnw spring-boot:run
```

O backend será executado na porta padrão do Spring Boot:

```text
http://localhost:8080
```

A documentação da API estará disponível pelo Swagger, conforme a configuração do projeto.

### Frontend

Em outro terminal:

```bash
cd frontend
npm install
npm run dev
```

O frontend será executado pelo Vite em:

```text
http://localhost:5173
```

## Arquitetura

A aplicação utiliza uma arquitetura separada entre **frontend e backend**, permitindo que o React consuma os recursos disponibilizados pela API RESTful.

### Fluxo de autenticação

```text
┌─────────────┐
│   React     │
└──────┬──────┘
       │
       │ POST /auth/register
       ▼
┌─────────────┐
│ Spring Boot │
└─────────────┘

       │
       │ POST /auth/login
       ▼
┌─────────────────────┐
│ Spring Security     │
│ OAuth2 / JWT / RSA  │
└──────────┬──────────┘
           │
           │ JWT assinado
           ▼
┌─────────────────────┐
│       React         │
└──────────┬──────────┘
           │
           │ Authorization: Bearer <token>
           ▼
┌─────────────────────┐
│  Rotas protegidas   │
│     USER / ADMIN    │
└─────────────────────┘
```

O fluxo principal consiste em:

1. O usuário realiza o **registro**.
2. O usuário envia suas credenciais para o **login**.
3. O backend autentica as credenciais e emite um **JWT assinado com RSA**.
4. O frontend utiliza o token nas requisições autenticadas.
5. O **Spring Security** valida o token e as permissões do usuário.
6. O acesso aos endpoints é controlado de acordo com as roles `USER` e `ADMIN`.

[LinkedIn](https://www.linkedin.com/in/cesarfcg) · [GitHub](https://github.com/cesarfcg)
