import Client from "./clients/Client";
import AiQFomeDelivery from "./deliverys/AiQFomeDelivery";
import Company from "./deliverys/Company";
import IfoodDelivery from "./deliverys/IfoodDelivery";
import IDeliveryFactory from "./deliverys/interfaces/IDeliveryFactory";

const currentCompany = Company.AIQFOME

let factory : IDeliveryFactory

switch(currentCompany) {

    case Company.AIQFOME:
        factory = new AiQFomeDelivery
        break
    case Company.IFOOD:
        factory = new IfoodDelivery
        break

}

const client = new Client(factory)
client.startSnack()