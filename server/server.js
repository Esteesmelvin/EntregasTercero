const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const headers = {
  cors: {
    origin: 'http://127.0.0.1:5173',
    methods: ["GET", "POST"]
  }
}
// Middleware
app.use(bodyParser.json());
app.use(cors(headers));

// Rutas
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const likeRoutes = require('./routes/likeRoutes');

app.use('/api', authRoutes);
app.use('/api', postRoutes);
app.use('/api', commentRoutes);
app.use('/api', likeRoutes);

// Configuración del puerto
const port = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
