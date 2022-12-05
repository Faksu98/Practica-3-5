import { Producto } from "./Producto.js";
import { Tarjeta } from "./Tarjeta.js";

const unProducto = new Producto ("Sustrato Growmix Multipro", "80 lts, cultivo de tierra", 3500, "https://http2.mlstatic.com/D_NQ_NP_815747-MLA46582963885_072021-O.webp");

const unaTarjeta = new Tarjeta (
    unProducto.getNombre(),
    unProducto.getCaracteristicas(),
    unProducto.getCoste(),
    unProducto.getFoto(),
);

document.querySelector("#contenedor-cards").innerHTML = `
    <p></p>
        <div class="row">

            <div class="col">
                ${unaTarjeta.getHtml()}
            </div>             
            
        </div>
`;
