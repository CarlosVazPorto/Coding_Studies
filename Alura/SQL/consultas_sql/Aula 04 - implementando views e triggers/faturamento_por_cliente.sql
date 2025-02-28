-- Consultando dados nas tabelas do curso "Realizando consultas com SQL: Joins, Views e transações" da Alura
-- Professora Danielle Oliveira
-- Fevereiro/2025

-- Encontrando os valores de cada produto 
SELECT p.id, ip.quantidade, ip.preco_unitario, pr.preco  
FROM pedidos AS p
JOIN itens_pedidos AS ip 
  ON p.id = ip.id_pedido
JOIN produtos AS pr 
  ON pr.id = ip.id_produto;

-- Calculando o faturamento total dos pedidos por cliente 
SELECT c.nome AS nome_cliente, SUM(ip.preco_unitario) AS valor_total_pedido
FROM clientes AS c 
JOIN pedidos AS p 
  ON c.id = p.id_cliente 
JOIN itens_pedidos AS ip 
  ON p.id = ip.id_pedido
GROUP BY p.id, c.nome;

