import { Router } from 'express';
import * as ContactController from '../controller/contact.controller'

const router = Router();

router.get('/', ContactController.getAllContacts);

router.get('/:id', ContactController.getContactById);

router.delete('/:id', ContactController.deleteContact);

router.post('/', ContactController.createContact);

router.post('/', );

export default router;