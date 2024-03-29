import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 2,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    dpt: {
      type: String,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

const ticketSchema = new mongoose.Schema(
  {
    titre: {
      type: String,
      required: true,
    },
    categorie: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    affaire: {
      type: Number,
      required: true,
    },
    prix: {
      type: Number,
      required: true,
      min: 0,
    },
    visaRepr: {
      type: Boolean,
      default: false,
    },
    visaDir: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    img_public_id: {
      type: String,
    },
    user: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Ticket =
  mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);
