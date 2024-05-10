import Sandwich from "../../products/Sandwich"
import Bread from "../../sandwichs/components/Bread"
import SandwichType from "../../sandwichs/components/SandwichType"
import Sauce from "../../sandwichs/components/Sauce"

export default interface IBuilder {

    reset() : void
    getSandwich() : Sandwich
    setSandwichType(SandwichType : SandwichType) : void
    setBread(bread : Bread) : void
    setProtein(protein : string) : void
    setSalad(salad : string[]) : void
    addSauces(sauce : Sauce) : void

}