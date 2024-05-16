import Token from "../utils/Token";
import IPayonerPayment from "./interfaces/IPayonerPayments";

export default class Payoner implements IPayonerPayment {

    private token : Token

    authToken(): Token {
        return new Token()
    }
    sendPayment(): void {
        this.token = this.authToken()
        console.log("TOKEN: " + this.token.token)
        console.log("Enviando pagamento via Payoneer")
    }
    receivePayment(): void {
        console.log("Recebendo pagamento via Payoneer")
    }
    
}