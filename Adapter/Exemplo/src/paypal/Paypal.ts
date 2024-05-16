import Token from "../utils/Token";
import IPayPalPayments from "./interfaces/IPayPalPayment";

export default class Paypal implements IPayPalPayments {

    private token : Token

    authToken(): Token {
        return new Token()
    }
    payPalPayment(): void {
        this.token = this.authToken()
        console.log("TOKEN: " + this.token.token)
        console.log("Enviando pagamento via Paypal")
    }
    payPalReceive(): void {
        console.log("Recebendo pagamento via Paypal")
    }

}