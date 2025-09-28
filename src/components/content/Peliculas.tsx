import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { OriginPhrase } from "../../rulesPhrases/Ephrases";
function Peliculas() {
  const phraseState = useSelector((state: RootState) => state.phraseStore);
  const phraseMoviesState = phraseState.filter(
    (ph) => ph.type == OriginPhrase.MOVIE
  );
  return (
    <>
      <main className="container">
        {phraseMoviesState.map((phrase) => (
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

export default Peliculas;
