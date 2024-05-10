import Sandwich from "../products/Sandwich";
import Bread from "../sandwichs/components/Bread";
import SandwichType from "../sandwichs/components/SandwichType";
import Sauce from "../sandwichs/components/Sauce";
import IBuilder from "./interfaces/IBuilder";

export default class SandwichBuilder implements IBuilder {

    private sandwich = new Sandwich

    reset(): void {
       this.sandwich = new Sandwich 
    }
    getSandwich(): Sandwich {
        const result : Sandwich = this.sandwich
        this.reset()
        return result
    }

    addSalad(salad : string) {
        this.sandwich.addSalad(salad)
    }

    setSandwichType(sandwichType: SandwichType): void {
        this.sandwich.sandwichType = sandwichType
    }
    setBread(bread: Bread): void {
        this.sandwich.bread = bread
    }
    setProtein(protein: string): void {
        this.sandwich.protein = protein
    }
    
    addSauces(sauce: Sauce): void {
        this.sandwich.addSauce(sauce)
    }

    setSalad(salad: string[]): void {
        this.sandwich.salads = salad
    }

}