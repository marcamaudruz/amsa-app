import { fetchTicket } from "../../lib/data"

export default async function TicketDetails({ params }) {
  const ticket = await fetchTicket(params.id)
  const date = new Date(ticket.createdAt);
  console.log(date)
  return (
    <main>
      <nav>
        <h2>Détail de la note de frais</h2>
      </nav>
      <div className="card">
        <h3>{ticket.titre}</h3>
        <small>Créée par {ticket.user}</small>
        <p>Catégorie: {ticket.categorie}</p>
        <p>{ticket.desc}</p>
        <p>Affaire: {ticket.affaire}</p>
        <p>Montant: {ticket.prix}</p>
        <p>Justificatif: {ticket.img}</p>
        <p>{date}</p>
        <div className={`pill ${ticket.status}`}>
          {ticket.status}
        </div>
      </div>
    </main>
  )
}
