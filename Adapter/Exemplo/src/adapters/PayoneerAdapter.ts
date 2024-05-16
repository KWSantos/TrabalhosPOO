import Payoner from "../payoner/Payoner";
import IPayPalPayments from "../paypal/interfaces/IPayPalPayment";
import Token from "../utils/Token";

export default class PayoneerAdapter implements IPayPalPayments{

    private token : Token

    constructor(private payoner : Payoner) {
        console.log("Adaptando para Payoneer")
    }
    authToken(): Token {
        return new Token()
    }
    payPalPayment(): void {
        this.payoner.sendPayment()
    }
    payPalReceive(): void {
        this.payoner.receivePayment()
    }

}