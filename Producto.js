class Producto {
    #nombre;
    #caracteristicas;
    #foto;
    #coste;

    /**
     * Caracteristicas del producto
     * @param {String} nombre del producto 
     * @param {String} caracteristicas del producto 
     * @param {Number} coste del producto 
     * @param {String} foto del producto URL
     */
    constructor(nombre, caracteristicas, coste, foto){
        this.#nombre = nombre;
        this.#caracteristicas = caracteristicas;
        this.#coste = coste;
        this.#foto = foto;
    }

    getNombre(){
        return this.#nombre;
    }

    getCaracteristicas(){
        return this.#caracteristicas;
    }

    getCoste(){
        return this.#coste;
    }

    getFoto(){
        return this.#foto;
    }

}

export {Producto};