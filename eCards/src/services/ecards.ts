import { Ecard } from "../data/ecard.interface";

export class EcardsService {
    // Lugar donde guardar eCards Favoritas
    private ecardsFavoritas: Ecard[] = [];

    // Métodos
    agregarEcardAFavoritos(ecard: Ecard) {
        this.ecardsFavoritas.push(ecard);
        console.log(this.ecardsFavoritas);
    };

    quitarEcardDeFavoritos(ecard: Ecard) {
        const posicion = this.ecardsFavoritas.findIndex((ecardElemento: Ecard) => {
            // Checamos si el elemento que pasamos a la función findIndex coincide con la eCard que queremos quitar
            // return ecardElemento.id == ecard;
            return ecardElemento == ecard;
        });

        // Ahora si eliminamos sabiendo la posición del elemento usando el método splice
        this.ecardsFavoritas.splice(posicion, 1);
    };

    obtenerEcardsFavoritas() {
        // Retornamos una copia del arreglo original usando slice sin argumentos
        return this.ecardsFavoritas.slice();
    }
}