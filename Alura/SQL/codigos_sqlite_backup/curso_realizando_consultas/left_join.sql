-- Consultando dados nas tabelas do curso "Realizando consultas com SQL: Joins, Views e transações" da Alura
-- Professora Danielle Oliveira
-- Fevereiro/2025

-- Consulta inicial
SELECT * 
FROM clientes;

-- Consulta que retorna todos os clientes e seus pedidos (existentes ou não)
-- Clientes sem pedidos terão NULL como retorno 
SELECT c.nome, p.id 
FROM clientes AS c 
LEFT JOIN pedidos AS p 
ON c.id = p.id_cliente;

-- Consulta que retorna os clientes que fizeram pedidos em um determinado mês (outubro)
SELECT c.nome, p.id 
FROM clientes AS c 
LEFT JOIN pedidos AS p 
ON c.id = p.id_cliente 
WHERE strftime('%m', p.data_hora) = '10';

-- Consulta que retorna os clientes que não fizeram pedidos em um determinado mês (outubro) 
SELECT c.nome, x.id 
FROM clientes AS c 
LEFT JOIN 
	(
	SELECT p.id, p.id_cliente
	FROM pedidos AS p 
	WHERE strftime('%m', p.data_hora) = '10'
	) AS x 
ON c.id = x.id_cliente 
WHERE x.id_cliente IS NULL;

