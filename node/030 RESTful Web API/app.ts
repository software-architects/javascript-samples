import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";

// Create express server
var app = express();

// Add CORS so that any domain can call our web api
app.use(cors());

// Add parser for JSON bodies
app.use(bodyParser.json());

// Interface representing the data model of our web api
interface ICustomer {
    id: number;
    name: string;
}

// Simulated data store
const customers: ICustomer[] = [ 
    { id: 1, name: "Foo" },
    { id: 2, name: "Bar" } 
];

// Check content type header for "application/json"
function checkContentType(req: express.Request, res: express.Response, next: express.NextFunction) {
    const ct = req.header("Content-Type");
    if (ct !== "application/json") {
        res.status(400).send({ error: "Invalid or missing Content-Type header." });
    } else {
        next();
    }
}

// Implement "get all" API
app.get("/customers", 
    checkContentType, 
    (req, res) => res.status(200).send(customers));

// Add new customer
function addCustomer(req: express.Request, res: express.Response) {
    if (typeof req.body !== "object" || !req.body.id || !req.body.name) {
        res.status(400).send({ error: "Invalid body" });
    } else {
        customers.push(req.body);
        res.status(201).send(req.body);
    }
}

// Implement "add customer" API
app.post("/customers",
    checkContentType,
    addCustomer);

// Start express server
var port: number = process.env.port || 1337;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
