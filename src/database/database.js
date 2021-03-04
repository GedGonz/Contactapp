import mongoose from 'mongoose'

(async() => {

    const db = await mongoose.connect('mongodb://localhost/Contactdb', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log('Contection to database : ', db.connection.name);

})();