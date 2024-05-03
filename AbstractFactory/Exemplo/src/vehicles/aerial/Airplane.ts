import IAircraft from "./interfaces/IAircraft";

export default class Airplane implements IAircraft {

    startRoute(): void {
        this.checkWind()
        this.getCargo()
        console.log("Aviao: Iniciando rota")
    }
    getCargo(): void {
        console.log("Aviao: Embarque dos passageiros")
    }
    checkWind(): void {
        console.log("Aviao: Ventos a 60 Km/h")
    }
    
}