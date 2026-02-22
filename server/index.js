import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  console.log(`Recibida consulta de: ${name} (${email})`);

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Web Delcra <contacto@delcra.com.ar>",
      to: [process.env.RECEIVER_EMAIL || "miguelangelbanegas@gmail.com"],
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

app.listen(port, () => {
  console.log(`Servidor de Delcra corriendo en http://localhost:${port}`);
});
