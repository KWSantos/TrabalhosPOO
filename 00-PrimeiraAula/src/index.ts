import Cliente from "./cliente";
import Endereco from "./endereco";
import Produto from "./produto";
import Telefone from "./telefone";
import Venda from "./venda";

const telefonesKauePessoal : Telefone = new Telefone("42", "(42) 98812-1622", "Contato")
const telefoneKaueEmpresarial : Telefone = new Telefone("42", "(42) 99852-0418", "Empresarial")
const telefones : Telefone[] = [telefonesKauePessoal, telefoneKaueEmpresarial]

const enderecoKaue : Endereco = new Endereco("Rio de Janeiro", 2774, "Guarapuava", "Parana")

const kaue : Cliente = new Cliente("Kaue", "078.203.619-80", "02/09/2004", "Masculino", enderecoKaue, telefones)

const notebook : Produto = new Produto(1, 4600, "Acer Nitro 5")
const celular : Produto = new Produto(2, 1500, "Redmi Note 10s")
const produtos : Produto[] = [notebook, celular]

const vendaKaue : Venda = new Venda(1, "02/01/2024", kaue, produtos)