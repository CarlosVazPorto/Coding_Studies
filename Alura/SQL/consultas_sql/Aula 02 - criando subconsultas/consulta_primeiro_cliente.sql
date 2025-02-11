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
