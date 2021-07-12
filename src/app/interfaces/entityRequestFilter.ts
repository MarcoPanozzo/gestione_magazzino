import { ETipoGiacenza } from "../enumerations/ETipoGiacenza";

export interface EntityRequestFilter {
    categoria: string;
    titolo: string;
    prezzo: number[];
    tipoGiacenza: ETipoGiacenza;
}