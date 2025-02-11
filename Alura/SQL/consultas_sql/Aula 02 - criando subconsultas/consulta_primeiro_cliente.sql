-- Consultando dados nas tabelas do curso "Realizando consultas com SQL: Joins, Views e transações" da Alura
-- Professora Danielle Oliveira
-- Fevereiro/2025

-- Consulta todos os clientes
SELECT * 
FROM clientes;

-- Consulta todos os pedidos 
SELECT * 
FROM pedidos;

-- Consulta a id do primeiro cliente a fazer um determinado pedido no ano de 2023
SELECT id_cliente 
FROM pedidos 
WHERE data_hora = '2023-01-02 08:15:00';

-- Consulta dados da cliente com base na subconsulta realizada acima 
SELECT nome, telefone 
FROM clientes 
WHERE id = (
  SELECT id_cliente 
  FROM pedidos 
  WHERE data_hora = '2023-01-02 08:15:00'
);

-- Consulta a id de todos os clientes que fizeram pedidos em um determinado mês 
SELECT id_cliente 
FROM pedidos 
WHERE strftime('%m', data_hora) = '01';

-- Consulta o nome de todos os clientes que fizeram pedidos em um determinado mês 
-- Observação: o uso do operador = retorna somente a primeira correspondência da subconsulta
-- Observação: o uso do operador IN retorna todas as correspondências presentes na subconsulta 
SELECT nome 
FROM clientes 
WHERE id IN (
  SELECT id_cliente 
  FROM pedidos 
  WHERE strftime('%m', data_hora) = '01'
  );

