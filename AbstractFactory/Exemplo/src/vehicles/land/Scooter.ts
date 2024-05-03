import ILandVehicle from "./interfaces/ILandVehicle";

export default class Scooter implements ILandVehicle {

    startRoute(): void {
        this.getCargo()
        console.log("Scooter: Iniciando rota")
    }
    getCargo(): void {
        console.log("Scooter: Carga embarcada")
    }
    
}