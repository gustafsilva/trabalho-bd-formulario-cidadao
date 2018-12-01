const rotasCidadao = (servidor) => {
    servidor.get("/cidadoes", () => {});

    servidor.get("/cidadao/:cpf", () => {});

    servidor.post("/cidadao", () => {});
}

module.exports = rotasCidadao;
