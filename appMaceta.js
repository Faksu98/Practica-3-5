
import { Maceta } from "./Maceta.js";
import { Tarjeta } from "./Tarjeta.js";

const unaMaceta = new Maceta ("Maceta inteligente", "Root House, Aproximadamente 4 litros (3,75 exacto)", 894, "https://http2.mlstatic.com/D_NQ_NP_945273-MLA46993037535_082021-O.webp");
const dosMaceta = new Maceta ("Maceta de plastico", "entran 10 litros de tierra, reutilizable, facil lavado", "390", "https://http2.mlstatic.com/D_NQ_NP_617593-MLA51632925188_092022-O.webp");
const tresMaceta = new Maceta ("El Camino De Los Reyes", "Libro escrito por Brandon Sanderson, el primero de una saga de diez libros", "5.550", "https://http2.mlstatic.com/D_NQ_NP_865840-MLA49659758943_042022-O.webp");

const unaTarjeta = new Tarjeta (
    unaMaceta.getNombre(),
    unaMaceta.getCaracteristicas(),
    unaMaceta.getCoste(),
    unaMaceta.getFoto(),
);
/* const dosTarjeta = new Tarjeta (
    dosMaceta.getNombre(),
    dosMaceta.getCaracteristicas(),
    dosMaceta.getCoste(),
    dosMaceta.getFoto(),
);
const tresTarjeta = new Tarjeta (
    tresMaceta.getNombre(),
    tresMaceta.getCaracteristicas(),
    tresMaceta.getCoste(),
    tresMaceta.getFoto(),
); */

let tarjetasGeneradas = ``;

for (let i = 0; i < 10; i++) {
    tarjetasGeneradas += `
        <div class="col">
            ${unaTarjeta.getHtml()}
        </div>  
    `;
    
}

document.querySelector("#contenedor-cards").innerHTML = `
    <p></p>
        <div class="row">

        ${tarjetasGeneradas}
            
        </div>

`;
