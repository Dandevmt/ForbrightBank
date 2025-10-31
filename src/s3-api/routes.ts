import { Router, Request, Response } from 'express';
import { InMemoryStorage } from './in-memory-storage';

const storage = new InMemoryStorage();
const router = Router();

router.post('/store', async (req: Request, res: Response) => {   
    const result = await storage.saveCustomer(req.body);
    res.status(200).send(result);
});

router.get('/', async (req: Request, res: Response) => {
    const customers = await storage.getAllCustomers();
    res.status(200).send(customers);
});

export default router;