const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const materialRoutes = require('./routes/materialRoutes');
const productionOrderRoutes = require('./routes/productionOrderRoutes');
const shiftReportRoutes = require('./routes/shiftReportRoutes');

const dotenv = require('dotenv');
const cors = require('cors');



dotenv.config();

// Kết nối MongoDB
connectDB();

const app = express();

// Middleware để xử lý JSON
app.use(express.json());


app.use(cors()); 
// Sử dụng routes
app.use('/api/shift-reports', shiftReportRoutes);
app.use('/api/production-orders', productionOrderRoutes);
app.use('/api/materials', materialRoutes);
app.use('/api', userRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
