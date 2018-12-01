/* Criação do Schema e Tabelas */
CREATE SCHEMA trabalhoBancoDeDados DEFAULT CHARACTER SET utf8;
USE trabalhoBancoDeDados;

CREATE TABLE Raca_Cor (
  Cod_Raca_Cor INT NOT NULL AUTO_INCREMENT,
  Nome_Raca_Cor VARCHAR(50) NOT NULL,
  PRIMARY KEY ( Cod_Raca_Cor )
);

CREATE TABLE UF (
  Cod_UF INT NOT NULL AUTO_INCREMENT,
  Nome_UF VARCHAR(50) NOT NULL,
  PRIMARY KEY ( Cod_UF )
);

CREATE TABLE Estado_Civil (
  Cod_Estado_Civil INT NOT NULL AUTO_INCREMENT,
  Nome_Estado_Civil VARCHAR(50) NOT NULL,
  PRIMARY KEY ( Cod_Estado_Civil )
);
 
CREATE TABLE Genero_Declarado (
  Cod_Genero_Declarado INT NOT NULL AUTO_INCREMENT,
  Nome_Genero_Declarado VARCHAR(50) NOT NULL,
  PRIMARY KEY ( Cod_Genero_Declarado )
);

CREATE TABLE Escolaridade (
  Cod_Escolaridade INT NOT NULL AUTO_INCREMENT,
  Nome_Escolaridade VARCHAR(50) NOT NULL,
  PRIMARY KEY ( Cod_Escolaridade )
);

CREATE TABLE Vinculo_Empregaticio (
  Cod_Vinculo_Empregaticio INT NOT NULL AUTO_INCREMENT,
  Nome_Vinculo_Empregaticio VARCHAR(50) NOT NULL,
  PRIMARY KEY ( Cod_Vinculo_Empregaticio )
);
 
CREATE TABLE Ocupacao (
  Cod_Ocupacao INT NOT NULL AUTO_INCREMENT,
  Nome_Ocupacao VARCHAR(50) NOT NULL,
  PRIMARY KEY ( Cod_Ocupacao )
);

CREATE TABLE Renda_Governamental (
  Cod_Renda_Governamental INT NOT NULL AUTO_INCREMENT,
  Nome_Renda_Governamental VARCHAR(50) NOT NULL,
  Valor_Renda_Governamental FLOAT NOT NULL,
  PRIMARY KEY ( Cod_Renda_Governamental )
);

CREATE TABLE Cidadao (
  CPF CHAR(11) NOT NULL,
  Nome_Cidadao VARCHAR(50) NOT NULL,
  Nome_Social VARCHAR(50) NOT NULL,
  Nome_Mae VARCHAR(50) NOT NULL,
  Data_Nascimento DATE NOT NULL,
  Sexo_Nascimento VARCHAR(9) NOT NULL,
  Renda_Individual FLOAT NOT NULL,
  Renda_Familiar FLOAT NOT NULL,
  Cod_Renda_Governamental INT,
  Cod_Raca_Cor INT NOT NULL,
  Cod_UF INT NOT NULL,
  Cod_Estado_Civil INT NOT NULL,
  Cod_Genero_Declarado INT NOT NULL,
  Cod_Escolaridade INT NOT NULL,
  Cod_Vinculo_Empregaticio INT NOT NULL,
  Cod_Ocupacao INT NOT NULL,
  PRIMARY KEY ( CPF ),
  FOREIGN KEY ( Cod_Renda_Governamental ) REFERENCES Renda_Governamental(Cod_Renda_Governamental),
  FOREIGN KEY ( Cod_Raca_Cor ) REFERENCES Raca_Cor(Cod_Raca_Cor),
  FOREIGN KEY ( Cod_UF ) REFERENCES UF(Cod_UF),
  FOREIGN KEY ( Cod_Estado_Civil ) REFERENCES Estado_Civil(Cod_Estado_Civil),
  FOREIGN KEY ( Cod_Genero_Declarado ) REFERENCES Genero_Declarado(Cod_Genero_Declarado),
  FOREIGN KEY ( Cod_Escolaridade ) REFERENCES Escolaridade(Cod_Escolaridade),
  FOREIGN KEY ( Cod_Vinculo_Empregaticio ) REFERENCES Vinculo_Empregaticio(Cod_Vinculo_Empregaticio),
  FOREIGN KEY ( Cod_Ocupacao ) REFERENCES Ocupacao(Cod_Ocupacao)
);


