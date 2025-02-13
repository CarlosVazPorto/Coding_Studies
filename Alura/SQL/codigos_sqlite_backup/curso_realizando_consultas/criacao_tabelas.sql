CREATE TABLE produtos (
  id TEXT PRIMARY KEY,
  nome VARCHAR(255),
  descricao VARCHAR(255),
  preco DECIMAL(10,2),
  categoria VARCHAR(50)
);

CREATE TABLE colaboradores (
  id TEXT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  cargo VARCHAR(100),
  data_contratacao DATE,
  telefone VARCHAR(20),
  email VARCHAR(100),
  rua VARCHAR(100) NOT NULL,
  bairro VARCHAR(100) NOT NULL,
  cidade VARCHAR(100) NOT NULL,
  estado VARCHAR(2) NOT NULL,
  cep VARCHAR(8) NOT NULL
);

CREATE TABLE fornecedores (
  id TEXT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  contato VARCHAR(100) NOT NULL,
  telefone VARCHAR(20),
  email VARCHAR(100),
  rua VARCHAR(100) NOT NULL,
  bairro VARCHAR(100) NOT NULL,
  cidade VARCHAR(100) NOT NULL,
  estado VARCHAR(2) NOT NULL,
  cep VARCHAR(8) NOT NULL
  );

CREATE TABLE clientes (
  id TEXT NOT NULL,
  cep VARCHAR(8) NOT NULL
);

CREATE TABLE clientes (
  id TEXT NOT NULL,
  nome VARCHAR(255),
  telefone VARCHAR(20),
  email VARCHAR(100) DEFAULT 'Sem e-mail',
  endereco VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE pedidos (
  id TEXT Primary KEY,
  id_cliente TEXT,
  data_hora DATETIME,
  status VARCHAR(50),
  Foreign Key (id_cliente) REFERENCES clientes(id) ON DELETE CASCADE
);

CREATE TABLE itens_pedidos (
  id_pedido TEXT,
  id_produto TEXT,
  quantidade INTEGER,
  preco_unitario DECIMAL(10,2),
  PRIMARY KEY (id_pedido, id_produto),
  FOREIGN KEY (id_pedido) REFERENCES pedidos(id) ON DELETE CASCADE,
  FOREIGN KEY (id_produto) REFERENCES produtos(id) ON DELETE CASCADE
);
