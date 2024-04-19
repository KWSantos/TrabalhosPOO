import Endereco from "./endereco"
import Telefone from "./telefone"

export default class Cliente {
    private _nome: string
    private _cpf: string
    private _data_nascimento: string
    private _sexo: string
    private _endereco: Endereco
    private _telefones: Telefone[]

    constructor(nome : string, cpf : string, data_nascimento : string, sexo : string, endereco : Endereco, telefones : Telefone[]){
        this._nome = nome
        this._cpf = cpf
        this._data_nascimento = data_nascimento
        this._sexo = sexo
        this._endereco = endereco
        this._telefones = telefones
    }

    public get nome(): string {
        return this._nome
    }
    public set nome(value: string) {
        this._nome = value
    }
    
    public get cpf(): string {
        return this._cpf
    }
    public set cpf(value: string) {
        this._cpf = value
    }
    
    public get data_nascimento(): string {
        return this._data_nascimento
    }
    public set data_nascimento(value: string) {
        this._data_nascimento = value
    }
    
    public get sexo(): string {
        return this._sexo
    }
    public set sexo(value: string) {
        this._sexo = value
    }
    
    public get endereco(): Endereco {
        return this._endereco
    }
    public set endereco(value: Endereco) {
        this._endereco = value
    }
    
    public get telefones(): Telefone[] {
        return this._telefones
    }
    public set telefones(value: Telefone[]) {
        this._telefones = value
    }
}