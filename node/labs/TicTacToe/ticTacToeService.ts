import * as express from "express";
import { getTicTacToeWinner } from './ticTacToeWinner';

export function ticTacToeService(req: express.Request, res: express.Response) {
    if (!req.body || !Array.isArray(req.body) || req.body.length !== 9) {
        res.status(400).send({ error: "Invalid tic tac toe board" });
    } else {
        const result = getTicTacToeWinner(<number[]>req.body, 0);
        if (result) {
            res.status(200).send({ winner: result });
        } else {
            res.status(204).send();
        }
    }
};
