import { Router } from 'express';
import barangRoute from './barang.route';

const app = Router();

// Mengarah ke /api/barang
app.use('/api', barangRoute);

export default app;
