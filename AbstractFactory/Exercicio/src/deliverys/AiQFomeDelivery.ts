import Beer from "../itens/drink/Beer";
import IDrinkItem from "../itens/drink/interfaces/IDrinkItem";
import Hamburguer from "../itens/food/Hamburguer";
import IFoodItem from "../itens/food/interfaces/IFoodItem";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class AiQFomeDelivery implements IDeliveryFactory {

    createDeliveryDrink(): IDrinkItem {
        return new Beer()
    }
    createDeliveryFood(): IFoodItem {
        return new Hamburguer()
    }
    
}