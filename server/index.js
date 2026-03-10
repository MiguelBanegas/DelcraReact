import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const resend = new Resend(process.env.RESEND_API_KEY);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

// Servir archivos estáticos de la carpeta 'dist'
// Sirve los assets con cache-control inmutable, ya que tienen hash en el nombre
app.use(express.static(path.join(__dirname, "..", "dist"), {
  immutable: true,
  maxAge: "1y"
}));

// No cache para index.html para que siempre se pida la última versión
app.use((req, res, next) => {
  if (req.path === '/index.html' || req.path === '/') {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
  }
  next();
});


app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  console.log(`Recibida consulta de: ${name} (${email})`);

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Web Delcra <contacto@delcra.com.ar>",
      to: [process.env.RECEIVER_EMAIL || "se.delcra@gmail.com"],
      replyTo: email,
      subject: subject || "Nueva consulta desde la web",
      html: `
        <h2>Nueva consulta de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Error de Resend:", error);
      return res.status(400).json({ error });
    }

    res.status(200).json({ message: "Email enviado con éxito", data });
  } catch (err) {
    console.error("Error del servidor:", err);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

// Catch-all para servir index.html para rutas de SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});


app.listen(port, () => {
  console.log(`Servidor de Delcra corriendo en http://localhost:${port}`);
});
