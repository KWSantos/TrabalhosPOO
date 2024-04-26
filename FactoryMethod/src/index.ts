import CarTransport from "./transport/CarTransport"
import MotorcycleTransport from "./transport/MotorcycleTransport"
import Transport from "./transport/Transport"

declare var process

let transport: Transport

if(process.argv.includes("uberCarro")){
    transport = new CarTransport()
}
else if(process.argv.includes("uberMoto")){
    transport = new MotorcycleTransport();
} else {
    console.log("Selecione o tipo de transporte")
}

if(transport) transport.startTransport()
