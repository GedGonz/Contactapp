import Contacts from '../models/contacts';

export const getAllContacts = async(req, res) => {

    try {
        const contacts = await Contacts.find();
        res.json(contacts)
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something error in api'
        });
    }
}

export const getContactById = async(req, res) => {
    try {
        const contact = await Contacts.findById(req.params.id);

        if (!contact)
            return res
                .status(404)
                .json({ message: 'Contact not exists' });

        res.json(contact)
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something error in api'
        });
    }

}

export const createContact = async(req, res) => {

    try {
        const newContact = new Contacts({ name: req.body.name, lastname: req.body.lastname, phonenumber: req.body.phonenumber, picture: req.body.picture })
        const contact = await newContact.save();
        res.json(contact);
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something error in api'
        });
    }
}

export const deleteContact = async(req, res) => {

    try {
        await Contacts.findByIdAndDelete(req.params.id);
        res.json({
            message: 'Contact were deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something error in api'
        });
    }

}

export const updateContact = async(req, res) => {

    try {
        await Contacts.findByIdAndUpdate(req.params.id, req.body);

        res.json({ message: "Contact updated successfully" });
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something error in api'
        });
    }

}