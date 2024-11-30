-- 06/06/2024 - 19h30
-- ------------------------------------------------------------------------
-- Aqui estaremos criando o banco de dados e tabelas de usuários 
-- Ressaltando que estes usuários são as credenciais para utilizarem
-- a aplicação, seja Web, Gui ou SaaS
-- Não são usuários do bando de dados, está será em outra aula
-- níves de acesso, permissões e etc.
-- entrará na aula de administração de BD, Segurança da informação
-- arquitetura e etc.
-- ------------------------------------------------------------------------ 
-- O objetivo cental deste módulo é gestão de usuários e criar credenciais
-- verificadas de acesso por email, sms, whatsapp com códigos randômicos.
-- ------------------------------------------------------------------------
-- Serão criadas triggers e procedures no BD para gestão de inclusões, alte
-- rações, atualizações e exclusões, o CRUD.
-- ------------------------------------------------------------------------

CREATE DATABASE IF NOT EXISTS AgeVec;
USE AgeVec;

-- Tabela de Usuários
CREATE TABLE IF NOT EXISTS TabF_Usuarios (
    username VARCHAR(50) PRIMARY KEY,
    nome_completo VARCHAR(100) NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_nome_completo ON TabF_Usuarios(nome_completo);

-- Tabela de Usuários e e-mails
CREATE TABLE IF NOT EXISTS TabG_Contato_Email (
    username VARCHAR(50),
    email VARCHAR(100),
    datacad DATE NOT NULL,
    horacad TIME NOT NULL,
    ipcad VARCHAR(15) NOT NULL,
    PRIMARY KEY (username, email),
    FOREIGN KEY (username) REFERENCES TabF_Usuarios(username)
);

-- Tabela de Usuários e e-mails ativos
CREATE TABLE IF NOT EXISTS TabGa_Contato_Email_sts_Atv (
    username VARCHAR(50),
    email VARCHAR(100),
    data_atv DATE NOT NULL,
    hora_atv TIME NOT NULL,
    ip_atv VARCHAR(15) NOT NULL,
    PRIMARY KEY (username, email, data_atv, hora_atv),
    FOREIGN KEY (username, email) REFERENCES TabG_Contato_Email(username, email)
);

-- Tabela de Usuários e e-mails Inativos
CREATE TABLE IF NOT EXISTS TabGa_Contato_Email_sts_NAtv (
    username VARCHAR(50),
    email VARCHAR(100),
    data_natv DATE NOT NULL,
    hora_natv TIME NOT NULL,
    ip_natv VARCHAR(15) NOT NULL,
    PRIMARY KEY (username, email, data_natv, hora_natv),
    FOREIGN KEY (username, email) REFERENCES TabG_Contato_Email(username, email)
);

-- Tabela Números de Celular do usuário
CREATE TABLE IF NOT EXISTS TabH_Contato_Celular (
    username VARCHAR(50),
    nr_celular VARCHAR(15),
    data_cad_cel DATE NOT NULL,
    hora_cad_cel TIME NOT NULL,
    ip_cad_cel VARCHAR(15) NOT NULL,
    PRIMARY KEY (username, nr_celular),
    FOREIGN KEY (username) REFERENCES TabF_Usuarios(username)
);

-- Tabela Números de Celular do usuário ativos
CREATE TABLE IF NOT EXISTS TabHa_Contato_Celular_sts_Atv (
    username VARCHAR(50),
    nr_celular VARCHAR(15),
    data_cel_sts_atv DATE NOT NULL,
    hora_cel_sts_atv TIME NOT NULL,
    ip_cel_sts_atv VARCHAR(15) NOT NULL,
    PRIMARY KEY (username, nr_celular, data_cel_sts_atv, hora_cel_sts_atv),
    FOREIGN KEY (username, nr_celular) REFERENCES TabH_Contato_Celular(username, nr_celular)
);

-- Tabela Números de Celular do usuário Inativos
CREATE TABLE IF NOT EXISTS TabHa_Contato_Celular_sts_NAtv (
    username VARCHAR(50),
    nr_celular VARCHAR(15),
    data_cel_sts_Natv DATE NOT NULL,
    hora_cel_sts_Natv TIME NOT NULL,
    ip_cel_sts_Natv VARCHAR(15) NOT NULL,
    PRIMARY KEY (username, nr_celular, data_cel_sts_Natv, hora_cel_sts_Natv),
    FOREIGN KEY (username, nr_celular) REFERENCES TabH_Contato_Celular(username, nr_celular)
);

-- Tabela de senhas do usuário
CREATE TABLE IF NOT EXISTS TabI_Senhas (
    username VARCHAR(50),
    senha VARCHAR(255),    
    PRIMARY KEY (username, senha),
    FOREIGN KEY (username) REFERENCES TabF_Usuarios(username)
);

-- Tabela de senhas do usuário ativa
CREATE TABLE IF NOT EXISTS TabI_Senhas_sts_Atv (
    username VARCHAR(50),
    senha VARCHAR(255),
    data_psw_sts_Atv DATE NOT NULL,
    hora_psw_sts_Atv TIME NOT NULL,    
    PRIMARY KEY (username, senha, data_psw_sts_Atv, hora_psw_sts_Atv),
    FOREIGN KEY (username) REFERENCES TabF_Usuarios(username)
);

-- Tabela de senhas do usuário inativa
CREATE TABLE IF NOT EXISTS TabI_Senhas_sts_NAtv (
    username VARCHAR(50),
    senha VARCHAR(255),
    data_psw_sts_NAtv DATE NOT NULL,
    hora_psw_sts_NAtv TIME NOT NULL,    
    PRIMARY KEY (username, senha, data_psw_sts_NAtv, hora_psw_sts_NAtv),
    FOREIGN KEY (username) REFERENCES TabF_Usuarios(username)
);

-- Próximas atividades :
-- a.) Criar MER do Usuário (engenharia reversa)
-- b.) Definição dos usuários administradores do banco e aplicações
-- c.) Stored Procedures ou Functions CRUD das tabelas
-- d.) Definição e criação das Triggers necessárias 
