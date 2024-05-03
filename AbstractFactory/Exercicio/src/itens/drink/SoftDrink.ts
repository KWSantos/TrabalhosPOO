import IDrinkItem from "./interfaces/IDrinkItem";

export default class SoftDrink implements IDrinkItem {

    startDrink(): void {
        this.callWaiter()
        this.serveDrink()
        console.log("Secando o drink")
    }
    serveDrink(): void {
        console.log("Servindo drink sem alcool")
    }
    callWaiter(): void {
        console.log("Traz um drink sem alcool, meu bom")
    }
    
}