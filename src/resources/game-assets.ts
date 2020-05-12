import { TrackTile } from "./models";

export const sprinteurCards = [2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 9, 9, 9];
export const rouleurCards = [3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7];

export const boardParts: TrackTile[] = [
    {
        type: 'straight',
        identifier: 'c',
        rows: [{ fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }]
    },
    {
        type: 'straight',
        identifier: 'C',
        rows: [{ fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'mountain', fields: [null, null] }, { fieldType: 'mountain', fields: [null, null] }, { fieldType: 'mountain', fields: [null, null] }]
    },
    {
        type: 'straight',
        identifier: 'd',
        rows: [{ fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }]
    },
    {
        type: 'straight',
        identifier: 'D',
        rows: [{ fieldType: 'mountain', fields: [null, null] }, { fieldType: 'mountain', fields: [null, null] }, { fieldType: 'mountain', fields: [null, null] }, { fieldType: 'mountain', fields: [null, null] }, { fieldType: 'mountain', fields: [null, null] }, { fieldType: 'descend', fields: [null, null] }]
    },
    {
        type: 'straight',
        identifier: 'f',
        rows: [{ fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }]
    },
    {
        type: 'straight',
        identifier: 'F',
        rows: [{ fieldType: 'descend', fields: [null, null] }, { fieldType: 'descend', fields: [null, null] }, { fieldType: 'descend', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }]
    },
    {
        type: 'straight',
        identifier: 'l',
        rows: [{ fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }]
    },
    {
        type: 'straight',
        identifier: 'L',
        rows: [{ fieldType: 'mountain', fields: [null, null] }, { fieldType: 'mountain', fields: [null, null] }, { fieldType: 'mountain', fields: [null, null] }, { fieldType: 'descend', fields: [null, null] }, { fieldType: 'descend', fields: [null, null] }, { fieldType: 'descend', fields: [null, null] }]
    },
    {
        type: 'goal',
        identifier: 'u',
        rows: [{ fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }],
        goalAfter: 1
    },
    {
        type: 'goal',
        identifier: 'U',
        rows: [{ fieldType: 'mountain', fields: [null, null] }, { fieldType: 'mountain', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }],
        goalAfter: 2
    },
    {
        type: 'straight',
        identifier: 'b',
        rows: [{ fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }]
    },
    {
        type: 'straight',
        identifier: 'B',
        rows: [{ fieldType: 'descend', fields: [null, null] }, { fieldType: 'descend', fields: [null, null] }, { fieldType: 'descend', fields: [null, null] }, { fieldType: 'descend', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }]
    },
    {
        type: 'straight',
        identifier: 'n',
        rows: [{ fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }]
    },
    {
        type: 'straight',
        identifier: 'N',
        rows: [{ fieldType: 'mountain', fields: [null, null] }, { fieldType: 'mountain', fields: [null, null] }, { fieldType: 'mountain', fields: [null, null] }, { fieldType: 'mountain', fields: [null, null] }, { fieldType: 'mountain', fields: [null, null] }, { fieldType: 'mountain', fields: [null, null] }]
    },
    {
        type: 'straight',
        identifier: 'm',
        rows: [{ fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }]
    },
    {
        type: 'straight',
        identifier: 'M',
        rows: [{ fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'mountain', fields: [null, null] }, { fieldType: 'mountain', fields: [null, null] }, { fieldType: 'mountain', fields: [null, null] }, { fieldType: 'mountain', fields: [null, null] }]
    },
    {
        type: 'start',
        identifier: 'a',
        rows: [{ fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }],
        startAfter: 5
    },
    {
        type: 'straight',
        identifier: 'A',
        rows: [{ fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }],
        startAfter: 4
    },
    {
        type: 'curve',
        identifier: 'q',
        direction: 'left',
        rows: [{ fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }]
    },
    {
        type: 'curve',
        identifier: 'Q',
        direction: 'right',
        rows: [{ fieldType: 'mountain', fields: [null, null] }, { fieldType: 'mountain', fields: [null, null] }]
    },
    {
        type: 'curve',
        identifier: 'h',
        direction: 'left',
        rows: [{ fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }]
    },
    {
        type: 'curve',
        identifier: 'H',
        direction: 'right',
        rows: [{ fieldType: 'descend', fields: [null, null] }, { fieldType: 'descend', fields: [null, null] }]
    },
    {
        type: 'curve',
        identifier: 't',
        direction: 'left',
        rows: [{ fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }]
    },
    {
        type: 'curve',
        identifier: 'T',
        direction: 'right',
        rows: [{ fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }]
    },
    {
        type: 'curve',
        identifier: 'k',
        direction: 'right',
        rows: [{ fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }]
    },
    {
        type: 'curve',
        identifier: 'K',
        direction: 'left',
        rows: [{ fieldType: 'mountain', fields: [null, null] }, { fieldType: 'mountain', fields: [null, null] }]
    },
    {
        type: 'curve',
        identifier: 's',
        direction: 'right',
        rows: [{ fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }]
    },
    {
        type: 'curve',
        identifier: 'S',
        direction: 'left',
        rows: [{ fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }]
    },
    {
        type: 'curve',
        identifier: 'r',
        direction: 'right',
        rows: [{ fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }]
    },
    {
        type: 'curve',
        identifier: 'R',
        direction: 'left',
        rows: [{ fieldType: 'mountain', fields: [null, null] }, { fieldType: 'mountain', fields: [null, null] }]
    },
    {
        type: 'corner',
        identifier: 'i',
        direction: 'left',
        rows: [{ fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }]
    },
    {
        type: 'corner',
        identifier: 'I',
        direction: 'right',
        rows: [{ fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }]
    },
    {
        type: 'corner',
        identifier: 'g',
        direction: 'left',
        rows: [{ fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }]
    },
    {
        type: 'corner',
        identifier: 'G',
        direction: 'right',
        rows: [{ fieldType: 'mountain', fields: [null, null] }, { fieldType: 'mountain', fields: [null, null] }]
    },
    {
        type: 'corner',
        identifier: 'o',
        direction: 'right',
        rows: [{ fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }]
    },
    {
        type: 'corner',
        identifier: 'O',
        direction: 'left',
        rows: [{ fieldType: 'mountain', fields: [null, null] }, { fieldType: 'mountain', fields: [null, null] }]
    },
    {
        type: 'corner',
        identifier: 'j',
        direction: 'right',
        rows: [{ fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }]
    },
    {
        type: 'corner',
        identifier: 'J',
        direction: 'left',
        rows: [{ fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }]
    },
    {
        type: 'corner',
        identifier: 'e',
        direction: 'left',
        rows: [{ fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }]
    },
    {
        type: 'corner',
        identifier: 'E',
        direction: 'right',
        rows: [{ fieldType: 'mountain', fields: [null, null] }, { fieldType: 'mountain', fields: [null, null] }]
    },
    {
        type: 'corner',
        identifier: 'p',
        direction: 'right',
        rows: [{ fieldType: 'flat', fields: [null, null] }, { fieldType: 'flat', fields: [null, null] }]
    },
    {
        type: 'corner',
        identifier: 'P',
        direction: 'left',
        rows: [{ fieldType: 'descend', fields: [null, null] }, { fieldType: 'descend', fields: [null, null] }]
    }
];