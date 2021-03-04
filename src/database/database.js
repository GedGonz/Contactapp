import mongoose from 'mongoose';
import config from '../config/configapp'

(async() => {

    try {
        const db = await mongoose.connect(config.mongodbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });

        console.log('Contection to database : ', db.connection.name);

    } catch (error) {
        console.log(error);
    }

})();