import * as http from 'http';
import * as express from "express";
import * as bodyParser from "body-parser";
import * as request from 'request';
import { ticTacToeService } from '../ticTacToeService';

function send(body: number[], cb: request.RequestCallback) {
  request.post("http://localhost:5000/checkForWinner",
    { body: JSON.stringify(body), headers: { "Content-Type": "application/json" } }, cb);
}

describe("Tic Tac Toe Winner", function () {
  let server: http.Server;

  beforeAll((done: any) => {
    // Start server used for testing
    const app = express();
    app.use(bodyParser.json());
    app.post("/checkForWinner", ticTacToeService);
    server = app.listen(5000, () => done());
  });
  afterAll((done: any) => {
    // End server after testing is done
    server.close(() => done());
  });
  it("returns winner", done => {
    send([0, 0, 0, 1, 1, 1, 2, 2, 0], (err, res, body) => {
      expect(err).toBeFalsy();
      expect(res.statusCode).toBe(200);
      expect(JSON.parse(body).winner).toBe(1);
      done();
    });
  });
  it("returns no winner", done => {
    send([0, 0, 0, 0, 0, 0, 0, 0, 0], (err, res, body) => {
      expect(res.statusCode).toBe(204);
      done();
    });
  });
  it("detects invalid bord", done => {
    send([0, 0], (err, res, body) => {
      expect(res.statusCode).toBe(400);
      done();
    });
  });
});