import Contacts from '../models/contacts';
import cloudinary from 'cloudinary';
import config from '../config/configapp'


//configuration cloudinary
cloudinary.config({
    cloud_name: config.cloudinaryNAME,
    api_key: config.cloudinaryAPI_KEY,
    api_secret: config.cloudinaryAPI_SECRET
});

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

        if (!req.file)
            return res
                .status(400)
                .json({ message: 'field pircture required as file' });

        //save in cloudinary
        const result = await cloudinary.v2.uploader.upload(req.file.path);

        const newContact = new Contacts({ name: req.body.name, lastname: req.body.lastname, phonenumber: req.body.phonenumber, picture: result.secure_url })

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