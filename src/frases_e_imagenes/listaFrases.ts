import { Phrase } from "../rulesPhrases/Iphrases"
import { OriginPhrase } from "../rulesPhrases/Ephrases"
import memento from "./memento.webp"
import la_cancion_de_aquiles from "./la_cancion_de_aquiles.png"
import nikelogo from "./nikelogo.png"
import de_cero_a_uno from "./de_cero_a_uno.png"

export const phrases: Array<Phrase> = [
    {
        id: 1,
        phrase: "No recuerdo haberte olvidado",
        type: OriginPhrase.MOVIE,
        title: "Memento",
        author: "Christopher Nolan",
        cover: memento,
        likes: 0
    },
    {
        id: 2,
        phrase: "Lo es, pero hay más; el no te ha contado la peor parte -repuso con voz monocorde, como si las palabras las hubiera pronunciado una estatua-. Jamás regresarás si vas a Troya.",
        type: OriginPhrase.BOOK,
        title: "La canción de Aquiles",
        author: "Madeline Miller",
        cover: la_cancion_de_aquiles,
        likes: 0
    },
    {
        id: 3,
        phrase: "Dormí unas horas. Al despertar hacía un día frío y lluvioso. Me acerqué a la ventana y los árboles estaban empapados. La niebla lo envolvía todo." +
            "El mundo era igual que el día anterior, que siempre. Nada había cambiado, y menos para mí. Y sin embargo, mi valor era de ciento setenta y ocho millones de dólares",
        type: OriginPhrase.BOOK,
        title: "Nunca te pares",
        author: "Phil Knight",
        cover: nikelogo,
        likes: 0
    },
    {
        id: 4,
        phrase: "Sólo en un futuro definido el dinero constituye un medio para un fin, no el fin en sí mismo",
        type: OriginPhrase.BOOK,
        title: "De cero a uno",
        author: "Peter Thiel",
        cover: de_cero_a_uno,
        likes: 0
    },
]