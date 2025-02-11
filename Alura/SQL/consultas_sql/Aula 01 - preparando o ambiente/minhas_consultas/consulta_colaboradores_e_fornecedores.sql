-- Consultando dados nas tabelas do curso "Realizando consultas com SQL: Joins, Views e transações" da Alura
-- Professora Danielle Oliveira
-- Fevereiro/2025

SELECT * 
FROM colaboradores;

SELECT * 
FROM fornecedores;

-- Consulta os campos selecionados das duas tabelas (colaboradores e fornecedores) e os retorna em uma única tabela
SELECT rua, bairro, cidade, estado, cep  
FROM colaboradores
UNION 
SELECT rua, bairro, cidade, estado, cep  
FROM fornecedores;

