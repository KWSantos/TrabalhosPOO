import IConsole from "./interfaces/IConsole";

export default class PlayStation implements IConsole {
    
    constructor() {
        this.configureGame()
        console.log("Iniciando jogo no PlayStation")
    }
    configureGame(): void {
        this.authToken()
        console.log("Jogo Configurado")
    }
    authToken(): void {
        console.log("Autenticando Usuario")
    }
    
}