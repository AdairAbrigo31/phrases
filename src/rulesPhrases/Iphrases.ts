import { OriginPhrase } from "./Ephrases";

export interface Phrase {
    id: number;
    phrase: string;
    type: OriginPhrase;
    title: string;
    author: string;
    cover: string;
    likes: number;
};