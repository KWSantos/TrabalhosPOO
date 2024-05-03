import IDrinkItem from "./interfaces/IDrinkItem";

export default class Beer implements IDrinkItem {

    startDrink(): void {
        this.callWaiter()
        this.serveDrink()
        console.log("Secando uma gelada")
    }
    serveDrink(): void {
        console.log("Servindo uma cerveja")
    }
    callWaiter(): void {
        console.log("Traz uma gelada meu consagrado")
    }
    
}