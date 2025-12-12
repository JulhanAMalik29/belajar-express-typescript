import { type Request, type Response, Router } from 'express';

const barangRoute = Router();

barangRoute.get('/barang', (req: Request, res: Response) => {
  res.status(200).send('Barang route is working!');
});

export default barangRoute;
