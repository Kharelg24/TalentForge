const express = require('express');
const cors = require('cors');
const feedbacks = require('./database/feedback.json');

// Defining an express application
const app = express();
app.use(express.json());
// allows for different port communications
app.use(cors());

// Defining the port number
const PORT = 4000;

app.get('/feedbacks', (req, res) => {
    res.json(feedbacks)
});

app.post('/feedback', (req, res) => {
    const feedback = req.body;

    const newFeedback = {
        id: feedbacks.length + 1,
        feedback: feedback.feedback
    };

    for (let i = 0; i <=3; i++){

    }
    feedbacks.push(newFeedback);

    // response.ok will only be true if the status code is between 200 and 299
    res.status(201).json({ message: 'Feedback added', feedback: newFeedback });
})


// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});