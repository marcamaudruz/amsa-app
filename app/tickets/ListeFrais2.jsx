import Link from "next/link";
import { fetchTickets } from "../lib/data";
import { deleteTicket } from "../lib/actions";
import { SubmitButton } from "../components/Submit-button";

export default async function ListeFrais2() {
  const { tickets } = await await fetchTickets();
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
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
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
                    {ticket.titre}
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50 ">
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
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    {ticket.status}
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <Link
                    href={`/tickets/${ticket.id}`}
                    className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900"
                  >
                    View
                  </Link>
                  <form action={deleteTicket}>
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
    </>
  );
}
