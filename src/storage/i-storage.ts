import { Customer } from "./customer";

export interface IStorage {
    saveCustomer(customer: Customer): Promise<string>;
}