import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";
import participantsPage from "./public/pages/participants.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

// Connect to MongoDB
(async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Connected to MongoDB successfully");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
})();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// ------------------ Mongoose Schema + Model ------------------
const participantSchema = new mongoose.Schema({
  full_name: { type: String, required: true },
  id: { type: String, required: true, unique: true },
  dep: { type: String, required: true },
  yos: { type: String, required: true },
  lang: { type: String, required: true },
}, { timestamps: true });

const Participant = mongoose.model("Participant", participantSchema);

// ------------------ Routes ------------------
app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "public/pages/index.html"));
});

app.get("/register", (_req, res) => {
  res.sendFile(path.join(__dirname, "public/pages/register.html"));
});

app.post("/api/register", async (req, res) => {
  try {
    const { full_name, id, dep, yos, lang } = req.body;

    const existingParticipant = await Participant.findOne({ $or: [{ id }] });
    if (existingParticipant)
      return res.status(400).json({ message: "You have already registered." });

    await Participant.create({ full_name, id, dep, yos, lang });

    res.status(201).json({
      success: true,
      message: `🎉 Registration Successful! See you at the competition. ${full_name}`
    });

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get("/api/participants", async (_req, res) => {
  try {
    const participants = await Participant.find().sort({ createdAt: -1 });
    res.status(200).send(participantsPage(participants));
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ------------------ Server ------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
