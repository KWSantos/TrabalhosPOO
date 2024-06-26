import IPlatform from "./interfaces/IPlatform";

export default class Youtube implements IPlatform {

    constructor() {
        this.configureRMTP()
        console.log("Youtube: transmissao iniciada")
    }
    configureRMTP(): void {
        this.authToken()
        console.log("Youtube: Configurando Broadcasting")
    }
    authToken(): void {
        console.log("Youtube: Autorizando Aplicacao")
    }
    
}