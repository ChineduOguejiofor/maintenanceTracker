const express = require('express');
const app = express();
const db = require('./routes/api/v1/dbinsert');

app.use(express.json({ extended: false })); // body parser

app.get('/', (req, res) => res.send('API is running'));
db.connectDB();
// Defining routes
app.use('/api/users', require('./routes/api/v1/users'));
app.use('/api/auth', require('./routes/api/v1/auth'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));