import IPlatform from "../platforms/interfaces/IPlatform";
import ITransmission from "./interfaces/ITransmission";

export default class Live implements ITransmission {

    constructor(protected platform : IPlatform) {}

    broadcasting(): void {
        console.log("Iniciando a transmissao")
    }
    result(): void {
        console.log("******** NO AR ********")
    }
    
}