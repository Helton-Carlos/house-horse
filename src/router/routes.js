import { Router } from 'express';
import SessionController from '../controllers/SessionController.js';
import HouseController from '../controllers/HouseController.js';

const router = new Router();

router.get('/', (req, res) => res.json({ message: 'test' }));

router.post('/sessions', SessionController.store);
router.post('/houses', HouseController.store);

export default router;
