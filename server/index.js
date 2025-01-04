const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const clientRoutes = require('./routes/clientRoutes');
const packageRoutes = require('./routes/packageRoutes');
const trainerRoutes = require('./routes/trainerRoutes');

app.use('/auth', authRoutes);
app.use('/clients', clientRoutes);
app.use('/packages', packageRoutes);
app.use('/trainers', trainerRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
