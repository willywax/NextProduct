import express from 'express';
import '@babel/polyfill';

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Welcome to NextProduct',
  });
});

app.use((req, res) => {
  res.status(404).json({
    status: 404,
    message: 'Page not found',
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Running on ${PORT}`));

export default app;
