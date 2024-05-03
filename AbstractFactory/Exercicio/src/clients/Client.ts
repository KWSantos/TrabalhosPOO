import IDeliveryFactory from "../deliverys/interfaces/IDeliveryFactory";
import IDrinkItem from "../itens/drink/interfaces/IDrinkItem";
import IFoodItem from "../itens/food/interfaces/IFoodItem";

export default class Client {

    private food : IFoodItem
    private drink : IDrinkItem

    constructor(factory : IDeliveryFactory) {
        this.food = factory.createDeliveryFood()
        this.drink = factory.createDeliveryDrink()
    }

    startSnack() : void {
        this.food.startFood()
        this.drink.startDrink()
    }
}