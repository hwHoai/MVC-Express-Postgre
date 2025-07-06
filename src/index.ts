import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import router from './routes/api/v1/router';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';

// Create an Express application
const app = express();

// Load environment variables from .env file
dotenv.config({ path: '.env' });

// Middleware
app.use(
    cors({
        origin: process.env.CORS_ORIGIN_ACCEPTED || '*', // Allow all origins by default
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev'));
app.use(helmet());
app.use(compression());

// Routes
app.use('/api/v1', router);

// Start the server
const port = process.env.SERVER_PORT || 3000; // Default to port 3001 if not specified
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
