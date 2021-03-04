import { Router } from 'express'
const router = Router();

router.get('/', (req, res) => {

    res.json({ message: 'Hellow World in JSON' })
});


router.post('/', (req, res) => {

    res.json({ message: 'Saving a new Contact' })
});

export default router;