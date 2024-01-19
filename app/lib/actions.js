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

  // Upload image to Vercel
  // const blob = await put(imageFile.name, imageFile, {
  //   access: "public",
  // });
  // console.log("Response: " + blob.pathname);
  // console.log("Response: " + blob.url);
  // const img = blob.url;

  // Upload image to Cloudinary
  const file = imageFile;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);
  const res = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          tags: ["nextjs-server-actions-upload-tickets"],
        },
        function (error, result) {
          if (error) {
            reject(error);
            return;
          }
          resolve(result);
        }
      )
      .end(buffer);
  });
  const img = (await res).url;

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
      user: "MAA",
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
