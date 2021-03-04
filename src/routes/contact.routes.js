import { Router } from 'express'
import Contacts from '../models/contacts'
const router = Router();

router.get('/', (req, res) => {

    res.json({ message: 'Hellow World in JSON' })
});


router.post('/', async(req, res) => {

    const newContact = new Contacts({ name: req.body.name, lastname: req.body.lastname, phonenumber: req.body.phonenumber, picture: req.body.picture })
    const contact = await newContact.save();
    res.json(contact)
});

export default router;