/* Criação dos Índices */
CREATE INDEX Indice_Cidadao_Nome ON Cidadao(Nome_Cidadao);
CREATE INDEX Indice_Cidadao_UF On Cidadao(Cod_UF);

/* Populando com Dados */
INSERT INTO Raca_Cor (Nome_Raca_Cor) VALUES ('branca');
INSERT INTO Raca_Cor (Nome_Raca_Cor) VALUES ('preta');
INSERT INTO Raca_Cor (Nome_Raca_Cor) VALUES ('amarela');
INSERT INTO Raca_Cor (Nome_Raca_Cor) VALUES ('parda');
INSERT INTO Raca_Cor (Nome_Raca_Cor) VALUES ('indígena');
INSERT INTO Raca_Cor (Nome_Raca_Cor) VALUES ('ignorado');

INSERT INTO Estado_Civil (Nome_Estado_Civil) VALUES ('solteiro');
INSERT INTO Estado_Civil (Nome_Estado_Civil) VALUES ('casado');
INSERT INTO Estado_Civil (Nome_Estado_Civil) VALUES ('união estável');
INSERT INTO Estado_Civil (Nome_Estado_Civil) VALUES ('separado');
INSERT INTO Estado_Civil (Nome_Estado_Civil) VALUES ('divorciado');
INSERT INTO Estado_Civil (Nome_Estado_Civil) VALUES ('viúvo');

INSERT INTO Escolaridade (Nome_Escolaridade) VALUES ('alfabetização incompleta');
INSERT INTO Escolaridade (Nome_Escolaridade) VALUES ('ensino fundamental incompleto');
INSERT INTO Escolaridade (Nome_Escolaridade) VALUES ('ensino fundamental completo');
INSERT INTO Escolaridade (Nome_Escolaridade) VALUES ('ensino médio incompleto - médio 2° ciclo (científico, técnico etc.)');
INSERT INTO Escolaridade (Nome_Escolaridade) VALUES ('ensino médio completo - médio 2° ciclo (científico, técnico etc.)');
INSERT INTO Escolaridade (Nome_Escolaridade) VALUES ('ensino médio especial');
INSERT INTO Escolaridade (Nome_Escolaridade) VALUES ('ensino médio EJA (supletivo)');
INSERT INTO Escolaridade (Nome_Escolaridade) VALUES ('superior incompleto');
INSERT INTO Escolaridade (Nome_Escolaridade) VALUES ('superior completo');
INSERT INTO Escolaridade (Nome_Escolaridade) VALUES ('pós graduação (aperfeiçoamento/especialização/mestrado/doutorado)');

INSERT INTO Ocupacao (Nome_Ocupacao) VALUES ('estudante');
INSERT INTO Ocupacao (Nome_Ocupacao) VALUES ('desempregado');
INSERT INTO Ocupacao (Nome_Ocupacao) VALUES ('trabalhador');
INSERT INTO Ocupacao (Nome_Ocupacao) VALUES ('trabalha e estuda');
INSERT INTO Ocupacao (Nome_Ocupacao) VALUES ('menor de 6 anos - não estudante');

INSERT INTO Vinculo_Empregaticio (Nome_Vinculo_Empregaticio) VALUES ('empregado com carteira de trabalho assinada');
INSERT INTO Vinculo_Empregaticio (Nome_Vinculo_Empregaticio) VALUES ('empregado pelo rigime jurídico dos funcionários públicos');
INSERT INTO Vinculo_Empregaticio (Nome_Vinculo_Empregaticio) VALUES ('militar do exército, mariha, aeronáutica, polícia militar ou corpo de bombeiros');
INSERT INTO Vinculo_Empregaticio (Nome_Vinculo_Empregaticio) VALUES ('empregado sem carteira de trabalho assinada');
INSERT INTO Vinculo_Empregaticio (Nome_Vinculo_Empregaticio) VALUES ('conta própria');
INSERT INTO Vinculo_Empregaticio (Nome_Vinculo_Empregaticio) VALUES ('empregador');
INSERT INTO Vinculo_Empregaticio (Nome_Vinculo_Empregaticio) VALUES ('não-remunerado');
INSERT INTO Vinculo_Empregaticio (Nome_Vinculo_Empregaticio) VALUES ('estágiario/aprendiz');
INSERT INTO Vinculo_Empregaticio (Nome_Vinculo_Empregaticio) VALUES ('aposentado');
INSERT INTO Vinculo_Empregaticio (Nome_Vinculo_Empregaticio) VALUES ('auxilio doença INSS');
INSERT INTO Vinculo_Empregaticio (Nome_Vinculo_Empregaticio) VALUES ('sem vínculo empregatício');

