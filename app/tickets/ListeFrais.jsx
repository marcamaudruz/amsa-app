import Link from "next/link"
import { fetchTickets } from '../lib/data'

export default async function ListeFrais  () {
  const tickets = await (await fetchTickets()).tickets
  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.titre}</h3>
            <small>Créée par {ticket.user}</small>
            <p>Catégorie: {ticket.categorie}</p>
            <p>Montant: {ticket.montant}</p>
            
            <div className={`pill ${ticket.status}`}>
              {ticket.status}
            </div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">Il n'y a pas de notes de frais.</p>
      )}
    </>
  )
}