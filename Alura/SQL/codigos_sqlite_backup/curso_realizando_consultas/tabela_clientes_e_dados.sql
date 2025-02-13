CREATE TABLE clientes (
  id TEXT NOT NULL,
  nome VARCHAR(255),
  telefone VARCHAR(20),
  email VARCHAR(100) DEFAULT 'Sem email',
  endereco VARCHAR(255),
  PRIMARY KEY (id)
);

INSERT INTO clientes (ID, Nome, Telefone, Email, Endereco) VALUES
(1, 'Maria Silva', '115551234', 'maria.silva@email.com', 'Rua das Flores, 123, Cidade A'),
(2, 'João Pereira', '215555678', 'joao.pereira@email.com', 'Av. Principal, 456, Cidade B'),
(3, 'Ana Rodrigues', '315557890', 'ana.rodrigues@email.com', 'Rua Central, 789, Cidade C'),
(4, 'Pedro Alves', '415552345', 'pedro.alves@email.com', 'Travessa dos Sonhos, 56, Cidade D'),
(5, 'Sofia Santos', '515558765', 'sofia.santos@email.com', 'Alameda das Artes, 321, Cidade E'),
(6, 'Jorge Lima', '615553421', 'jorge.lima@email.com', 'Praça das Estrelas, 987, Cidade F'),
(7, 'Luisa Ferreira', '715559876', 'luisa.ferreira@email.com', 'Rua das Palmeiras, 789, Cidade G'),
(8, 'Carlos Gomes', '815552345', 'carlos.gomes@email.com', 'Avenida dos Ventos, 123, Cidade H'),
(9, 'Marta Ribeiro', '915555432', 'marta.ribeiro@email.com', 'Travessa das Maravilhas, 56, Cidade I');

INSERT INTO clientes (ID, Nome, Telefone, Email, Endereco) VALUES
(10, 'Ana Maria Silva', '1515557890', 'ana.silva@email.com', 'Rua Central, 567, Cidade O');
INSERT INTO clientes (ID,Nome, Telefone, Endereco) VALUES
(11, 'André Almeida', '1015556789', 'Praça da Felicidade, 456, Cidade J');
INSERT INTO clientes (ID,Nome, Telefone, Email, Endereco) VALUES
(12, 'João Carlos Rodrigues', '1615552345', 'joao.rodrigues@email.com', 'Praça dos Poetas, 321, Cidade P');
INSERT INTO clientes (ID,Nome, Telefone, Endereco) VALUES
(13, 'Isabela Pereira', '1115558765', 'Rua das Araras, 789, Cidade K');

INSERT INTO clientes (ID, Nome, Telefone, Email, Endereco) VALUES
(14, 'Isabel Gonçalves', '1715558765', 'isabel.goncalves@email.com', 'Alameda das Gaivotas, 654, Cidade Q'),
(15, 'Ricardo Ferreira', '1815554321', 'ricardo.ferreira@email.com', 'Avenida da Paz, 987, Cidade R'),
(16, 'Mariana Costa', '1915551234', 'mariana.costa@email.com', 'Travessa das Mariposas, 234, Cidade S'),
(17, 'Luís Carlos Sousa', '2015555678', 'luis.sousa@email.com', 'Rua dos Sonhos, 456, Cidade T'),
(18, 'Silvia Ribeiro', '2115557890', 'silvia.ribeiro@email.com', 'Alameda dos Sorrisos, 765, Cidade U'),
(19, 'Artur Santos', '2215552345', 'artur.santos@email.com', 'Praça das Alegrias, 987, Cidade V'),
(21, 'Carolina Lima', '2315558765', 'carolina.lima@email.com', 'Avenida da Felicidade, 654, Cidade W'),
(22, 'Pedro Almeida', '2415554321', 'pedro.almeida@email.com', 'Rua das Estrelas, 123, Cidade X'),
(23, 'Inês Gonçalves', '2515551234', 'ines.goncalves@email.com', 'Travessa das Maravilhas, 234, Cidade Y');

INSERT INTO clientes (ID,Nome, Telefone, Endereco) VALUES
(24, 'Rui Santos', '1215554321', 'Alameda das Estrelas, 654, Cidade L');
INSERT INTO clientes (ID,Nome, Telefone, Email, Endereco) VALUES
(25, 'Diogo Fernandes', '2615555678', 'diogo.fernandes@email.com', 'Praça dos Desejos, 987, Cidade Z');
INSERT INTO clientes (ID,Nome, Telefone, Endereco) VALUES
(26, 'Helena Lima', '1315551234', 'Avenida dos Sonhos, 234, Cidade M');
INSERT INTO clientes (ID,Nome, Telefone, Endereco) VALUES
(27, 'Paulo Sousa', '1415555678', 'Travessa das Marés, 876, Cidade N');

