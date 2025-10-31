import { Customer } from "../storage/customer";

const store: Customer[] = [];

export class InMemoryStorage {
    async saveCustomer(customer: Customer): Promise<string> {
        store.push(customer);        
        return customer.Id;
    }
    async getAllCustomers(): Promise<Customer[]> {
        return store;
    }
}