class Tarjeta{

    #imagen = "def imagen";
    #titulo = "def titulo";
    #descripcion = "def descripcion";
    #nombreBoton = "def nombreBoton";
    #precio = 0;

    /**
     * Creacion de la tarjeta
     * @param {String} titulo de la tarjeta
     * @param {String} descripcion de la tarjeta
     * @param {Number} precio de la tarjeta
     * @param {String} imagen de la tarjeta URL
     */
    constructor(titulo, descripcion, precio, imagen){
        this.#titulo = titulo;
        this.#descripcion = descripcion;
        this.#precio = precio;
        this.#imagen = imagen;
    }

    getHtml(){
        return `
            <div class="card card-objeto" style="width: 18rem;">
                <img class="card-imgF" src="${this.#imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${this.#titulo}</h5>
                    <p class="card-text">${this.#descripcion}</p>
                    <p class="card-text">$${this.#precio}</p>
                    <a href="#" class="btn btn-primary">Comprar</a>
                </div>
            </div>
        `;
    }

}

export {Tarjeta};