import "../../styles/body.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import "./../../index.css";

function Phrases() {
  const navigate = useNavigate();
  const phraseState = useSelector((state: RootState) => state.phraseStore);

  return (
    <>
      <main className="container">
        {phraseState.map((phrase) => (
          <div
            className="phrase-content"
            onClick={() => {
              navigate(`/frase/${phrase.id}`);
            }}
          >
            <p>"{phrase.phrase}"</p>
            <b>
              {phrase.type} | {phrase.title} - {phrase.author}
            </b>
          </div>
        ))}
      </main>
    </>
  );
}

export default Phrases;
