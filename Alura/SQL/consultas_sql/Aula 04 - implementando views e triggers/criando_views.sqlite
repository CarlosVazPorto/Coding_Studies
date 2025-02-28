-- Consultando dados nas tabelas do curso "Realizando consultas com SQL: Joins, Views e transações" da Alura
-- Professora Danielle Oliveira
-- Fevereiro/2025

-- Criando uma VIEW com alguns dos dados dos clientes 
-- Uma VIEW é uma tabela virtual, que não existe fisicamente, mas funciona como uma tabela normal 
CREATE VIEW view_cliente AS 
SELECT nome, endereco 
FROM clientes;

-- Chamando pelos dados constantes na VIEW 
SELECT * 
FROM view_cliente;

-- Criando uma VIEW com o cálculo do faturamento total por cliente 
CREATE VIEW view_valor_total_pedido AS 
SELECT c.nome, p.data_hora, SUM(ip.preco_unitario) AS valor_total_pedido
FROM clientes AS c 
JOIN pedidos AS p 
  ON c.id = p.id_cliente 
JOIN itens_pedidos AS ip 
  ON p.id = ip.id_pedido
GROUP BY c.nome;

-- Chamando os dados constantes na VIEW 
SELECT * 
FROM view_valor_total_pedido;

