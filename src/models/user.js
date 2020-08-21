import Mongoose from 'mongoose';

const Schema = Mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: String,
    active: {
        type: Boolean,
        required: true,
    }
});

export default Mongoose.model('User', Schema);