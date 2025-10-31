import { Customer } from "../storage/customer";

const store: Customer[] = [];

console.log('creating store');

export class InMemoryStorage {
    async saveCustomer(customer: Customer): Promise<string> {
        customer.Id = (store.length + 1).toString();
        store.push(customer);        
        return customer.Id;
    }
    async getAllCustomers(): Promise<Customer[]> {
        return store;
    }
}