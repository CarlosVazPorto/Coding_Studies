-- Consultando dados nas tabelas do curso "Realizando consultas com SQL: Joins, Views e transações" da Alura
-- Professora Danielle Oliveira
-- Fevereiro/2025

-- Consulta unindo dados das tabelas clientes e pedidos usando INNER JOIN 
-- Somente ids correspondentes em ambas as tabelas serão retornadas
SELECT c.nome, p.id, p.data_hora
FROM clientes AS c 
INNER JOIN pedidos AS p 
ON c.id = p.id_cliente;
