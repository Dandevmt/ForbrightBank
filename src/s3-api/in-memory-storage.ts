import { Customer } from "../storage/customer";

const store: Customer[] = [];

export class InMemoryStorage {
    async saveCustomer(customer: Customer): Promise<string> {
        store.push(customer);    
        
        await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate async operation
        
        return customer.Id;
    }
    async getAllCustomers(): Promise<Customer[]> {
        return store;
    }
}