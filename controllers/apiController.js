import bodyParser from "body-parser";
import Todos from "../models/toDoModel.js";

const apiController = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Get todos by username
    app.get('/api/todo/:uname', async (req, res) => {
        try {
            const todos = await Todos.find({ username: req.params.uname });
            res.send(todos);
        } catch (err) {
            res.status(500).send(err.message);
        }
    });

    // Get todo by id
    app.get('/api/todo/id/:id', async (req, res) => {
        try {
            const todo = await Todos.findById(req.params.id);
            res.send(todo);
        } catch (err) {
            res.status(500).send(err.message);
        }
    });

    // Add or update todo
    app.post('/api/todo', async (req, res) => {
        console.log('POST request body:', req.body); 

        try {
            const { id, toDo, isDone, hasAttachment } = req.body;

            const parsedIsDone = isDone === 'true' || isDone === true;
            const parsedHasAttachment = hasAttachment === 'true' || hasAttachment === true;

            if (id) {
                await Todos.findByIdAndUpdate(id, {
                    toDo,
                    isDone: parsedIsDone,
                    hasAttachment: parsedHasAttachment
                });
                res.send('success');
            } else {
                const newTodo = new Todos({
                    username: 'test', // or get from req.body
                    toDo,
                    isDone: parsedIsDone,
                    hasAttachment: parsedHasAttachment
                });

                await newTodo.save();
                res.send('Success');
            }
        } catch (err) {
            console.error('Error saving todo:', err.message);
            if (err.name === 'ValidationError') {
                res.status(400).send(err.message);
            } else {
                res.status(500).send('Internal server error');
            }
        }
    });

    // Delete todo
    app.delete('/api/todo', async (req, res) => {
        try {
            await Todos.findByIdAndDelete(req.body.id);
            res.send('deleted successfully');
        } catch (err) {
            res.status(500).send(err.message);
        }
    });
};

export default apiController;
