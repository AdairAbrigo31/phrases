import { Phrase } from "./Iphrases"
import { OriginPhrase } from "./Ephrases"
import memento from "../assets/memento.webp"
import  la_cancion_de_aquiles from "../assets/la_cancion_de_aquiles.png"
import nikelogo from "../assets/nikelogo.jpg"

export const phrases:Array<Phrase> = [
    {phrase: "No recuerdo haberte olvidado", type: OriginPhrase.MOVIE, title : "Memento", author: "Christopher Nolan", cover:memento},
    {phrase: "Lo es, pero hay más; el no te ha contado la peor parte -repuso con voz monocorde, como si las palabras las hubiera pronunciado una estatua-. Jamás regresarás si vas a Troya.", 
        type: OriginPhrase.BOOK, title: "La canción de Aquiles", 
        author: "Madeline Miller", 
        cover: la_cancion_de_aquiles
    },
    {phrase: "Dormí unas horas. Al despertar hacía un día frío y lluvioso. Me acerqué a la ventana y los árboles estaban empapados. La niebla lo envolvía todo." +
        "El mundo era igual que el día anterior, que siempre. Nada había cambiado, y menos para mí. Y sin embargo, mi valor era de ciento setenta y ocho millones de dólares", 
        type: OriginPhrase.BOOK, title : "Nunca te pares", author: "Phil Knight", cover:nikelogo},
    
]