import { fetchTicket } from "../../lib/data"
import { deleteTicket } from "../../lib/actions";
import { SubmitButton } from "../../components/Submit-button";
import Link from "next/link";


export default async function TicketDetails({ params }) {
  const ticket = await fetchTicket(params.id)

  // si le tickets est supprimer. A voir pour améliorer
  if (!ticket) {
    return (
      <main>
        <nav>
          <h2>Détail de la note de frais</h2>
        </nav>
        <div className="card">
          <span>La note de frais est supprimée.</span>
          <p>retour à <Link href="/tickets">la liste des frais</Link>.</p>
        </div>
      </main>
    )
  }

  const date = (ticket.createdAt).toLocaleString();
  return (
    <main>
      <nav>
        <h2>Détail de la note de frais</h2>
      </nav>


      {/* <div className="card">
        <h3>{ticket.titre}</h3>
        <small>Créée par {ticket.user}</small>
        <p>Catégorie: {ticket.categorie}</p>
        <p>{ticket.desc}</p>
        <p>Affaire: {ticket.affaire}</p>
        <p>Montant: {ticket.prix}</p>
        <p>Justificatif: {ticket.img}</p>
        <p>Date de création: {date}</p>
        <div className={`pill ${ticket.status}`}>
          {ticket.status}
        </div>
        <form action={deleteTicket} className="pl-1">
          <input type="hidden" name="id" value={ticket.id} />
          <SubmitButton name={"delete"} />
        </form>
      </div> */}

      <div>
        <div className="px-4 sm:px-0">
          <h3 className="pt-8 text-base font-semibold leading-7 text-gray-900">{ticket.titre}</h3>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Status</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"><p className={`pill ${ticket.status}`}>{ticket.status}</p></dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Date de création</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{date}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Auteur</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{ticket.user}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Catégorie</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{ticket.categorie}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Numéro d'affaire</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{ticket.affaire}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Montant</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">CHF {ticket.prix}</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Description</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {ticket.desc}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Justificatif</dt>
              <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                  <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                    <div className="flex w-0 flex-1 items-center">
                      <div className="ml-4 flex min-w-0 flex-1 gap-2">
                        <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                        <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Download
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                    <div className="flex w-0 flex-1 items-center">
                      <div className="ml-4 flex min-w-0 flex-1 gap-2">
                        <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                        <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Download
                      </a>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
            <div className="flex justify-center items-center">
              <form action={deleteTicket} className="pl-1">
                <input type="hidden" name="id" value={ticket.id} />
                <SubmitButton name={"delete"} />
              </form>
            </div>
          </dl>
        </div>
      </div>

    </main>
  )
}
