CREATE DATABASE livraria;

USE livraria;

CREATE TABLE cliente(
id_cliente INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100) NOT NULL,
rg CHAR(11),
cpf CHAR(11) UNIQUE,
pais VARCHAR(50) DEFAULT 'Brasil',
bairro VARCHAR(45),
rua VARCHAR(45)
);

CREATE TABLE editora(
id_editora INT PRIMARY KEY AUTO_INCREMENT,
nome_fantasia VARCHAR(100) NOT NULL,
razao_social VARCHAR(100),
pais VARCHAR(50) DEFAULT 'Brasil',
bairro VARCHAR(45),
rua VARCHAR(45),
telefone VARCHAR(20)
);

CREATE TABLE autor(
id_autor INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100) NOT NULL,
rg CHAR(11)
);

CREATE TABLE financiador(
id_financiador INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100),
cnpj CHAR(14)
);


CREATE TABLE livro(
id_livro INT PRIMARY KEY AUTO_INCREMENT,
isbn CHAR(13),
titulo VARCHAR(100),
preco DECIMAL(8,2),
categoria ENUM('Horror', 'Romance', 'Ação', 'Ficção'),
id_editora INT,
id_autor INT,
id_financiador INT,
FOREIGN KEY (id_editora) REFERENCES editora(id_editora),
FOREIGN KEY (id_autor) REFERENCES autor(id_autor),
FOREIGN KEY (id_financiador) REFERENCES financiador(id_financiador)
);

CREATE TABLE pedido(
id_pedido INT PRIMARY KEY AUTO_INCREMENT,
id_livro INT,
FOREIGN KEY (id_livro) REFERENCES livro(id_livro),
quantidade INT,
CHECK (quantidade >=0),
id_cliente INT,
FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
);

INSERT INTO cliente (nome, rg, cpf, rua, bairro) VALUES
('João', '10101010', '111', 'Rua 1', 'Bairro 1'),
('Maria', '20202020', '111', 'Rua 2', 'Bairro 2'),
('Carlos', '30303030', '30303030303', 'Rua 3', 'Bairro 3'),
('Gabriel', '40404040', '40404040404', 'Rua 4', 'Bairro 1'),
('Jose', '50505050', '50505050505', 'Rua 5', 'Bairro 2');


INSERT INTO editora (nome_fantasia, razao_social, rua, bairro, telefone) VALUES
('Editora 1', 'Editora 1 LTDA', 'Rua 1', 'Bairro 1', '(11)91111-1111'),
('Editora 2', 'Editora 2 LTDA', 'Rua 2', 'Bairro 2', '(22)92222-2222'),
('Editora 3', 'Editora 3 LTDA', 'Rua 3', 'Bairro 3', '(11)93333-3333'),
('Editora 4', 'Editora 4 LTDA', 'Rua 4', 'Bairro 2', '(22)94444-4444'),
('Editora 5', 'Editora 5 LTDA', 'Rua 5', 'Bairro 1', '(33)95555-5555');


INSERT INTO autor (nome, rg) VALUES
('Gabriel','1111111'),
('Clarice', '2222222'),
('Jorge', '3333333'),
('Manuel', '4444444'),
('Cecília', '5555555');


INSERT INTO financiador (nome, cnpj) VALUES
('Banco 1', '00000000000111'),
('Banco 2', '00000000000222'),
('Banco 3', '00000000000333'),
('Banco 4', '00000000000444'),
('Banco 5', '00000000000555');


INSERT INTO livro (isbn, titulo, preco, categoria, id_editora, id_autor, id_financiador) VALUES
('1111111111111', 'Titulo 1', 19.90, 'Incompleto', 1, 1, 1),
('2222222222222', 'Titulo 2', 29.90, 'Horror', 2, 2, 2),
('3333333333333', 'Titulo 3', 39.90, 'Romance', 3, 3, 3),
('4444444444444', 'Titulo 4', 49.90, 'Ficção', 4, 4, 4),
('5555555555555', 'Titulo 5', 59.90, 'Ação', 5, 5, 5);


INSERT INTO pedido (id_livro, quantidade, id_cliente) VALUES
(1, -1, 1),
(2, 2, 2),
(3, 3, 3),
(4, 4, 4),
(5, 5, 5);


SELECT * FROM cliente;
SELECT * FROM editora;
SELECT * FROM autor;
SELECT * FROM financiador;
SELECT * FROM livro;
SELECT * FROM pedido;



ALTER TABLE livro
MODIFY categoria ENUM('Horror', 'Romance', 'Ação', 'Ficção');
