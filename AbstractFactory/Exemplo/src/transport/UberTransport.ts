import Airplane from "../vehicles/aerial/Airplane";
import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import Car from "../vehicles/land/Car";
import ILandVehicle from "../vehicles/land/interfaces/ILandVehicle";
import ITransportFacrtory from "./interfaces/ITransportFactory";

export default class UberTransport implements ITransportFacrtory {
    
    createTransportVehicle(): ILandVehicle {
        return new Car()
    }
    createTransportAircraft(): IAircraft {
        return new Airplane()
    }
    
}