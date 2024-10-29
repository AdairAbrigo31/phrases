import { phrases } from "../assets/phrases";
import HeaderPhrases from "./HeaderPhrases";
import FooterPhrases from "./FooterPhrases";
function Phrases() {
    return (
        <body>
            <HeaderPhrases></HeaderPhrases>
            {phrases.map((phrase, idx) => (
                <main>
                    <div style={{
                            backgroundImage: `url("${phrase.cover}")`, 
                        }}  
                        className="div-container-phrase" key={idx}>
                        <div className="phrase-content">
                            <p>"{phrase.phrase}"</p>
                            <b>{phrase.type} | {phrase.title} - {phrase.author}</b>
                        </div>
                    </div>
                </main>
            ))}
            <FooterPhrases></FooterPhrases>
        </body>
    );
}

export default Phrases;
