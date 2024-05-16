import MercadoPago from "../mercadopago/MercadoPago";
import IPayPalPayments from "../paypal/interfaces/IPayPalPayment";
import Token from "../utils/Token";

export default class MercadoPagoAdapter implements IPayPalPayments {

    private token : Token
    constructor(private mercadoPago : MercadoPago) {
        console.log("Adaptando Mercado Pago")
    }
    authToken(): Token {
        return new Token()
    }
    payPalPayment(): void {
        this.mercadoPago.payment()
    }
    payPalReceive(): void {
        this.mercadoPago.receive()
    }
    
}