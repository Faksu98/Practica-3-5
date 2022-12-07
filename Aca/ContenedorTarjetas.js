import { Tarjeta } from "./Tarjeta.js";

class ContenedorTarjetas{
    #idContenedor = "por def";
    #tarjetas = [];

    constructor (idContenedor){
        this.#idContenedor = idContenedor;

    }

    agergarTarjetasALaAppCon(listaContenido){
        this.agregarInfoALasTarjetas(listaContenido);
        this.mostrarTarjetas();
    }

    mostrarTarjetas(){
        document.querySelector(this.#idContenedor).innerHTML = `
            <div class="row">
                ${this.generadorTarjetasHtml()}
            </div>
        `;
    }

    generadorTarjetasHtml(){
        let tarjetasGeneradas = ``;

        for (let i = 0; i < this.#tarjetas; i++) {
            tarjetasGeneradas += `
                <div class="col">
                    ${this.#tarjetas.getHtml()}
                </div>  
        `;    
        }
        return tarjetasGeneradas;
    }

    agregarInfoALasTarjetas(listaContenido){
        for (let i = 0; i < listaContenido; i++) {
            this.#tarjetas.push(
                new Tarjeta(
                    listaContenido[i].getNombre(),
                    listaContenido[i].getDescripcion(),
                    listaContenido[i].getPrecio(),
                    listaContenido[i].getImagen(),
                )
            );
            
        }
    }
    
}

export {ContenedorTarjetas};
