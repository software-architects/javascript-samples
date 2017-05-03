import { HttpModule } from '@angular/http';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { TicTacToeComponent } from './tictactoe.component';

describe('Tic Tac Toe Component', () => {
    let comp: TicTacToeComponent;
    let fixture: ComponentFixture<TicTacToeComponent>;
    let board: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TicTacToeComponent],
            imports: [ HttpModule ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TicTacToeComponent);
        comp = fixture.componentInstance;

        board = fixture.debugElement.query(By.css("board-table"));
    });
});