import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import { ticTacToeService } from './ticTacToeService';

// Create and configure express server
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.post("/checkForWinner", ticTacToeService);

// Start express server
var port: number = process.env.port || 1337;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
