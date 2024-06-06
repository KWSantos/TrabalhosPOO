import Middleware from "../middlewares/Middleware";

export default class Server {

    private _middleware: Middleware;

    public set middleware(value: Middleware) {
        this._middleware = value;
    }

    public login(email : string, password : string) : boolean {
        if(this._middleware.check(email, password)) {
            console.log("Autenticado")
            return true
        }
        return false
    }
    
}