import Token from "../../utils/Token"

export default interface IPayonerPayment {

    authToken() : Token
    sendPayment() : void
    receivePayment() : void
}