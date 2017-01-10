import { config, Connection, Request } from 'mssql';

const connectionConfig: config = {
    server: "myserver.database.windows.net",
    user: "myuser",
    password: "mypassword",
    database: "northwind",
    options: {
        encrypt: true
    }
};

interface ICustomer {
    CustomerID: string;
    CompanyName: string;
}

async function run() {
    const conn = new Connection(connectionConfig);
    await conn.connect();
    try {
        const req = new Request(conn);
        req.input("id", "ALFKI");
        const result = await req.query<ICustomer>("SELECT * FROM Customers WHERE CustomerID = @id");
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

