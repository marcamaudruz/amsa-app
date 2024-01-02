import { notFound } from "next/navigation"

export const dynamicParams = true // default val = true

export async function generateStaticParams() {
  const res = await fetch('http://localhost:4000/frais')

  const tickets = await res.json()
 
  return tickets.map((ticket) => ({
    id: ticket.id
  }))
}

async function getTicket(id) {
  const res = await fetch(`http://localhost:4000/frais/${id}`, {
    next: {
      revalidate: 60
    }
  })
  if (!res.ok) {
    notFound()
  }
  return res.json()
}

export default async function TicketDetails({ params }) {
  // const id = params.id
  const ticket = await getTicket(params.id)

  return (
    <main>
      <nav>
        <h2>Détail de la note de frais</h2>
      </nav>
      <div className="card">
        <h3>{ticket.titre}</h3>
        <small>Créée par {ticket.user}</small>
        <p>Catégorie: {ticket.categorie}</p>
        <p>{ticket.description}</p>
        <p>Affaire: {ticket.affaire}</p>
        <p>Montant: {ticket.montant}</p>
        <p>Justificatif: {ticket.justificatif}</p>

        {/* <form action={deleteData(ticket)}>
          <button className="">
            <span>Delete</span>
          </button>
        </form> */}

        <div className={`pill ${ticket.status}`}>
          {ticket.status}
        </div>
      </div>
    </main>
  )
}
