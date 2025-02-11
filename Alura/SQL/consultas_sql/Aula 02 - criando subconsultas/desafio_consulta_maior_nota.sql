-- Consultando a maior nota, exercício proposto no curso "Realizando consultas com SQL: Joins, Views e transações" da Alura
-- Professora Danielle Oliveira
-- Fevereiro/2025

-- Consulta o nome do aluno que obteve a maior nota na disciplina
SELECT Nome 
FROM Alunos 
WHERE ID_Aluno = (
  SELECT ID_Aluno 
  FROM Notas 
  WHERE Nota = (
    SELECT MAX(Nota) 
    FROM Notas
  )   
);
