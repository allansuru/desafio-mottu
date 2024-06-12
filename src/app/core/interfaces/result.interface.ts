import { Character } from "src/app/modules/character/shared/interfaces/character.interface";

interface Info {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}


export interface CharacterResponse {
    info: Info;
    results: Character[];
}
