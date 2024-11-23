import { Phrase } from "../rulesPhrases/Iphrases"
import { OriginPhrase } from "../rulesPhrases/Ephrases"
import memento from "./memento.webp"
import  la_cancion_de_aquiles from "./la_cancion_de_aquiles.png"
import nikelogo from "./nikelogo.png"

export const phrases:Array<Phrase> = [
    {phrase: "No recuerdo haberte olvidado", type: OriginPhrase.MOVIE, title : "Memento", author: "Christopher Nolan", cover:memento, likes:0},
    {phrase: "Lo es, pero hay más; el no te ha contado la peor parte -repuso con voz monocorde, como si las palabras las hubiera pronunciado una estatua-. Jamás regresarás si vas a Troya.", 
        type: OriginPhrase.BOOK, 
        title: "La canción de Aquiles", 
        author: "Madeline Miller", 
        cover: la_cancion_de_aquiles,
        likes: 0
    },
    {phrase: "Dormí unas horas. Al despertar hacía un día frío y lluvioso. Me acerqué a la ventana y los árboles estaban empapados. La niebla lo envolvía todo." +
        "El mundo era igual que el día anterior, que siempre. Nada había cambiado, y menos para mí. Y sin embargo, mi valor era de ciento setenta y ocho millones de dólares", 
        type: OriginPhrase.BOOK, 
        title : "Nunca te pares", 
        author: "Phil Knight", 
        cover:nikelogo,
        likes:0
    },
    {phrase: "Dormí unas horas. Al despertar hacía un día frío y lluvioso. Me acerqué a la ventana y los árboles estaban empapados. La niebla lo envolvía todo." +
        "El mundo era igual que el día anterior, que siempre. Nada había cambiado, y menos para mí. Y sin embargo, mi valor era de ciento setenta y ocho millones de dólares", 
        type: OriginPhrase.BOOK, 
        title : "Nunca te pares", 
        author: "Phil Knight", 
        cover:nikelogo,
        likes:0
    },
    
]