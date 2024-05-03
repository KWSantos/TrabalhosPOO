import IFoodItem from "./interfaces/IFoodItem";

export default class Hamburguer implements IFoodItem {

    startFood(): void {
        this.callWaiter()
        this.serveFood()
        console.log("Devorando hamburguer")
    }
    serveFood(): void {
        console.log("Servindo hamburguer")
    }
    callWaiter(): void {
        console.log("Meu consagrado, traz um hamburguer pra mim")
    }
    
}