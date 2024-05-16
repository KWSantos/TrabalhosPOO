export default class Token {

    private _token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXltZW50MSI6InBheXBhbCIsInBheW1lbnQyIjoicGF5b25lciJ9.NmAHc-XXn5d33hZYu57QAokAqrpbucgJNUzGOBuvME0";

    public get token(): string {
        return this._token;
    }

}