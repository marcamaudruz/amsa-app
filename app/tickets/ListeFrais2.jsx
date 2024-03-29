import Link from "next/link";
import { fetchTicketsByUser } from "../lib/data";
import { deleteTicket } from "../lib/actions";
import { SubmitButton } from "../components/Submit-button";

export default async function ListeFrais2({ query, currentPage, user }) {
  //si utilisateur admin, alors il voit tout, sinon il ne voit que ses tickets.
  const { tickets } = await fetchTicketsByUser(query, currentPage, user);
  // const { tickets } = await fetchTickets();

  return (
    <>
      {/* Version laptop */}
      <div className="hidden md:block relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
        <table className="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Utilisateur
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Titre
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Catégorie
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Montant
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Status
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Action
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {tickets?.map((ticket) => (
              <tr key={ticket.id}>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    {ticket.user}
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50 ">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    <Link
                      href={`/tickets/${ticket.id}`}
                      className="hover:text-red-800"
                    >
                      {ticket.titre.length > 15
                        ? `${ticket.titre.substring(0, 15)}...`
                        : ticket.titre}
                    </Link>
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50 ">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    {ticket.categorie}
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50 ">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    CHF {ticket.prix}
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50 ">
                  <div className="flex">
                    <div>
                      {(!ticket.visaRepr && (
                        <div className="w-5 h-5 bg-red-600 rounded-full"></div>
                      )) || (
                        <div className="w-5 h-5 bg-green-600 rounded-full"></div>
                      )}
                    </div>
                    <div>
                      {(!ticket.visaDir && (
                        <div className="ml-2 w-5 h-5 bg-red-600 rounded-full"></div>
                      )) || (
                        <div className="ml-2 w-5 h-5 bg-green-600 rounded-full"></div>
                      )}
                    </div>
                    <div className={`ml-4 pill ${ticket.status}`}>
                      {ticket.status}
                    </div>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <form action={deleteTicket} className="pl-1">
                    <input type="hidden" name="id" value={ticket.id} />
                    <SubmitButton name={"delete"} />
                  </form>
                </td>
              </tr>
            ))}
            {tickets.length === 0 && (
              <p className="text-center">Il n'y a pas de notes de frais.</p>
            )}
          </tbody>
        </table>
      </div>

      {/* Version mobile */}
      <div className="block md:hidden relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
        <table className="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Titre
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Prix
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Status
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {tickets?.map((ticket) => (
              <tr key={ticket.id}>
                <td className="p-4 border-b border-blue-gray-50 ">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    <Link
                      href={`/tickets/${ticket.id}`}
                      className="hover:text-red-800"
                    >
                      {ticket.titre.length > 15
                        ? `${ticket.titre.substring(0, 15)}...`
                        : ticket.titre}
                    </Link>
                  </p>
                </td>
                
                <td className="p-4 border-b border-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    CHF {ticket.prix}
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50 ">
                  <div className="flex">
                    <div>
                      {(!ticket.visaRepr && (
                        <div className="w-5 h-5 bg-red-600 rounded-full"></div>
                      )) || (
                        <div className="w-5 h-5 bg-green-600 rounded-full"></div>
                      )}
                    </div>
                    <div>
                      {(!ticket.visaDir && (
                        <div className="ml-2 w-5 h-5 bg-red-600 rounded-full"></div>
                      )) || (
                        <div className="ml-2 w-5 h-5 bg-green-600 rounded-full"></div>
                      )}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
            {tickets.length === 0 && (
              <p className="text-center">Il n'y a pas de notes de frais.</p>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
