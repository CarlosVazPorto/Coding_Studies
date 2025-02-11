-- Consultando dados nas tabelas do curso "Realizando consultas com SQL: Joins, Views e transações" da Alura
-- Professora Danielle Oliveira
-- Fevereiro/2025

-- Consulta a média de preços da tabela produtos 
SELECT AVG(preco)
FROM produtos;

-- Consulta quais produtos têm seu preço acima da média
-- Observação: WHERE filtra dados não agrupados por GROUP BY
-- Observação: HAVING filtra valores que já foram agrupados
SELECT nome, preco 
FROM produtos 
GROUP BY nome, preco
HAVING preco > (
  SELECT AVG(preco) 
  FROM produtos
  )
ORDER BY preco DESC;

-- O WHERE é usado para filtrar registros (linhas) com base em condições específicas que você define. Ele é aplicado antes que os dados sejam agrupados pela cláusula GROUP BY. Isso significa que você pode usar WHERE para filtrar as linhas individuais de dados antes de qualquer outra operação.
-- Use WHERE quando precisar de uma condição para filtrar linhas antes de qualquer agrupamento.

-- Em contrapartida, o HAVING é usado para filtrar dados depois que eles foram agrupados com a cláusula GROUP BY. Isso é útil quando você quer aplicar uma condição de filtro não nas linhas individuais, mas nos grupos resultantes. HAVING é frequentemente usado com funções de agregação, como COUNT(), SUM(), AVG(), etc.
-- Use HAVING quando precisar aplicar um filtro depois de agrupar as linhas, especialmente quando estiver usando funções de agregação.
