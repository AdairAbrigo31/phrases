import "../../styles/body.css"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { OriginPhrase } from "../../rulesPhrases/Ephrases";
import { giveLikeFilter } from "../../store/slices/PhraseSlice";

function Peliculas() {
    const phraseState = useSelector((state: RootState) => state.phraseStore);
    const dispatch = useDispatch();
    const phraseMoviesState = phraseState.filter((ph) => ph.type == OriginPhrase.MOVIE);
    return (
        <main className="main-container">
            {phraseMoviesState.map((phrase, idx) => (
                <div className="div-container-phrase" key={idx}>
                    <div className={(idx % 2 == 0 ? 'div-container-phrase-pair' : 'div-container-phrase-odd')} key={idx}>
                        <div className="phrase-content">
                            <p>"{phrase.phrase}"</p>
                            <b>{phrase.title} - {phrase.author}</b>
                        </div>
                        <div className="div-reactions">
                            <button onClick={() => dispatch(giveLikeFilter(phrase))}>Like</button>
                            <span style={{ fontSize: 20, color: "white" }}>{phrase.likes}</span>
                        </div>
                    </div>
                </div>

            ))}
        </main>
    );
}

export default Peliculas;