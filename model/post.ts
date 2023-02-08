export default class postModel {
    #id: number
    #title: string
    #body: string

    constructor(id: number, title: string, body: string){
        this.#id = id
        this.#title = title
        this.#body = body
    }

    get id(){
        return this.#id
    }

    get title(){
        return this.#title
    }

    get body(){
        return this.#body
    }

}