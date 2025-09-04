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
    getNomeUpper() { return this.nome.toUpperCase() }

    getEnderecoUpper() { return this.endereco.toUpperCase() }


    // metodos para attr em minusculo
    getNomeLower() { return this.nome.toLowerCase() }

    getEnderecoLower() { return this.endereco.toLowerCase() }
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
    getEstadoUpper() { return this.estado.toUpperCase() }

    getCidadeUpper() { return this.cidade.toUpperCase() }

    getRuaUpper() { return this.rua.toUpperCase() }

    // atributos minusculos
    getEstadoLower() { return this.estado.toLowerCase() }
    
    getCidadeLower() { return this.cidade.toLowerCase() }

    getRuaLower() { return this.rua.toLowerCase() }
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
    getEnderecoUpper() { return this.endereco.toUpperCase() }
    
    getNomeFantasiaUpper() { return this.nomeFantasia.toUpperCase() }

    getRazaoSocialUpper() { return this.razaoSocial.toUpperCase() }
    
    // atributos minusculos
    getEnderecoLower() { return this.endereco.toLowerCase() }
    
    getNomeFantasiaLower() { return this.nomeFantasia.toLowerCase() }

    getRazaoSocialLower() { return this.razaoSocial.toLowerCase() }

    detalhe = () => {
        console.log(`\nRazão Social: ${this.razaoSocial}`)
        console.log(`Nome Fantasia: ${this.nomeFantasia}`)
        this.clientes.forEach(c => {
            console.log('\nNome: ' + c.nome +
                '\nEstado: ' + c.endereco.estado + ' Cidade: ' + c.endereco.cidade + ' Rua: ' + c.endereco.rua + ' Nº: ' + c.endereco.numero
            )
            c.telefones.forEach(t => {
                console.log('DDD: ' + t.ddd + ' Número: ' + t.numero)
            })
        })
    }
}

// enderecos
let endereco1 = new Endereco('SP', 'São José dos Campos', 'rua x', '88')
let endereco2 = new Endereco('AM', 'Manaus', 'rua y', '334')
let endereco3 = new Endereco('ES', 'Vitória', 'rua z', '24')
let endereco4 = new Endereco('RJ', 'Rio de Janeiro', 'rua 3', '5555')
let endereco5 = new Endereco('BA', 'Salvador', 'rua 4', '123')


// clientes
let cliente1 = new Cliente('Gustavo', '123.456.789-00', endereco1)
let cliente2 = new Cliente('Ricardo', '321.654.987-00', endereco2)
let cliente3 = new Cliente('Lucas', '154.484.223-00', endereco3)
let cliente4 = new Cliente('Maria', '111.898.563-00', endereco4)
let cliente5 = new Cliente('Jonas', '222.333.444-00', endereco5)


// telefones
let telefone1 = new Telefone('12', '88888888888')
let telefone2 = new Telefone('13', '77777777777')

let telefone3 = new Telefone('22', '11111111111')
let telefone4 = new Telefone('15', '44444444444')

let telefone5 = new Telefone('66', '22222222222')
let telefone6 = new Telefone('91', '33333333333')

let telefone7 = new Telefone('88', '66666666666')
let telefone8 = new Telefone('44', '99999999999')

let telefone9 = new Telefone('31', '21212121212')
let telefone10 = new Telefone('24', '1313131313')


// empresa para testar
let empresa1 = new Empresa('ABC LTDA', 'Mercados & Vendas', '123123123', endereco1)

// add adiciona ao Set

cliente1.telefones.add(telefone1).add(telefone2)
cliente2.telefones.add(telefone3).add(telefone4)
cliente3.telefones.add(telefone5).add(telefone6)
cliente4.telefones.add(telefone7).add(telefone8)
cliente5.telefones.add(telefone9).add(telefone10)

empresa1.clientes.add(cliente1).add(cliente2).add(cliente3).add(cliente4).add(cliente5)

empresa1.telefones.add(telefone1).add(telefone4)


// console.log(empresa1)
empresa1.detalhe()
