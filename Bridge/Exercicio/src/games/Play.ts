import IConsole from "../consoles/interfaces/IConsole";
import IGame from "./interfaces/IGame";

export default class Play implements IGame {

    constructor(protected pc : IConsole) {}

    playing(): void {
        console.log("Jogando")
    }
    result(): void {
        console.log("QUE OS JOGOS COMECEM")
    }
    
}