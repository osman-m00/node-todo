import Todos from '../models/toDoModel.js';

const setupRoutes = (app) => {
    app.get('/api/setupTodos', async (req, res) => {
        const starterTodos = [
            {
                "username": "user",
                "toDo": "Buy Milk",  // Match the field name in the schema
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "user",
                "toDo": "Walk the dog",  // Match the field name in the schema
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "user",
                "toDo": "Finish homework",  // Match the field name in the schema
                "isDone": false,
                "hasAttachment": false
            }
        ];
        


        try {
            // Create the todos in the database and return the created documents
            const createdTodos = await Todos.create(starterTodos);

            // Send the created todos as the response
            res.json(createdTodos);  // Respond with the created todos in JSON format
        } catch (err) {
            console.log('Error during setup:', err);
            res.status(500).send('Error setting up todos');
        }
    });
};

export default setupRoutes;
