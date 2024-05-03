import IAircraft from "./interfaces/IAircraft";

export default class Drone implements IAircraft {

    startRoute(): void {
        this.checkWind()
        this.getCargo()
        console.log("Drone: Iniciando rota")
    }
    getCargo(): void {
        console.log("Drone: Carga embarcada")
    }
    checkWind(): void {
        console.log("Drone: Ventos a 50 Km/h")
    }
    
}