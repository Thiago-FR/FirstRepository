CREATE DATABASE zoo;
USE zoo;
CREATE TABLE animal(
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    especie INT NOT NULL,
    sexo CHAR(1) NOT NULL,
    idade INT NOT NULL,
    localizacao INT NOT NULL,
    FOREIGN KEY (especie) REFERENCES especie_animal(especie_id),
    FOREIGN KEY (localizacao) REFERENCES localizacao_animal(local_id)
);

CREATE TABLE especie_animal(
	especie_id INT PRIMARY KEY AUTO_INCREMENT,
    especie VARCHAR(50) NOT NULL
);

INSERT INTO especie_animal(especie)
VALUES
('Vertebrado'),
('Réptil'),
('Ave'),
('Mamífero'),
('Anfíbio');

CREATE TABLE localizacao_animal(
	local_id INT PRIMARY KEY AUTO_INCREMENT,
    localizacao VARCHAR(50) NOT NULL
);

INSERT INTO localizacao_animal(localizacao)
VALUES('PR');