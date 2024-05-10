export default class Bread {

    constructor(private _pasta) {}

    get pasta() : string {
        return this._pasta
    }

    set pasta(pasta : string){
        this._pasta = pasta
    }
}