import mongoose from "mongoose";

const Schema = mongoose.Schema;

const toDoSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    toDo: {
        type: String,
        required: [true, 'Todo content is required']
    },
    isDone: {
        type: Boolean,
        default: false
    },
    hasAttachment: {
        type: Boolean,
        default: false
    }
});

const Todos = mongoose.model('Todos', toDoSchema);

export default Todos;
