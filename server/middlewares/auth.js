import jwt from 'jsonwebtoken';

// Middleware de autenticación para proteger rutas
const auth = (req, res, next) => {
  // Leer el header Authorization: "Bearer <token>"
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No autorizado. Token faltante.' });
  }

  const token = authHeader.split(' ')[1];
  try {
    // Verificar y decodificar token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Guardar info del usuario en req
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Token inválido o expirado' });
  }
};

export default auth;