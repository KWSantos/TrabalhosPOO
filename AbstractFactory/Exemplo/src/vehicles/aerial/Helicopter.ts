import IAircraft from "./interfaces/IAircraft";

export default class Helicopter implements IAircraft {

    startRoute(): void {
        this.checkWind()
        this.getCargo()
        console.log("Helicoptero: Iniciando rota")
    }
    getCargo(): void {
        console.log("Helicoptero: Carga recebida")
    }
    checkWind(): void {
        console.log("Helicoptero: Ventos a 30 Km/h")
    }
    
}