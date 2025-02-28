-- Consultando dados nas tabelas do curso "Realizando consultas com SQL: Joins, Views e transações" da Alura
-- Professora Danielle Oliveira
-- Fevereiro/2025

-- Consultando os nomes constantes na VIEW 
SELECT nome  
FROM view_valor_total_pedido;

-- Consultando os valores constantes na VIEW qu sejam maiores do que 400 e menores do que 450
SELECT *  
FROM view_valor_total_pedido
WHERE valor_total_pedido > 400 AND valor_total_pedido < 450;

-- Consulta pedidos e valores cujo pedido tenha sido feito em janeiro 
SELECT *  
FROM view_valor_total_pedido
WHERE strftime('%m', data_hora) = '01';

