import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app-tictactoe',
    templateUrl: './tictactoe.html',
    styleUrls: ['./tictactoe.css']
})
export class TicTacToeComponent {
    public board: number[][];

    public currentPlayer = 1;
    public winner: number;

    constructor(private http: Http) {
        this.restart();
    }

    set(rowIndex: number, colIndex: number) {
        if (!this.winner && this.board[rowIndex][colIndex] === 0) {
            this.board[rowIndex][colIndex] = this.currentPlayer;
            this.currentPlayer = (this.currentPlayer === 1) ? 2 : 1;

            this.http.post('http://localhost:1337/checkForWinner', this.board[0].concat(this.board[1]).concat(this.board[2]))
                .forEach(res => {
                    if (res.status === 200) {
                        this.winner = res.json().winner;
                    }
                });
        }
    }

    restart() {
        this.board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        this.currentPlayer = 1;
        this.winner = undefined;
    }
}
