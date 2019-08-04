const express = require('express');
const app = express();
const db = require('./routes/api/v1/dbinsert');
require('dotenv').config();

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({ msg: 'API is running' }));
db.connectDB();
// Defining routes
app.use('/api/users/requests', require('./routes/api/v1/users'));
app.use('/api/auth', require('./routes/api/v1/auth'));
app.use('/api/requests', require('./routes/api/v1/requests'));

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
