import Transport from "./Transport";
import Motorcycle from "./vehicle/Motorcycle";
import IVehicle from "./vehicle/interfaces/IVehicle";

export default class MotorcycleTransport extends Transport {

    protected createTransport(): IVehicle {
        return new Motorcycle()
    }
    
}