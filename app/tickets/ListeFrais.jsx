import Link from "next/link"
import { fetchTickets } from '../lib/data'
import { deleteTicket } from "../lib/actions"
import { SubmitButton } from "../components/Submit-button"

export default async function ListeFrais  () {
  const {tickets} = await await fetchTickets()
  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.titre}</h3>
            <small>Créée par {ticket.user}</small>
            <p>Catégorie: {ticket.categorie}</p>
            <p>Montant: {ticket.prix}</p>
            
            <div className={`pill ${ticket.status}`}>
              {ticket.status}
            </div>
          </Link>
          <form action={deleteTicket}>
            <input type="hidden" name="id" value={ticket.id} />
            <SubmitButton name={"delete"} />
          </form>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">Il n'y a pas de notes de frais.</p>
      )}
    </>
  )
}