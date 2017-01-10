import { DefaultApi } from './api';

class MyApi extends DefaultApi {
    constructor(basePath: string) {
        super(basePath);
        this.defaultHeaders["Content-Type"] = "application/json";
    }
}

const api = new MyApi("http://localhost:1337");
api.getAllCustomers().then(result => console.log(result.body));
api.addCustomer({ id: 3, name: 'New Customer' }).then(result => console.log(result.response.statusCode));
api.getAllCustomers().then(result => console.log(result.body));
