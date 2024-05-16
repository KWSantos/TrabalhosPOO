import Token from "../utils/Token";
import IMercadoPagoPayment from "./interfaces/IMercadoPagoPayment";

export default class MercadoPago implements IMercadoPagoPayment {

    private token : Token

    authToken(): Token {
        return new Token()
    }
    payment(): void {
        this.token = this.authToken()
        console.log("TOKEN: " + this.token.token)
        console.log("Enviando pagamento via Mercado Pago")
    }
    receive(): void {
        console.log("Recebendo pagamento via Mercado Pago")
    }
    
}