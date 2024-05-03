import IDrinkItem from "../../itens/drink/interfaces/IDrinkItem";
import IFoodItem from "../../itens/food/interfaces/IFoodItem";

export default interface IDeliveryFactory {

    createDeliveryDrink() : IDrinkItem
    createDeliveryFood() : IFoodItem
    
}