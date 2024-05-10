import Bread from "../sandwichs/components/Bread";
import SandwichType from "../sandwichs/components/SandwichType";
import Sauce from "../sandwichs/components/Sauce";

export default class Sandwich {

    private _sandwichType : SandwichType
    private _bread : Bread
    private _protein : string
    private _salads : string[] = []
    private _sauces : Sauce[] = []

    addSalad(salad : string) {
        this._salads.push(salad)
    }

    get salads() : string[] {
        return this._salads
    }

    set salads(item : string[]) {
        this._salads = item
    }

    get saladsTotal() : number {
        return this._salads.length
    }

    get sandwichType() : SandwichType {
        return this._sandwichType
    }

    set sandwichType(item : SandwichType) {
        this._sandwichType = item
    }

    get protein() : string {
        return this._protein
    }

    set protein(item : string) {
        this._protein = item
    }

    get bread() : Bread {
        return this._bread
    }

    set bread(item : Bread) {
        this._bread = item
    }

    get sauce() : Sauce[] {
        return this._sauces
    }

    get sauceTotal() : number {
        return this._sauces.length
    }

    addSauce(sauce : Sauce) {
        this._sauces.push(sauce)
    }
}