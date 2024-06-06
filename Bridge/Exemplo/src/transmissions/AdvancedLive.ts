import IPlatform from "../platforms/interfaces/IPlatform";
import Live from "./Live";

export default class AdvancedLive extends Live {

    constructor(protected platform : IPlatform) {
        super(platform)
    }

    subtitles() : void {
        console.log("Legendas ativadas na transmissao")
    }

    comments() : void {
        console.log("Comentarios liberados")
    }
}