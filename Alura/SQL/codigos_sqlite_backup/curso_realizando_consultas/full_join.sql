-- Consultando dados nas tabelas do curso "Realizando consultas com SQL: Joins, Views e transações" da Alura
-- Professora Danielle Oliveira
-- Fevereiro/2025

-- Consulta utilizando o FULL (OUTER) JOIN, que retornará todos os dados constantes em ambas 
-- as tabelas: os clientes que fizeram pedidos e os pedidos associados, os clientes que não 
-- fizeram nenhum pedido, e os pedidos que não possuem nenhum cliente associado a eles 
SELECT c.nome, p.id 
FROM clientes AS c 
FULL JOIN pedidos AS p 
ON c.id = p.id_cliente;

-- Consulta que retorna somente os pedidos que não possuem um cliente associado a eles 
SELECT c.nome, p.id 
FROM clientes AS c 
FULL JOIN pedidos AS p 
ON c.id = p.id_cliente 
WHERE c.id IS NULL;

-- Consulta que retorna somente os clientes que não realizaram pedidos 
SELECT c.nome, p.id 
FROM clientes AS c 
FULL JOIN pedidos AS p 
ON c.id = p.id_cliente 
WHERE p.id IS NULL;
