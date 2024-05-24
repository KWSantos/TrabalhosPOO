import IConsole from "./interfaces/IConsole";

export default class Xbox implements IConsole {

    constructor() {
        this.configureGame()
        console.log("Xbox iniciando game")
    }
    configureGame(): void {
        this.authToken()
        console.log("Jogo sendo configurado")
    }
    authToken(): void {
        console.log("Autorizando Usuario")
    }
    
}