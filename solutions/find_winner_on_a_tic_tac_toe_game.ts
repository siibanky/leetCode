import {assertEqual} from "../assert";

function tictactoe(moves: number[][]): string {
    let board = [];
    for (let i = 0; i < 3; i++) {
        board[i] = [];
        for (let j = 0; j < 3; j++) {
            board[i][j] = "";
        }
    }
    let currentPlayer = "A";
    for (let i = 0; i < moves.length; i++) {
        let row = moves[i][0];
        let col = moves[i][1];
        board[row][col] = currentPlayer;
        currentPlayer = currentPlayer === "A" ? "B" : "A";
    }
    // checking for rows
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            return board[i][0];
        }
    }
    //checking cols
    for (let i = 0; i < 3; i++) {
        if (board[0][i] !== '' && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
            return board[0][i];
        }
    }
    //checking for dia
    for (let i = 0; i < 3; i++) {
        if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
            return board[0][0];
        }
        if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
            return board[0][2];
        }
    }
    return moves.length === 9 ? "Draw" : "Pending";
}

const array1 = [[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]];
const string1: string = "A";
assertEqual(tictactoe(array1), string1);
// A wins, they always play first

const array2 = [[0, 0], [1, 1], [0, 1], [0, 2], [1, 0], [2, 0]];
const string2: string = "B";

assertEqual(tictactoe(array2), string2);
// B wins

const array3 = [[0, 0], [1, 1], [2, 0], [1, 0], [1, 2], [2, 1], [0, 1], [0, 2], [2, 2]];
const string3: string = "Draw";
assertEqual(tictactoe(array3), string3);
// The game ends in a draw since there are no more to make

const array4 = [[0, 0], [1, 1]];
const string4: string = "Pending";
assertEqual(tictactoe(array4), string4);
//The game has not finished yet