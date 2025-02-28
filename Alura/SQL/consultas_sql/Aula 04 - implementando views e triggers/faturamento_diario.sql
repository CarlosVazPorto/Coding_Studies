-- Consultando dados nas tabelas do curso "Realizando consultas com SQL: Joins, Views e transações" da Alura
-- Professora Danielle Oliveira
-- Fevereiro/2025

-- Consulta data e faturamento diário 
SELECT DATE(data_hora) AS dia, SUM(ip.preco_unitario) AS faturamento_diario 
FROM pedidos AS p 
JOIN itens_pedidos AS ip 
ON p.id = ip.id_pedido 
GROUP By dia
ORDER BY dia;

-- Criando a tabela faturamento_diario 
CREATE TABLE faturamento_diario (
  dia DATE,
  faturamento_total DECIMAL(10, 2)
  )

-- Cria TRIGGER que insere dados na tabela fatfaturamento_diario 
CREATE TRIGGER calcula_faturamento_diario 
AFTER INSERT ON itens_pedidos 
FOR EACH ROw 
BEGIN 
  DELETE FROM faturamento_diario;
  INSERT INTO faturamento_diario (dia, faturamento_total)
  SELECT DATE(data_hora) AS dia, SUM(ip.preco_unitario) AS faturamento_diario 
  FROM pedidos AS p 
  JOIN itens_pedidos AS ip 
  ON p.id = ip.id_pedido 
  GROUP By dia
  ORDER BY dia;
END;
