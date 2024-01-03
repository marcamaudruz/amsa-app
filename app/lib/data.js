import { Ticket, User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async () => {
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