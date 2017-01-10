import { config, Connection, Request } from 'mssql';
import * as fs from 'fs';

// Connection data for SQL Server. Note that no driver
// is specified --> tedious is used.
const connectionConfig: config = {
    server: "sql",
    user: "sa",
    password: "P@ssw0rd!",
    database: "master"
    // You need the following option to connect to database in Azure
    // ,options: {
    //     encrypt: true
    // }
};

// Interface represents type returned by database query
interface ICustomer {
    CustomerID: string;
    CompanyName: string;
}

// Helper method offering a readFile-version with Promise
function readFile(fileName: string): Promise<string> {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, "utf8", (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

async function run() {
    // Connect to database
    const conn = new Connection(connectionConfig);
    await conn.connect();
    try {
        console.log("Checking if Northwind exists...");
        let req = new Request(conn);
        const dbCheckResult = await req.query<any>("SELECT 1 FROM sys.databases WHERE name = 'Northwind'");
        if (dbCheckResult.length) {
            console.log("Northwind already exists.")
        } else {
            console.log("Creating Northwind DB...");
            await req.batch("IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'Northwind') CREATE DATABASE Northwind");
            console.log("Executing Northwind creation script...");
            const script = await readFile("northwind.sql");
            for (let cmd of script.split("GO\r\n")) {
                await req.batch(cmd);
            }

            console.log("Done with creation script...");
        }

        req = new Request(conn);
        req.input("id", "ALFKI");
        const result = await req.query<ICustomer>("SELECT * FROM Northwind.dbo.Customers WHERE CustomerID = @id");
        for (let c of result) {
            console.log(`ID: ${c.CustomerID}, Name: ${c.CompanyName}`);
        }
    } catch (err) {
        console.error(err);
    } finally {
        conn.close();
    }
}

run().then(() => console.log("Done!"));

