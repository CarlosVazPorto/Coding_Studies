-- Minhas tabelas para o curso "Realizando consultas com SQL: Joins, Views e transações" da Alura
-- Professora Danielle Oliveira
-- Janeiro/2025

CREATE TABLE produtos (
  id TEXT PRIMARY KEY,
  nome VARCHAR(255),
  descricao VARCHAR(255),
  preco DECIMAL(10,2),
  categoria VARCHAR(50)
);

CREATE TABLE colaboradores (
  id TEXT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  cargo VARCHAR(100),
  data_contratacao DATE,
  telefone VARCHAR(20),
  email VARCHAR(100),
  rua VARCHAR(100) NOT NULL,
  bairro VARCHAR(100) NOT NULL,
  cidade VARCHAR(100) NOT NULL,
  estado VARCHAR(2) NOT NULL,
  cep VARCHAR(8) NOT NULL
);

CREATE TABLE fornecedores (
  id TEXT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  contato VARCHAR(100) NOT NULL,
  telefone VARCHAR(20),
  email VARCHAR(100),
  rua VARCHAR(100) NOT NULL,
  bairro VARCHAR(100) NOT NULL,
  cidade VARCHAR(100) NOT NULL,
  estado VARCHAR(2) NOT NULL,
  cep VARCHAR(8) NOT NULL
);

