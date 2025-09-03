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


    // metodos para attr em minusculo
    getNomeLower() { return this.nome.toLowerCase()}

    getEnderecoLower() { return this.endereco.toLowerCase()}
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

    // atributos minusculos
    getEstadoLower() { return this.estado.toLowerCase()}
    
    getCidadeLower() { return this.cidade.toLowerCase()}

    getRuaLower() { return this.rua.toLowerCase()}
}

class Empresa {
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.nomeFantasia = nomeFantasia
        this.razaoSocial = razaoSocial
        this.endereco = endereco
        this.#cnpj = cnpj
        this.clientes = new Set()
        this.telefones = new Set()
    }

    // getters
    get getCnpj() { return this.#cnpj }


    // atributos maiusculos
    getEnderecoUpper() { return this.endereco.toUpperCase()}
    
    getNomeFantasiaUpper() { return this.nomeFantasia.toUpperCase()}

    getRazaoSocialUpper() { return this.razaoSocial.toUpperCase()}
    
    // atributos minusculos
    getEnderecoLower() { return this.endereco.toLowerCase()}
    
    getNomeFantasiaLower() { return this.nomeFantasia.toLowerCase()}

    getRazaoSocialLower() { return this.razaoSocial.toLowerCase()}
}

let endereco1 = new Endereco('SP', 'São José dos Campos', 'rua x', '88')
let telefone1 = new Telefone('12', '88888888888')
let telefone2 = new Telefone('13', '77777777777')
let cliente1 = new Cliente('Gustavo', '123.456.789-00', endereco1)
let empresa1 = new Empresa('ABC LTDA', 'NOME X', '123123123', endereco1)

cliente1.telefones.add(telefone1)

empresa1.clientes.add(cliente1)
empresa1.telefones.add(telefone1)
empresa1.telefones.add(telefone2)

console.log(empresa1)
