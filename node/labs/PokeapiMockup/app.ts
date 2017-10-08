import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";

const port: number = parseInt(process.env.port) || 1337;

const app = express();
app.use(cors());
app.use(bodyParser.json());

interface IPokemon {
    url: string;
    name: string;
}

interface IPokemonListResult {
    count: number;
    previous: string;
    results: IPokemon[];
    next: string;
}

const pokemons: IPokemon[] = [
    {
        "url": "http://pokeapi.co/api/v2/pokemon/1/",
        "name": "bulbasaur"
    },
    {
        "url": "http://pokeapi.co/api/v2/pokemon/2/",
        "name": "ivysaur"
    },
    {
        "url": "http://pokeapi.co/api/v2/pokemon/3/",
        "name": "venusaur"
    },
    {
        "url": "http://pokeapi.co/api/v2/pokemon/4/",
        "name": "charmander"
    },
    {
        "url": "http://pokeapi.co/api/v2/pokemon/5/",
        "name": "charmeleon"
    },
    {
        "url": "http://pokeapi.co/api/v2/pokemon/6/",
        "name": "charizard"
    },
    {
        "url": "http://pokeapi.co/api/v2/pokemon/7/",
        "name": "squirtle"
    },
    {
        "url": "http://pokeapi.co/api/v2/pokemon/8/",
        "name": "wartortle"
    },
    {
        "url": "http://pokeapi.co/api/v2/pokemon/9/",
        "name": "blastoise"
    },
    {
        "url": "http://pokeapi.co/api/v2/pokemon/10/",
        "name": "caterpie"
    },
    {
        "url": "http://pokeapi.co/api/v2/pokemon/11/",
        "name": "metapod"
    },
    {
        "url": "http://pokeapi.co/api/v2/pokemon/12/",
        "name": "butterfree"
    },
    {
        "url": "http://pokeapi.co/api/v2/pokemon/13/",
        "name": "weedle"
    }
];

app.get("/pokemons", (req, res) => {
    // Simulate some processing time in order to make the loading
    // indicator visible in the UI.
    setTimeout(() => {
        if (!req.query.limit) {
            res.status(400).send("Parameter 'limit' missing in URL");
            return;
        }

        const limit = parseInt(req.query.limit);
        if (isNaN(limit)) {
            res.status(400).send("Parameter 'limit' is not a valid number");
            return;
        }

        let offset: number = 0;
        if (req.query.offset) {
            offset = parseInt(req.query.offset);
            if (isNaN(offset)) {
                res.status(400).send("Parameter 'offset' is not a valid number");
                return;
            }
        }

        let url = `http://${req.header("host")}/pokemons?limit=${limit}`;

        const result: IPokemonListResult = {
            count: pokemons.length,
            previous: (offset && offset >= limit)
                ? url + ((offset - limit) > 0 ? "&offset=" + (offset - limit).toString() : "")
                : null,
            results: pokemons.slice(offset, offset + limit),
            next: (offset + limit < pokemons.length)
                ? url + "&offset=" + (offset + limit).toString()
                : null
        };

        res.status(200).send(result);
    }, 250);
});

app.get("/pokesearch", (req, res) => {
    // Simulate some processing time 
    setTimeout(() => {
        if (req.query.name) {
            const result = pokemons.filter(p => p.name.startsWith(req.query.name));
            res.status(200).send(result);
        } else {
            // Stream results
            res.header("Content-Type", "application/json")
            res.write("[");
            res.write(JSON.stringify({ name: 'dummy', url: 'dummy'}));
            res.write(",");

            // Simulate some processing time for other result rows
            setTimeout(() => {
                const result = JSON.stringify(pokemons);
                res.write(result.substring(1, result.length - 1));
                res.write("]");
                res.status(200);
                res.end();
            }, 500);

        }
    }, 500);
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
