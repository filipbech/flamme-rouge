export interface IPlayer {
    name: string;
    type: PlayerType;
    color: TeamColor;
    riders: IRider[];
}
export type PlayerType = 'person';

export type TeamColor = 'red' | 'blue' | 'green' | 'black';

export interface IRider {
    type: RiderType;
    selectedCard: number | null;
    cards: number[];
    playedCards: number[];
    recycledCards: number[];
    color:TeamColor;

}
export type RiderType = 'Rouleur' | 'Sprinteur';

export interface TrackTile {
    type: TrackTileType;
    rows: Row[]
    identifier: string;
    goalAfter?: number;
    startAfter?: number;
    direction?: 'left' | 'right';
}

export type TrackTileType = 'straight' | 'curve' | 'corner' | 'goal' | 'start';

export interface Row {
    fieldType: FieldType;
    fields: (IRider|null)[]
}

export type FieldType = 'flat' | 'mountain' | 'descend';
