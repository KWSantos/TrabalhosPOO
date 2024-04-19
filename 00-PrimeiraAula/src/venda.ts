import Cliente from "./cliente"
import Produto from "./produto"

export default class Venda {
    private _codigo: number
    private _data: string
    private _cliente: Cliente
    private _produtos: Produto[]

    constructor(codigo : number, data : string, cliente : Cliente, produtos : Produto[]){
        this._codigo = codigo
        this._data = data
        this._cliente = cliente
        this._produtos = produtos
    }

    public get codigo(): number {
        return this._codigo
    }
    public set codigo(value: number) {
        this._codigo = value
    }
    
    public get data(): string {
        return this._data
    }
    public set data(value: string) {
        this._data = value
    }
    
    public get cliente(): Cliente {
        return this._cliente
    }
    public set cliente(value: Cliente) {
        this._cliente = value
    }
    
    public get produtos(): Produto[] {
        return this._produtos
    }
    public set produtos(value: Produto[]) {
        this._produtos = value
    }

    public calcularTotal(): number {
        let total = 0 
        this._produtos.forEach(produto => {
            total += produto.valor
        })
        return total
    }
}