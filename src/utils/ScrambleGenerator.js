import { CUBE_TYPES } from "../types/cubes";

const MOVES_2x2 = ['R', 'U', 'F'];
const MOVES_3x3 = ['R', 'L', 'U', 'D', 'F', 'B'];
const MOVES_4x4 = [...MOVES_3x3, 'Rw', 'Lw', 'Uw', 'Dw', 'Fw', 'Bw'];
const MOVES_5x5 = [...MOVES_4x4, '3Rw', '3Lw', '3Uw', '3Dw', '3Fw', '3Bw'];
const MOVES_6x6 = [...MOVES_5x5, '4Rw', '4Lw', '4Uw', '4Dw', '4Fw', '4Bw'];
const MOVES_7x7 = [...MOVES_6x6, '5Rw', '5Lw', '5Uw', '5Dw', '5Fw', '5Bw'];
const MOVES_PYRAMINX = ['R', 'L', 'U', 'B'];
const MOVES_MEGAMINX = ['R', 'D', 'U', 'L', 'F', 'B'];
const MOVES_SKEWB = ['R', 'L', 'U', 'B'];
const MOVES_SQUARE1 = ['/','\\','U','D'];
const MODIFIERS = ['', '\'', '2'];

function getRandomMove(moves, lastMove) {
    let move;
    do{
        move = moves[Math.floor(Math.random() * moves.length)];
    }while (move[0] === (lastMove && lastMove[0]));

    const modifier = MODIFIERS[Math.floor(Math.random() * MODIFIERS.length)];

    return move + modifier;
}

function generateStandardScramble(moves, length) {
    const scramble = [];
    let lastMove = null;
    
    for (let i = 0; i < length; i++) {
        const move = getRandomMove(moves, lastMove);
        scramble.push(move);
        lastMove = move;
    }
    return scramble.join(' ');
}

function generateMegaminxScramble() {
  const scramble = [];
  
  for (let i = 0; i < 7; i++) {
    const line = [];
    for (let j = 0; j < 5; j++) {
      line.push(Math.random() > 0.5 ? 'R++' : 'R--');
      line.push(Math.random() > 0.5 ? 'D++' : 'D--');
    }
    line.push(Math.random() > 0.5 ? 'U' : "U'");
    scramble.push(line.join(' '));
  }
  
  return scramble.join('\n');
}

export function generateScramble(CUBE_TYPES) {
    switch (CUBE_TYPES) {
        case '2x2': 
            return generateStandardScramble(MOVES_2x2, 9);
        case '3x3': 
            return generateStandardScramble(MOVES_3x3, 20);
        case '4x4': 
            return generateStandardScramble(MOVES_4x4, 40);
        case '5x5': 
            return generateStandardScramble(MOVES_5x5, 60);
        case '6x6': 
            return generateStandardScramble(MOVES_6x6, 80);
        case '7x7': 
            return generateStandardScramble(MOVES_7x7, 100);
        case 'Pyraminx': 
            return generateStandardScramble(MOVES_PYRAMINX, 11);
        case 'Megaminx': 
                return generateMegaminxScramble();
        case 'Skewb': 
            return generateStandardScramble(MOVES_SKEWB, 11);
        case 'Square-1': 
            return generateStandardScramble(MOVES_SQUARE1, 12);  
        default:
  return generateStandardScramble(MOVES_3x3, 20); 

    }
}