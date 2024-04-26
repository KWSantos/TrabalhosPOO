import IVehicle from "./interfaces/IVehicle";

export default class Motorcycle implements IVehicle {

    startRoute(): void {
        this.getCargo()
        console.log("Moto: iniciando trajeto")
    }
    getCargo(): void {
        console.log("Moto: passageiros embarcados")
    }
    
}