-- Consultando dados nas tabelas do curso "Realizando consultas com SQL: Joins, Views e transações" da Alura
-- Professora Danielle Oliveira
-- Fevereiro/2025

SELECT * 
FROM colaboradores;

SELECT * 
FROM fornecedores;

-- Consulta os campos selecionados das duas tabelas (colaboradores e fornecedores) e retorna os registros ÚNICOS em uma só tabela
SELECT rua, bairro, cidade, estado, cep  
FROM colaboradores
UNION 
SELECT rua, bairro, cidade, estado, cep  
FROM fornecedores;


-- Consulta os registros onde a rua = 'Rua das flores - 210' da tabela colaboradores 
SELECT * 
FROM colaboradores
WHERE rua = 'Rua das flores - 210';

-- Consulta os campos selecionados das duas tabelas (colaboradores e fornecedores) e retorna TODOS os registros em uma só tabela
SELECT nome, rua, bairro, cidade, estado, cep  
FROM colaboradores
UNION ALL 
SELECT nome, rua, bairro, cidade, estado, cep  
FROM fornecedores;
