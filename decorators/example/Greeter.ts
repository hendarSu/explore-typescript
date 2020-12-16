import { logged } from "./decorators";

export class Greeter {
    public _griting:  string;

    constructor(message: string) {
        this._griting = message;
    }

    @logged
    public greet() {
        return `Hello ${this._griting}`;
    }

}