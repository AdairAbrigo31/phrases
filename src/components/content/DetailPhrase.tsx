import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { phrases } from "../../frases_e_imagenes/listaFrases";
import { Phrase } from "../../rulesPhrases/Iphrases";

function DetailPhrase() {
    // Obtener el id de la frase
    const { phraseID } = useParams<{ phraseID: string }>();

    // Estado para controlar si está cargando
    const [isLoading, setIsLoading] = useState(true);

    // De tipo Phrase
    const [phrase, setPhrase] = useState<Phrase | null>(null);

    useEffect(() => {
        console.log("Frases: ", phrases);
        setIsLoading(true);

        // Buscar la frase en la lista de frases, simulando búsqueda en una base de datos
        const id = phraseID ? parseInt(phraseID) : 0;
        const phraseFound = phrases.find((p) => p.id === id);

        setPhrase(phraseFound || null);
        setIsLoading(false);
    }, [phraseID]);

    return (
        <>
            <main>
                <h2>Detalle de la frase</h2>
                {isLoading ? (
                    <p>Cargando...</p>
                ) : phrase ? (
                    <h2>{phrase.phrase}</h2>
                ) : (
                    <p>No se encontró la frase</p>
                )}
            </main>
        </>
    );
}

export default DetailPhrase;