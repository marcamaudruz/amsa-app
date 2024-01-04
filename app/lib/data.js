import { Ticket, User } from "./models";
import { connectToDB } from "./utils";
import { unstable_noStore as noStore } from 'next/cache';

export const fetchUsers = async () => {
  noStore();
  try {
    connectToDB();
    const users = await User.find()
    return { users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchTickets = async () => {
  noStore();

  try {
    connectToDB();
    const tickets = await Ticket.find()
    return { tickets };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch tickets!");
  }
};

export const fetchTicket = async (id) => {
  noStore();

  try {
    connectToDB();
    const ticket = await Ticket.findById(id);
    return ticket;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch ticket!");
  }
};

export const fetchCards = async () => {
  noStore();

  try {
    connectToDB();
    
    const tickets = await Ticket.find()
    let totalPrix = 0
    tickets.map((ticket) => { totalPrix += ticket.prix })

    const nombreUsers = await User.countDocuments();
    
    return {nombreUsers, totalPrix};
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch tickets!");
  }
};

export const seed = async () => {
  
  const {
    users,
    tickets,
  } = require('./placeholder-data.js');

  try {
    connectToDB();

    console.log(tickets)

    await Ticket.insertMany(tickets)
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create ticket!");
  }
}