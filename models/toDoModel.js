import mongoose  from "mongoose";

const Schema = mongoose.Schema;

const toDoSchema = new Schema({
    username: String,
    toDo: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

const Todos = mongoose.model('Todos', toDoSchema);

export default Todos;