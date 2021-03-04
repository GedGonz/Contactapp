import { Router } from 'express'
const router = Router();

router.get('/', (req, res) => {

    res.json({ message: 'Hellow World in JSON' })
});


export default router;