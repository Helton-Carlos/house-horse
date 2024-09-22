import { Router } from 'express';
import SessionController from '../controllers/SessionController.js';

const router = new Router();

router.get('/', (req, res) => res.json({ message: 'test' }));

router.post('/sessions', SessionController.store);

export default router;
