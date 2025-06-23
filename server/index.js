import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import contactRoutes from "./routes/contact.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Validar que la variable de entorno está cargada correctamente
console.log("Mongo URI:", process.env.MONGO_URI);

if (!process.env.MONGO_URI) {
  console.error("Error: MONGO_URI no está definido en .env");
  process.exit(1); // Sale del proceso si no está la variable
}

// Rutas
app.use("/api/contact", contactRoutes);

// Conexión Mongo + inicio servidor
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Conexión a MongoDB exitosa");
    app.listen(PORT, () => console.log("Servidor en puerto " + PORT));
  })
  .catch((err) => {
    console.error("Error Mongo:", err);
    process.exit(1); // Salir si la conexión falla
  });
