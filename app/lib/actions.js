"use server";

import { revalidatePath } from "next/cache";
import { Ticket, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import { put } from "@vercel/blob";

export const addTicket = async (formData) => {
  const { titre, categorie, desc, affaire, prix, status, image, user } =
    Object.fromEntries(formData);

  // Upload image to Vercel
  const imageFile = image;
  const blob = await put(imageFile.name, imageFile, {
    access: "public",
  });
  console.log("Response: " + blob.pathname);
  console.log("Response: " + blob.url);
  const img = blob.url;

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
