import MercadoPagoAdapter from "./adapters/MercadoPagoAdapter";
import MercadoPago from "./mercadopago/MercadoPago";
import Paypal from "./paypal/Paypal";
import IPayPalPayments from "./paypal/interfaces/IPayPalPayment";

const payment : IPayPalPayments = new MercadoPagoAdapter(new MercadoPago)

payment.payPalPayment()
payment.payPalReceive()