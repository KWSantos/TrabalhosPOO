import Token from "../../utils/Token";

export default interface IPayPalPayments {

    authToken() : Token
    payPalPayment() : void
    payPalReceive() : void
    
}