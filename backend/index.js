const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(cors());

// app.use('/api', ProductRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {})
        .then(() => {
          console.log('MongoDB connected')

          const ProductRoutes = require('./routes/ProductRoutes');
          app.use('/api', ProductRoutes);
          

          app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
        })
        .catch(err => console.log(err));

app.use(express.json());
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
