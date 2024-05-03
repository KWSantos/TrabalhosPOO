import Helicopter from "../vehicles/aerial/Helicopter";
import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import Motorcycle from "../vehicles/land/Motorcycle";
import ILandVehicle from "../vehicles/land/interfaces/ILandVehicle";
import ITransportFacrtory from "./interfaces/ITransportFactory";

export default class NineNineTransport implements ITransportFacrtory {

    createTransportVehicle(): ILandVehicle {
        return new Motorcycle()
    }
    createTransportAircraft(): IAircraft {
        return new Helicopter()
    }
    
}