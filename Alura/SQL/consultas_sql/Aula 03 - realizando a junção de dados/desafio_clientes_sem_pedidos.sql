-- Consultando quais clientes cadastrados ainda não realizaram pedidos na loja, exercício proposto no curso "Realizando consultas com SQL: Joins, Views e transações" da Alura
-- Professora Danielle Oliveira
-- Fevereiro/2025

-- Consulta utilizando RIGHT JOIN que retorna todos os clientes (tendo ou não feito pedidos) 
SELECT * 
FROM Pedidos AS p 
RIGHT JOIN Clientes AS c 
ON c.ID = p.IDcliente;

-- Consulta que retorna os nomes dos clientes que não fizeram pedidos (IDcliente é NULL na tabela Pedidos) 
SELECT c.Nome 
FROM Pedidos AS p 
RIGHT JOIN Clientes AS c 
ON c.ID = p.IDcliente 
WHERE p.IDcliente IS NULL;
