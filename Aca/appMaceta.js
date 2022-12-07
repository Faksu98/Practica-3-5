import { ContenedorTarjetas } from "./contenedortarjetas.js";
import { listaMacetas } from "./listaMacetas.js";

const contenedorTarjetasMacetas = new ContenedorTarjetas("#contenedor-cards");

contenedorTarjetasMacetas.agergarTarjetasALaAppCon(listaMacetas);

