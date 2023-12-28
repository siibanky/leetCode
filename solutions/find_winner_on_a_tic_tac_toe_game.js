"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("../assert");
function tictactoe(moves) {
    var board = [];
    for (var i = 0; i < 3; i++) {
        board[i] = [];
        for (var j = 0; j < 3; j++) {
            board[i][j] = "";
        }
    }
    var currentPlayer = "A";
    for (var i = 0; i < moves.length; i++) {
        var row = moves[i][0];
        var col = moves[i][1];
        board[row][col] = currentPlayer;
        currentPlayer = currentPlayer === "A" ? "B" : "A";
    }
    // checking for rows
    for (var i = 0; i < 3; i++) {
        if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            return board[i][0];
        }
    }
    //checking cols
    for (var i = 0; i < 3; i++) {
        if (board[0][i] !== '' && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
            return board[0][i];
        }
    }
    //checking for dia
    for (var i = 0; i < 3; i++) {
        if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
            return board[0][0];
        }
        if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
            return board[0][2];
        }
    }
    return moves.length === 9 ? "Draw" : "Pending";
}
var array1 = [[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]];
var string1 = "A";
(0, assert_1.assertEqual)(tictactoe(array1), string1);
// A wins, they always play first
var array2 = [[0, 0], [1, 1], [0, 1], [0, 2], [1, 0], [2, 0]];
var string2 = "B";
(0, assert_1.assertEqual)(tictactoe(array2), string2);
// B wins
var array3 = [[0, 0], [1, 1], [2, 0], [1, 0], [1, 2], [2, 1], [0, 1], [0, 2], [2, 2]];
var string3 = "Draw";
(0, assert_1.assertEqual)(tictactoe(array3), string3);
// The game ends in a draw since there are no more to make
var array4 = [[0, 0], [1, 1]];
var string4 = "Pending";
(0, assert_1.assertEqual)(tictactoe(array4), string4);
//The game has not finished yet
