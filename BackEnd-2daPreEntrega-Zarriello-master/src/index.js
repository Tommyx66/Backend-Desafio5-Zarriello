const express = require('express');
const session = require('express-session');
const app = express();
const productsRouter = require('./routes/products');
const cartsRouter = require('./routes/carts');
const authController = require('./controllers/authController');

const PORT = 8080;

app.use(express.json());
app.use(session({
  secret: 'your-secret-key', // Cambiar a una clave segura
  resave: false,
  saveUninitialized: true,
}));

app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi e-commerce backend!');
});

// Rutas de autenticación
app.post('/api/products/login', authController.login);
app.get('/api/products/logout', authController.logout);

// Rutas de productos y carritos
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
