import Contacts from '../models/contacts';

export const getAllContacts = async(req, res) => {

    const contacts = await Contacts.find();
    res.json(contacts)
}

export const getContactById = async(req, res) => {

    const contact = await Contacts.findById(req.params.id);
    res.json(contact)
}

export const createContact = async(req, res) => {

    const newContact = new Contacts({ name: req.body.name, lastname: req.body.lastname, phonenumber: req.body.phonenumber, picture: req.body.picture })
    const contact = await newContact.save();
    res.json(contact)
}

export const deleteContact = async(req, res) => {

    await Contacts.findByIdAndDelete(req.params.id);
    res.json({
        message: 'Contact were deleted successfully'
    })
}

export const updateContact = async(req, res) => {

    await Contacts.findByIdAndUpdate(req.params.id, req.body);

    res.json({ message: "Contact updated successfully" });
}