import IPlatform from "./interfaces/IPlatform";

export default class Twitch implements IPlatform {

    constructor() {
        this.configureRMTP()
        console.log("Twitch: Iniciando Transmissao")
    }
    configureRMTP(): void {
        this.authToken()
        console.log("Twitch: Configurando Broadcasting")
    }
    authToken(): void {
        console.log("Twitch: Autorizando Aplicacao")
    }
    
}