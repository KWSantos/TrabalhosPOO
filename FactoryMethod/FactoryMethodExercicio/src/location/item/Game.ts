import IItem from "./interfaces/IItem";

export default class Game implements IItem {

    start(): void {
        console.log(this.getDescription())
    }
    getDescription(): string {
        return "Jogo: Forza Horizon 5"
    }

}