import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { OriginPhrase } from "../../rulesPhrases/Ephrases";
import { giveLikeFilter } from "../../store/slices/PhraseSlice";

function Libros () {
    const phraseState = useSelector((state: RootState) => state.phraseStore);
    const dispatch = useDispatch();
    const phraseBooksState = phraseState.filter((phrase) => phrase.type == OriginPhrase.BOOK);
    return (
        <>
            <main>
            {phraseBooksState.map((phrase, idx) => (
                <div style={{
                    backgroundImage: `url("${phrase.cover}")`, 
                }}  
                className={(idx % 2 == 0 ?  'div-container-phrase-pair' : 'div-container-phrase-odd')} key={idx}>
                <div className="phrase-content">
                    <p>"{phrase.phrase}"</p>
                    <b>{phrase.title} - {phrase.author}</b>
                </div>
                <div className="div-reactions">
                    <button onClick={() => dispatch(giveLikeFilter(phrase))}>Like</button>
                    <span style={{fontSize : 20, color: "white"}}>{phrase.likes}</span>
                </div>
            </div>
            ))}
            </main>
        </>
    );
}

export default Libros;