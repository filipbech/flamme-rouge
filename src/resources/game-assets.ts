import { TrackTile } from "./models";

export const sprinteurCards = [2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 9, 9, 9];
export const rouleurCards = [3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7];

export const boardParts: TrackTile[] = [
    {
        type: 'straight',
        identifier: 'c',
        fields: [['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat']]
    },
    {
        type: 'straight',
        identifier: 'C',
        fields: [['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat'], ['mountain', 'mountain'], ['mountain', 'mountain'], ['mountain', 'mountain']]
    },
    {
        type: 'straight',
        identifier: 'd',
        fields: [['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat']]
    },
    {
        type: 'straight',
        identifier: 'D',
        fields: [['mountain', 'mountain'], ['mountain', 'mountain'], ['mountain', 'mountain'], ['mountain', 'mountain'], ['mountain', 'mountain'], ['descend', 'descend']]
    },
    {
        type: 'straight',
        identifier: 'f',
        fields: [['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat']]
    },
    {
        type: 'straight',
        identifier: 'F',
        fields: [['descend', 'descend'], ['descend', 'descend'], ['descend', 'descend'], ['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat']]
    },
    {
        type: 'straight',
        identifier: 'l',
        fields: [['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat']]
    },
    {
        type: 'straight',
        identifier: 'L',
        fields: [['mountain', 'mountain'], ['mountain', 'mountain'], ['mountain', 'mountain'], ['descend', 'descend'], ['descend', 'descend'], ['descend', 'descend']]
    },
    {
        type: 'goal',
        identifier: 'u',
        fields: [['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat']],
        goalAfter: 1
    },
    {
        type: 'goal',
        identifier: 'U',
        fields: [['mountain', 'mountain'], ['mountain', 'mountain'], ['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat']],
        goalAfter: 2
    },
    {
        type: 'straight',
        identifier: 'b',
        fields: [['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat']]
    },
    {
        type: 'straight',
        identifier: 'B',
        fields: [['descend', 'descend'], ['descend', 'descend'], ['descend', 'descend'], ['descend', 'descend'], ['flat', 'flat'], ['flat', 'flat']]
    },
    {
        type: 'straight',
        identifier: 'n',
        fields: [['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat']]
    },
    {
        type: 'straight',
        identifier: 'N',
        fields: [['mountain', 'mountain'], ['mountain', 'mountain'], ['mountain', 'mountain'], ['mountain', 'mountain'], ['mountain', 'mountain'], ['mountain', 'mountain']]
    },
    {
        type: 'straight',
        identifier: 'm',
        fields: [['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat']]
    },
    {
        type: 'straight',
        identifier: 'M',
        fields: [['flat', 'flat'], ['flat', 'flat'], ['mountain', 'mountain'], ['mountain', 'mountain'], ['mountain', 'mountain'], ['mountain', 'mountain']]
    },
    {
        type: 'start',
        identifier: 'a',
        fields: [['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat']],
        startAfter: 5
    },
    {
        type: 'straight',
        identifier: 'A',
        fields: [['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat'], ['flat', 'flat']],
        startAfter: 4
    },
    {
        type: 'curve',
        identifier: 'q',
        direction: 'left',
        fields: [['flat', 'flat'], ['flat', 'flat']]
    },
    {
        type: 'curve',
        identifier: 'Q',
        direction: 'right',
        fields: [['mountain', 'mountain'], ['mountain', 'mountain']]
    },
    {
        type: 'curve',
        identifier: 'h',
        direction: 'left',
        fields: [['flat', 'flat'], ['flat', 'flat']]
    },
    {
        type: 'curve',
        identifier: 'H',
        direction: 'right',
        fields: [['descend', 'descend'], ['descend', 'descend']]
    },
    {
        type: 'curve',
        identifier: 't',
        direction: 'left',
        fields: [['flat', 'flat'], ['flat', 'flat']]
    },
    {
        type: 'curve',
        identifier: 'T',
        direction: 'right',
        fields: [['flat', 'flat'], ['flat', 'flat']]
    },
    {
        type: 'curve',
        identifier: 'k',
        direction: 'right',
        fields: [['flat', 'flat'], ['flat', 'flat']]
    },
    {
        type: 'curve',
        identifier: 'K',
        direction: 'left',
        fields: [['mountain', 'mountain'], ['mountain', 'mountain']]
    },
    {
        type: 'curve',
        identifier: 's',
        direction: 'right',
        fields: [['flat', 'flat'], ['flat', 'flat']]
    },
    {
        type: 'curve',
        identifier: 'S',
        direction: 'left',
        fields: [['flat', 'flat'], ['flat', 'flat']]
    },
    {
        type: 'curve',
        identifier: 'r',
        direction: 'right',
        fields: [['flat', 'flat'], ['flat', 'flat']]
    },
    {
        type: 'curve',
        identifier: 'R',
        direction: 'left',
        fields: [['mountain', 'mountain'], ['mountain', 'mountain']]
    },
    {
        type: 'corner',
        identifier: 'i',
        direction: 'left',
        fields: [['flat', 'flat'], ['flat', 'flat']]
    },
    {
        type: 'corner',
        identifier: 'I',
        direction: 'right',
        fields: [['flat', 'flat'], ['flat', 'flat']]
    },
    {
        type: 'corner',
        identifier: 'g',
        direction: 'left',
        fields: [['flat', 'flat'], ['flat', 'flat']]
    },
    {
        type: 'corner',
        identifier: 'G',
        direction: 'right',
        fields: [['mountain', 'mountain'], ['mountain', 'mountain']]
    },
    {
        type: 'corner',
        identifier: 'o',
        direction: 'right',
        fields: [['flat', 'flat'], ['flat', 'flat']]
    },
    {
        type: 'corner',
        identifier: 'O',
        direction: 'left',
        fields: [['mountain', 'mountain'], ['mountain', 'mountain']]
    },
    {
        type: 'corner',
        identifier: 'j',
        direction: 'right',
        fields: [['flat', 'flat'], ['flat', 'flat']]
    },
    {
        type: 'corner',
        identifier: 'J',
        direction: 'left',
        fields: [['flat', 'flat'], ['flat', 'flat']]
    },
    {
        type: 'corner',
        identifier: 'e',
        direction: 'left',
        fields: [['flat', 'flat'], ['flat', 'flat']]
    },
    {
        type: 'corner',
        identifier: 'E',
        direction: 'right',
        fields: [['mountain', 'mountain'], ['mountain', 'mountain']]
    },
    {
        type: 'corner',
        identifier: 'p',
        direction: 'right',
        fields: [['flat', 'flat'], ['flat', 'flat']]
    },
    {
        type: 'corner',
        identifier: 'P',
        direction: 'left',
        fields: [['descend', 'descend'], ['descend', 'descend']]
    }
];