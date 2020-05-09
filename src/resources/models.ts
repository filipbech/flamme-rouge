export interface IPlayer {
    name: string;
    type: PlayerType;
    color: TeamColor;
    riders: IRider[];
}
export type PlayerType = 'person';

export type TeamColor = 'red' | 'blue' | 'green' | 'black';

export interface IRider {
    type: 'Rouleur' | 'Sprinteur';
    position: number;
    selectedCard: number | null;
    cards: number[];
    playedCards: number[];
}

export interface BoardPart {
    type: BoardPartType;
    fields: FieldType[][];
    identifier: string;
    goalAfter?: number;
    startAfter?: number;
    direction?: 'left' | 'right';
}

export type BoardPartType = 'straight' | 'curve' | 'corner' | 'goal' | 'start';

export type FieldType = 'flat' | 'mountain' | 'descend';
