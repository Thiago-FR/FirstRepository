CREATE DATABASE funcionarios;
USE funcionarios;

CREATE TABLE func(
	funcionarios_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    sobrenome VARCHAR(50) NOT NULL,
    data_cadastro DATE NOT NULL
);

CREATE TABLE contato(
	funcionarios_id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(50) NOT NULL,
    telefone_1 VARCHAR(50) NOT NULL,
    telefone_2 VARCHAR(50) NULL,
    FOREIGN KEY (funcionarios_id) REFERENCES func(funcionarios_id)
);

CREATE TABLE setor(
	setor_id INT PRIMARY KEY AUTO_INCREMENT,
    setor VARCHAR(50) NOT NULL
);

CREATE TABLE func_setor(
	func_setor_idc INT PRIMARY KEY AUTO_INCREMENT,
	funcionarios_id INT,
    setor_id INT NOT NULL,
    FOREIGN KEY (funcionarios_id) REFERENCES func(funcionarios_id),
    FOREIGN KEY (setor_id) REFERENCES setor(setor_id)
);

INSERT INTO setor(setor)
VALUES('Administração'),
('Vendas'),
('Operacional'),
('Estratégico'),
('Marketing');

INSERT INTO func_setor(funcionarios_id, setor_id)
VALUES(1,1),
(1,2),
(2,3),
(3,4),
(3,4),
(4,4);

INSERT INTO func(nome, sobrenome, data_cadastro)
VALUES
('Joseph', 'Rodrigues', now()),
('André', 'Freeman', now()),
('Cintia', 'Duval', now()),
('Fernanda', 'Mendes', now());

INSERT INTO contato(email, telefone_1)
VALUES
('jo@gmail.com', '(35)998552-1445'),
('andre1990@gmail.com', '(47)99522-4996'),
('cindy@outlook.com', '(33)99855-4669'),
('fernandamendes@yahoo.com', '(33)99200-1556');