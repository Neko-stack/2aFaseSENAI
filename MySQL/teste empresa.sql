CREATE DATABASE empresa_xpto;

USE empresa_xpto;

CREATE TABLE fornecedor(
id_fornecedor INT NULL AUTO_INCREMENT,
nome VARCHAR(75),
nacionalidade VARCHAR(75),
PRIMARY KEY (id_fornecedor)
);



CREATE TABLE peca(
id_peca INT NULL AUTO_INCREMENT,
nome VARCHAR(75),
pesao DECIMAL(8,2),
ano_fabricacao DATE,
fornecedor_id INT,
PRIMARY KEY (id_peca)
);

ALTER TABLE peca
ADD FOREIGN KEY (fornecedor_id)
REFERENCES fornecedor (id_fornecedor);

ALTER TABLE peca
ADD COLUMN fornecedor_id INT,
ADD FOREIGN KEY (fornecedor_id)
REFERENCES fornecedor (id_fornecedor);




