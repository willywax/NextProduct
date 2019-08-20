import express from 'express';
import '@babel/polyfill';
import userRoutes from './routes/userRoute';

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Welcome to NextProduct',
  });
});
app.use('/api/v1/auth', userRoutes);
app.use((req, res) => {
  res.status(404).json({
    status: 404,
    message: 'Page not found',
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Running on ${PORT}`));

export default app;
