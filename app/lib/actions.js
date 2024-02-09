"use server";

import { revalidatePath } from "next/cache";
import { Ticket, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import { v2 as cloudinary } from "cloudinary";
import bcrypt from "bcrypt";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const addTicket = async (formData) => {
  const { titre, categorie, desc, affaire, prix, status, image, user } =
    Object.fromEntries(formData);
  const imageFile = image;
  console.log("user: ", user);
  // Upload image to Cloudinary with upload
  const fileBuffer = await imageFile.arrayBuffer();
  var mime = imageFile.type;
  var encoding = "base64";
  var base64Data = Buffer.from(fileBuffer).toString("base64");
  var fileUri = "data:" + mime + ";" + encoding + "," + base64Data;
  const result = await new Promise((resolve, reject) => {
    var result = cloudinary.uploader
      .upload(fileUri, {
        invalidate: true,
      })
      .then((result) => {
        // console.log(result);
        resolve(result);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
  let img = result.url;
  let img_public_id = result.public_id;

  // console.log("result", result);
  console.log("img", img);
  console.log("img_public_id", img_public_id);

  // Connect to DB
  try {
    connectToDB();
    const newTicket = new Ticket({
      titre,
      categorie,
      desc,
      affaire,
      prix,
      visaRepr: false,
      visaDir: false,
      status: "attente",
      img,
      img_public_id,
      user,
    });
    console.log(newTicket);
    await newTicket.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create ticket!");
  }
  revalidatePath("/tickets");
  redirect("/tickets");
};

export const addUser = async (formData) => {
  const { username, email, password_from_field, role, dpt, isAdmin } =
    Object.fromEntries(formData);

  // Connect to DB
  try {
    connectToDB();
    const password = await bcrypt.hash(password_from_field, 10);

    const newUser = new User({
      username,
      email,
      password,
      role,
      dpt,
      phone: 1,
      isAdmin,
      isActive: true,
      adresse: "asd",
    });
    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create User!");
  }
  redirect("/");
};

export const deleteTicket = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDB();

    // get ticket
    const ticket = await Ticket.findById(id);
    const img_public_id = ticket.img_public_id;
    console.log(img_public_id);
    cloudinary.uploader
      .destroy(img_public_id)
      .then((result) => console.log(result));

    await Ticket.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete ticket!");
  }
  revalidatePath("/tickets");
};

export const validateTicket = async (formData) => {
  const { id, visa, value } = Object.fromEntries(formData);
  try {
    connectToDB();
    const ticket = await Ticket.findById(id);

    if (visa === "visaRepr") {
      await Ticket.findByIdAndUpdate(id, { visaRepr: value });
    } else if (visa === "visaDir") {
      await Ticket.findByIdAndUpdate(id, { visaDir: value });
    }
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update ticket!");
  }
  revalidatePath("/tickets");
  redirect("/tickets");
};
