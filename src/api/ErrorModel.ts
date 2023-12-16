export class ErrorClass extends Error {
    status: string
    error: string

    constructor({error, status}:{error: string, status: string}){
        super();    
        this.error = error
        this.status = status
    }       
}
