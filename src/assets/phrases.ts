import { Phrase } from "../Phrases/Iphrases"
import { OriginPhrase } from "../Phrases/Ephrases"
import memento from "./memento.webp"
import  la_cancion_de_aquiles from "./la_cancion_de_aquiles.png"

export const phrases:Array<Phrase> = [
    {phrase: "No recuerdo haberte olvidado", type: OriginPhrase.MOVIE, title : "Memento", author: "Christopher Nolan", cover:memento},
    {phrase: "Lo es, pero hay más; el no te ha contado la peor parte -repuso con voz monocorde, como si las palabras las hubiera pronunciado una estatua-. Jamás regresarás si vas a Troya.", 
        type: OriginPhrase.BOOK, title: "La canción de Aquiles", 
        author: "Madeline Miller", 
        cover: la_cancion_de_aquiles
    }
]