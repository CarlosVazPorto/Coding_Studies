-- Consultando dados nas tabelas do curso "Realizando consultas com SQL: Joins, Views e transações" da Alura
-- Professora Danielle Oliveira
-- Fevereiro/2025

-- Consulta a tabela produtos
SELECT * 
FROM produtos;

-- Insere novo produto na tabela 
INSERT INTO produtos (id, nome, descricao, preco, categoria)
VALUES 
	(31, 'Lasanha à Bolonhesa', 'Deliciosa lasanha caseira com molho bolonhesa', 12.50, 'Almoço');

-- Consulta quais produtos já foram vendidos ou não 
-- Produtos não vendidos retornarão NULL 
-- RIGHT JOIN retorna todos os itens presentes na tabela da direita (2ª) e suas possíveis correspondências com itens da tabela da esquerda (1ª)
SELECT pr.nome, ip.id_produto, ip.id_pedido 
FROM itens_pedidos AS ip
RIGHT JOIN produtos AS pr 
ON pr.id = ip.id_produto;

-- Consulta quais produtos já foram vendidos ou não em um determinado mês 
SELECT pr.nome, x.id_produto, x.id_pedido 
FROM (
	  SELECT ip.id_produto, ip.id_pedido 
      FROM pedidos AS p 
      JOIN itens_pedidos AS ip
      ON p.id = ip.id_pedido
      WHERE strftime('%m', p.data_hora) = '10'
      ) AS x
RIGHT JOIN produtos AS pr 
ON pr.id = x.id_produto;

