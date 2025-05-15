import "../../styles/body.css"
import { useDispatch, useSelector } from "react-redux";
import { giveLike } from "../../store/slices/PhraseSlice";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";

function Phrases() {

    const navigate = useNavigate();
    const phraseState = useSelector((state: RootState) => state.phraseStore);
    const dispatch = useDispatch();

    return (
        <main className="main-container">
            {phraseState.map((phrase, idx) => (

                <div className="div-container-phrase" key={idx}>
                    <div
                        className={(idx % 2 == 0 ? 'div-container-phrase-pair' : 'div-container-phrase-odd')} key={idx}>
                        <div className="phrase-content" onClick={() => { navigate(`/frase/${phrase.id}`) }} >
                            <p>"{phrase.phrase}"</p>
                            <b>{phrase.type} | {phrase.title} - {phrase.author}</b>
                        </div>

                    </div>
                    <div className="div-reactions">
                        <button onClick={() => dispatch(giveLike(idx))}>Like</button>
                        <span style={{ fontSize: 20, color: "white" }}>{phrase.likes}</span>
                    </div>
                </div>
            ))}
        </main>
    );
}

export default Phrases;
