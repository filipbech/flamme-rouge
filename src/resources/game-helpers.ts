import { RiderType, IRider, IPlayer, TeamColor, TrackTile } from "./models"
import { rouleurCards, sprinteurCards, boardParts } from "./game-assets";

const colors: TeamColor[] = ['black', 'blue', 'green', 'red']

export const initiatePlayer = (name, number): IPlayer => {
    const riders = (['Rouleur','Sprinteur'] as RiderType[]).map(t => initiateRider(t, colors[number]))
    return {
        name,
        type: 'person',
        color: colors[number],
        riders
    }
}
export const initiateRider = (riderType: RiderType, color): IRider => {
    return {
        cards: riderType === 'Rouleur' 
            ? shuffle([...rouleurCards])
            : shuffle([...sprinteurCards]),
        recycledCards:[],
        playedCards:[],
        selectedCard: null,
        color,
        type: riderType
    }
}

export const shuffle = <T>(list: Array<T>):Array<T> => {
    return list
        .map<[T, number]>(i => [i, Math.random()])
        .sort((a, b) => a[1] - b[1])
        .map(i=>i[0]);
}

export const initiateTrack = (): TrackTile[] => {
    return [
        boardParts.find(part => part.type === "start")!,
        ...shuffle(boardParts.filter(part => Math.random() > 0.5 && part.type !== "start" && part.type !== "goal")),
        boardParts.find(part => part.type === "goal")!
    ];
}   