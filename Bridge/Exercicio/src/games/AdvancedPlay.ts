import IConsole from "../consoles/interfaces/IConsole";
import Play from "./Play";

export default class AdvancedPlay extends Play {

    constructor(protected pc : IConsole) {
        super(pc)
    }

    challenge(): void {
        console.log("Desafio: Jogar sem dar rage")
    }
}