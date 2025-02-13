-- Consultando dados nas tabelas do curso "Realizando consultas com SQL: Joins, Views e transações" da Alura
-- Professora Danielle Oliveira
-- Fevereiro/2025

-- Consulta a média de preços da tabela produtos 
SELECT AVG(preco)
FROM produtos;

-- Consulta quais produtos têm seu preço acima da média
-- Observação: WHERE filtra diretamente linhas separadas de uma tabela 
-- Observação: HAVING filtra valores que já foram agrupados
SELECT nome, preco 
FROM produtos 
GROUP BY nome, preco
HAVING preco > (
  SELECT AVG(preco) 
  FROM produtos
  )
ORDER BY preco DESC;
