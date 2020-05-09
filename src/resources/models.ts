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
    position: number;
    selectedCard: number | null;
    cards: number[];
    playedCards: number[];
    recycledCards: number[];

}
export type RiderType = 'Rouleur' | 'Sprinteur';

export interface TrackTile {
    type: TrackTileType;
    fields: FieldType[][];
    identifier: string;
    goalAfter?: number;
    startAfter?: number;
    direction?: 'left' | 'right';
}

export type TrackTileType = 'straight' | 'curve' | 'corner' | 'goal' | 'start';

export type FieldType = 'flat' | 'mountain' | 'descend';
