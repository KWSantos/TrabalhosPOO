import DataBase from "../servers/DataBase";
import PermissionType from "../servers/PermissionType";
import Middleware from "./Middleware";

export default class CheckPermissionMiddleware extends Middleware {

    public check(email: string, password: string): boolean {
        const user = DataBase.filter(item => item.email === email)
        if(user[0].permission === PermissionType.ADMIN) 
            console.log("E o ademir do baguio")
        
        else console.log("Cara de sapo")
        return this.checkNext(email, password)
    }
    
}