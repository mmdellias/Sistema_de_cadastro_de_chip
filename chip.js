// Cadastro de chip celular 
// Objetivos: Criar um sistema para cadastrar as informações do cliente.
// O sistema deve pedir número, nome, data de nascimento, CPF e caso tenha email para contato.

const chip = [] 
let options = ""

do {
    options = prompt (
        "Bem-vindo ao setor de vendas" +
        "\nnúmeros de chips cadastrados: " + chip.length +
        "\n\nEscolha uma opção: " +
        "\n1. Cadastrar meu chip" +
        "\n2. Transferir para central de ajuda" +
        "\n3. Verificar os cadastros realizados"
    )
    
    switch (options) {
        case "1":
            const clientDatabase = {} 
                clientDatabase.number = prompt("Qual é o seu número celular?")
                clientDatabase.name = prompt("Qual é o seu nome?") 
                clientDatabase.dateOfBirth = prompt("Qual é a sua data de aniversário?") 
                clientDatabase.cpf = prompt("Qual o seu CPF?")
                clientDatabase.email = prompt("Qual é o seu email? (CASO SIM DIGITE-O/CASO NÃO DIGITE NÃO)") 
            const confirmation = confirm(
                "Confirme as informações: " +
                "\nNúmero: " + clientDatabase.number +
                "\nNome: " + clientDatabase.name +
                "\nData de nascimento: " + clientDatabase.dateOfBirth +
                "\nCPF: " + clientDatabase.cpf +
                "\nEmail: " + clientDatabase.email
            )
            if (confirmation) {
                chip.push(clientDatabase)
            }
        break 
        case "2":
            alert("Transferindo para a central de ajuda...")
        break
        case "3":
            for (let i = 0; i < chip.length; i++) {
                alert (
                    "Cadastro " + (i + 1) +
                    "\nNúmero: " + chip[i].number +
                    "\nNome: " + chip[i].name +
                    "\nData de nascimento: " + chip[i].dateOfBirth +
                    "\nCPF: " + chip[i].cpf +
                    "\nEmail: " + chip[i].email
                )
            }
        break
        default:
            "Invalid option"
    }
} while (options !== "2")