import Transport from "./Transport";
import Car from "./vehicle/Car";
import IVehicle from "./vehicle/interfaces/IVehicle";

export default class CarTransport extends Transport {

    protected createTransport(): IVehicle {
        return new Car()
    }

}