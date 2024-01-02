"use server";

import { revalidatePath } from "next/cache";
import { Ticket, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";

export const addTicket = async (formData) => {
    console.log("dans addTicket")
    const { titre, categorie, desc, affaire, prix, status, img, user } =
      Object.fromEntries(formData);
  
    try {
      connectToDB();
  
      const newTicket = new Ticket({
        titre, categorie, desc, affaire, prix, status: "attente", img: "en développement", user: "MAA"
      });

      console.log(newTicket)
  
      await newTicket.save();
    } catch (err) {
      console.log(err);
      throw new Error("Failed to create ticket!");
    }
  
    revalidatePath("/tickets");
    redirect("/tickets");
  };

  export const addUser = async (formData) => {
    console.log("dans addUser")
  }