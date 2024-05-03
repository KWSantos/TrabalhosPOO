import SoftDrink from "../itens/drink/SoftDrink";
import IDrinkItem from "../itens/drink/interfaces/IDrinkItem";
import HotDog from "../itens/food/HotDog";
import IFoodItem from "../itens/food/interfaces/IFoodItem";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class IfoodDelivery implements IDeliveryFactory {

    createDeliveryDrink(): IDrinkItem {
        return new SoftDrink()
    }
    createDeliveryFood(): IFoodItem {
        return new HotDog()
    }
    
}