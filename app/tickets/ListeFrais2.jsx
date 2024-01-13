import Link from "next/link";
import { fetchTickets } from "../lib/data";
import { deleteTicket } from "../lib/actions";
import { SubmitButton } from "../components/Submit-button";

export default async function ListeFrais2() {
  const { tickets } = await await fetchTickets();
  return (
    <>
      {/* Version laptop */}
      <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
        <table className="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              <th className="hidden md:block p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Utilisateur
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Titre
                </p>
              </th>
              <th className="hidden md:block p-4 border-b border-blue-gray-100 bg-blue-gray-50">
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
              <th className="hidden md:block p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
              </th>
            </tr>
          </thead>

          <tbody>
            {tickets?.map((ticket) => (
              <tr key={ticket.id}>
                <td className="hidden md:block p-4 border-b border-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    {ticket.user}
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50 ">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    <Link href={`/tickets/${ticket.id}`} className="hover:text-red-800">
                      {ticket.titre.length > 15 ? `${ticket.titre.substring(0, 15)}...` : ticket.titre}
                    </Link>
                  </p>
                </td>
                <td className="hidden md:block p-4 border-b border-blue-gray-50 ">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    {ticket.categorie}
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50 ">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    {ticket.prix}
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50 ">
                  <div className={`pill ${ticket.status}`}>
                    {ticket.status}
                  </div>
                </td>
                <td className="hidden md:block p-4 border-b border-blue-gray-50">

                  <form action={deleteTicket} className="pl-1">

                    <input type="hidden" name="id" value={ticket.id} />
                    {/* <SubmitButton name={"delete"} /> */}
                    <svg dataSlot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                    </svg>

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
    </>
  );
}
