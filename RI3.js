class Cliente {
    #cpf
    constructor(nome, cpf, endereco) {
        this.nome = nome
        this.endereco = endereco
        this.telefones = new Set()
        this.#cpf = cpf
    }

    // getters
    get getCpf() { return this.#cpf }

    // metodos para attr em maiusculo
    getNomeUpper() { return this.nome.toUpperCase()}

    getEnderecoUpper() { return this.endereco.toUpperCase()}

}

class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd
        this.numero = numero
    }
}

class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }

    // atributos maiusculos
    getEstadoUpper() { return this.estado.toUpperCase()}

    getCidadeUpper() { return this.cidade.toUpperCase()}

    getRuaUpper() { return this.rua.toUpperCase()}
}

class Empresa {
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.endereco = endereco
        this.nomeFantasia = nomeFantasia
        this.razaoSocial = razaoSocial
        this.#cnpj = cnpj
        this.clientes = new Set()
        this.telefones = new Set()
    }

    // getters
    get getCnpj() { return this.#cnpj }


    // atributos maiusculos
    getNomeFantasiaUpper() { return this.nomeFantasia.toUpperCase()}
    getRazaoSocialUpper() { return this.razaoSocial.toUpperCase()}
    getEnderecoUpper() { return this.endereco.toUpperCase()}
    
}