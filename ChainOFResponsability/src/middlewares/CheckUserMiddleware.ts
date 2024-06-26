import DataBase from "../servers/DataBase";
import Middleware from "./Middleware";

export default class CheckUserMiddleware extends Middleware {

    public check(email: string, password: string): boolean {
        if(email.indexOf("@") === -1) {
            console.log("Email invalido")
            return false
        }
        if(password.length < 6) {
            console.log("Senha fraca, digite outra")
            return false
        }
        if(!DataBase.filter(item => item.email === email && item.password === password).length) {
            console.log("Usuario nao encontrado")
            return false
        }
        return this.checkNext(email, password)
    }
    
}