import { phrases } from "./listPhrases";
import HeaderPhrases from "./HeaderPhrases";
import FooterPhrases from "./FooterPhrases";
import "../styles/body.css"
function Phrases() {
    return (
        <body>
            <HeaderPhrases></HeaderPhrases>
            <main>
                {phrases.map((phrase, idx) => (
                        <div style={{
                                backgroundImage: `url("${phrase.cover}")`, 
                            }}  
                            className={(idx % 2 == 0 ?  'div-container-phrase-pair' : 'div-container-phrase-odd')} key={idx}>
                            <div className="phrase-content">
                                <p>"{phrase.phrase}"</p>
                                <b>{phrase.type} | {phrase.title} - {phrase.author}</b>
                            </div>
                        </div>
                    
                ))}
            </main>
            <FooterPhrases></FooterPhrases>
        </body>
    );
}

export default Phrases;
