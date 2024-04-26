import IItem from "./interfaces/IItem";

export default class Movie implements IItem {

    start(): void {
        console.log(this.getDescription())
    }
    getDescription(): string {
        return "Filme: Batman O Cavaleiro das Trevas"
    }
    
}