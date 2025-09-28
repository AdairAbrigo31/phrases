import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { OriginPhrase } from "../../rulesPhrases/Ephrases";

function Libros() {
  const phraseState = useSelector((state: RootState) => state.phraseStore);
  const phraseBooksState = phraseState.filter(
    (phrase) => phrase.type == OriginPhrase.BOOK
  );
  return (
    <>
      <main className="container">
        {phraseBooksState.map((phrase) => (
          <div className="row container-phrase">
            <p className="phrase">"{phrase.phrase}"</p>
            <b className="phrase-data">
              {phrase.title} - {phrase.author}
            </b>
          </div>
        ))}
      </main>
    </>
  );
}

export default Libros;
