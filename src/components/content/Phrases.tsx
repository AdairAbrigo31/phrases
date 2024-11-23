import "../../styles/body.css"
import { useDispatch, useSelector } from "react-redux";
import { giveLike } from "../../store/slices/PhraseSlice";
import { RootState } from "../../store/store";

function Phrases() {
    const phraseState = useSelector((state: RootState) => state.phraseStore);
    const dispatch = useDispatch();
    return (
        <>
            <main>
                {phraseState.map((phrase, idx) => (
                    <div style={{
                            backgroundImage: `url("${phrase.cover}")`, 
                        }}  
                        className={(idx % 2 == 0 ?  'div-container-phrase-pair' : 'div-container-phrase-odd')} key={idx}>
                        <div className="phrase-content">
                            <p>"{phrase.phrase}"</p>
                            <b>{phrase.type} | {phrase.title} - {phrase.author}</b>
                        </div>
                        <div className="div-reactions">
                            <button onClick={() => dispatch(giveLike(idx))}>Like</button>
                            <span>{phrase.likes}</span>
                        </div>
                    </div>
                ))}
            </main>
        </>
    );
}

export default Phrases;
