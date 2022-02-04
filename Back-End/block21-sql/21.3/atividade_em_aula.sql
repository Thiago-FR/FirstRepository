CREATE DATABASE lanchonete;
USE lanchonete;
CREATE TABLE forma_pagamento(
	forma_pag_id INT PRIMARY KEY AUTO_INCREMENT,
    forma_pagamento VARCHAR(50) NOT NULL
);

INSERT INTO forma_pagamento(forma_pagamento)
VALUES
('debito'),
('credito'),
('dinheiro');

CREATE TABLE produto(
	produto_id INT PRIMARY KEY AUTO_INCREMENT,
    produto VARCHAR(50) NOT NULL,
    preco INT NOT NULL
);

INSERT INTO produto(produto, preco)
VALUES
('coxinha', 5),
('empada', 5),
('pão de queijo', 2),
('cafe', 2);

CREATE TABLE cliente(
	cliente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    endereco VARCHAR(50) NOT NULL,
    cidade VARCHAR(10) NOT NULL,
    estado CHAR(2) NOT NULL
);

INSERT INTO cliente(nome, endereco, cidade, estado)
VALUES
('Batman', 'Av Paulista', 'SP', 'SP'),
('Superman', 'AV Getúlio Vargas', 'BH', 'MG'),
('Mulher-Maravilha', 'Av Brasil', 'BH', 'MG'),
('Super-homem', 'AV Getúlio Vargas', 'BH', 'MG'),
('Flash', 'Av Nossa Senhora', 'THE', 'PI');

CREATE TABLE pedido(
	pedido_id INT PRIMARY KEY AUTO_INCREMENT,
    data_pedido DATETIME DEFAULT CURRENT_TIMESTAMP,
    forma_pagamento INT NULL,
    cliente INT NOT NULL
);

INSERT INTO pedido(forma_pagamento, cliente)
VALUES
(1, 1),
(2, 2),
(1, 3),
(3, 4),
(3, 5);

CREATE TABLE pedido_produto(
	pedido_id INT NOT NULL,
    produto_id INT NOT NULL,
    quantidade INT NOT NULL,
    CONSTRAINT PRIMARY KEY (pedido_id, produto_id),
    FOREIGN KEY (pedido_id) REFERENCES pedido(pedido_id),
    FOREIGN KEY (produto_id) REFERENCES produto(produto_id)
);

INSERT INTO pedido_produto(pedido_id, produto_id, quantidade)
VALUES
(1, 1, 1),
(2, 2, 1),
(2, 4, 1),
(3, 2, 1),
(3, 4, 1),
(4, 3, 1),
(5, 1, 1),
(5, 4, 1);

SELECT c.nome, prod.produto, pp.quantidade, prod.preco * pp.quantidade AS Total
FROM cliente c
JOIN pedido p
JOIN pedido_produto pp
JOIN produto prod
ON c.cliente_id = p.cliente AND p.pedido_id = pp.pedido_id AND pp.produto_id = prod.produto_id
ORDER BY c.nome ASC;







