import express from "express";
import validator from "validator";
import Message from "../models/Message.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

// POST /contact
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  // Validaciones
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Email no válido" });
  }

  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).json({ success: true, message: "Mensaje recibido" });
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({ error: err.message });
    }
    res.status(500).json({ error: "Error del servidor" });
  }
});

// GET / (con paginación)
router.get("/", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  try {
    const messages = await Message.find()
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await Message.countDocuments();
    res.status(200).json({
      messages,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
  } catch (err) {
    res.status(500).json({ error: "Error al obtener mensajes" });
  }
});

// DELETE /:id (protegido)
router.delete("/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Message.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: "Mensaje no encontrado" });
    }
    res.status(200).json({ success: true, message: "Mensaje eliminado" });
  } catch (err) {
    res.status(500).json({ error: "Error al eliminar el mensaje" });
  }
});

export default router;