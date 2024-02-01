"use server";

import { revalidatePath } from "next/cache";
import { Ticket, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import { v2 as cloudinary } from "cloudinary";
import { put } from "@vercel/blob";

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
        console.log(result);
        resolve(result);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
  let img = result.secure_url;
  console.log(img);

  // Connect to DB
  try {
    connectToDB();
    const newTicket = new Ticket({
      titre,
      categorie,
      desc,
      affaire,
      prix,
      status: "attente",
      img,
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
  console.log("dans addUser");
};

export const deleteTicket = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDB();
    await Ticket.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete ticket!");
  }
  revalidatePath("/tickets");
};