INSERT INTO Genero_Declarado (Nome_Genero_Declarado) VALUES ('não declarado');
INSERT INTO Genero_Declarado (Nome_Genero_Declarado) VALUES ('masculino');
INSERT INTO Genero_Declarado (Nome_Genero_Declarado) VALUES ('feminino');
INSERT INTO Genero_Declarado (Nome_Genero_Declarado) VALUES ('sem gênero');
INSERT INTO Genero_Declarado (Nome_Genero_Declarado) VALUES ('transhomem');
INSERT INTO Genero_Declarado (Nome_Genero_Declarado) VALUES ('transmulher');
INSERT INTO Genero_Declarado (Nome_Genero_Declarado) VALUES ('travesti');
INSERT INTO Genero_Declarado (Nome_Genero_Declarado) VALUES ('transgênero');
INSERT INTO Genero_Declarado (Nome_Genero_Declarado) VALUES ('homem transsexual');
INSERT INTO Genero_Declarado (Nome_Genero_Declarado) VALUES ('mulher transsexual');
INSERT INTO Genero_Declarado (Nome_Genero_Declarado) VALUES ('pessoa transsexual');
INSERT INTO Genero_Declarado (Nome_Genero_Declarado) VALUES ('neutro');
INSERT INTO Genero_Declarado (Nome_Genero_Declarado) VALUES ('cross genger');
INSERT INTO Genero_Declarado (Nome_Genero_Declarado) VALUES ('pessoa mtf');
INSERT INTO Genero_Declarado (Nome_Genero_Declarado) VALUES ('pessoa ftm');

INSERT INTO UF (Nome_UF) VALUES ('AC');
INSERT INTO UF (Nome_UF) VALUES ('AL');
INSERT INTO UF (Nome_UF) VALUES ('AP');
INSERT INTO UF (Nome_UF) VALUES ('AM');
INSERT INTO UF (Nome_UF) VALUES ('BA');
INSERT INTO UF (Nome_UF) VALUES ('CE');
INSERT INTO UF (Nome_UF) VALUES ('DF');
INSERT INTO UF (Nome_UF) VALUES ('ES');
INSERT INTO UF (Nome_UF) VALUES ('GO');
INSERT INTO UF (Nome_UF) VALUES ('MA');
INSERT INTO UF (Nome_UF) VALUES ('MT');
INSERT INTO UF (Nome_UF) VALUES ('MS');
INSERT INTO UF (Nome_UF) VALUES ('MG');
INSERT INTO UF (Nome_UF) VALUES ('PA');
INSERT INTO UF (Nome_UF) VALUES ('PG');
INSERT INTO UF (Nome_UF) VALUES ('PR');
INSERT INTO UF (Nome_UF) VALUES ('PE');
INSERT INTO UF (Nome_UF) VALUES ('PI');
INSERT INTO UF (Nome_UF) VALUES ('RJ');
INSERT INTO UF (Nome_UF) VALUES ('RN');
INSERT INTO UF (Nome_UF) VALUES ('RS');
INSERT INTO UF (Nome_UF) VALUES ('RO');
INSERT INTO UF (Nome_UF) VALUES ('RR');
INSERT INTO UF (Nome_UF) VALUES ('SC');
INSERT INTO UF (Nome_UF) VALUES ('SP');
INSERT INTO UF (Nome_UF) VALUES ('SE');
INSERT INTO UF (Nome_UF) VALUES ('TO');
