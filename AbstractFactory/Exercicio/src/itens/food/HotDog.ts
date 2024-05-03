import IFoodItem from "./interfaces/IFoodItem";

export default class HotDog implements IFoodItem {

    startFood(): void {
        this.callWaiter()
        this.serveFood()
        console.log("Devorando cachorro quente")
    }
    serveFood(): void {
        console.log("Servindo cachorro quente")
    }
    callWaiter(): void {
        console.log("Meu bom, vou querer um cachorro quente")
    }
    
}