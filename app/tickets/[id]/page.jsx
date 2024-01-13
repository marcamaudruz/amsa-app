import { fetchTicket } from "../../lib/data"
import { deleteTicket } from "../../lib/actions";
import { SubmitButton } from "../../components/Submit-button";

export default async function TicketDetails({ params }) {
  const ticket = await fetchTicket(params.id)
  if (!ticket) {return <p>no ticket</p>}
  // const date = (ticket.createdAt).toLocaleString();
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
        {/* <p>Date de création: {date}</p> */}
        <div className={`pill ${ticket.status}`}>
          {ticket.status}
        </div>
        <form action={deleteTicket} className="pl-1">
          <input type="hidden" name="id" value={ticket.id} />
          <SubmitButton name={"delete"} />
        </form>
      </div>
    </main>
  )
}
