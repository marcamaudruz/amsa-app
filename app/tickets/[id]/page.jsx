import { fetchTicket } from "../../lib/data";
import { validateTicket, deleteTicket } from "../../lib/actions";
import { SubmitButton } from "../../components/Submit-button";
import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { options } from "../../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export default async function TicketDetails({ params }) {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/tickets");
  }

  const ticket = await fetchTicket(params.id);

  // si le tickets est supprimer. A voir pour améliorer
  if (!ticket) {
    return (
      <main>
        <nav>
          <h2>Détail de la note de frais</h2>
        </nav>
        <div className="card">
          <span>La note de frais est supprimée.</span>
          <p>
            retour à <Link href="/tickets">la liste des frais</Link>.
          </p>
        </div>
      </main>
    );
  }

  const date = ticket.createdAt.toLocaleString();
  return (
    <main>
      <nav>
        <h2>Détail de la note de frais</h2>
      </nav>
      <div>
        <div className="px-4 sm:px-0">
          <h3 className="pt-8 text-base font-semibold leading-7 text-gray-900">
            {ticket.titre}
          </h3>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Status
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <p className={`pill ${ticket.status}`}>{ticket.status}</p>
              </dd>
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Visa REPR
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {(!ticket.visaRepr && (
                  <div className="flex">
                    <div className="w-5 h-5 bg-red-600 rounded-full"></div>
                    {(session.user.role === "repr" ||
                      session.user.role === "admin") && (
                      <form action={validateTicket} className="pl-10">
                        <input type="hidden" name="visa" value="visaRepr" />
                        <input type="hidden" name="id" value={ticket.id} />
                        <input type="hidden" name="value" value={true} />
                        <SubmitButton name={"valider"} />
                      </form>
                    )}
                  </div>
                )) || (
                  <div className="flex">
                    <div className="w-5 h-5 bg-green-600 rounded-full"></div>
                    {(session.user.role === "repr" ||
                      session.user.role === "admin") && (
                      <form action={validateTicket} className="pl-10">
                        <input type="hidden" name="visa" value="visaRepr" />
                        <input type="hidden" name="id" value={ticket.id} />
                        <input type="hidden" name="value" value={false} />
                        <SubmitButton name={"annuler"} />
                      </form>
                    )}
                  </div>
                )}
              </dd>
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Visa direction
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {(!ticket.visaDir && (
                  <div className="flex">
                    <div className="w-5 h-5 bg-red-600 rounded-full"></div>
                    {session.user.role === "admin" && (
                      <form action={validateTicket} className="pl-10">
                        <input type="hidden" name="visa" value="visaDir" />
                        <input type="hidden" name="id" value={ticket.id} />
                        <input type="hidden" name="value" value={true} />
                        <SubmitButton name={"valider"} />
                      </form>
                    )}
                  </div>
                )) || (
                  <div className="flex">
                    <div className="w-5 h-5 bg-green-600 rounded-full"></div>
                    {session.user.role === "admin" && (
                      <form action={validateTicket} className="pl-10">
                        <input type="hidden" name="visa" value="visaDir" />
                        <input type="hidden" name="id" value={ticket.id} />
                        <input type="hidden" name="value" value={false} />
                        <SubmitButton name={"annuler"} />
                      </form>
                    )}
                  </div>
                )}
              </dd>
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Date de création
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {date}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Auteur
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {ticket.user}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Catégorie
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {ticket.categorie}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Numéro d'affaire
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {ticket.affaire}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Montant
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                CHF {ticket.prix}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Description
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {ticket.desc}
              </dd>
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Justificatif
              </dt>
              <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <ul
                  role="list"
                  className="divide-y divide-gray-100 rounded-md border border-gray-200"
                >
                  <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                    <div className="flex w-0 flex-1 items-center">
                      <div className="ml-4 flex min-w-0 flex-1 gap-2">
                        <span className="truncate font-medium">
                          {ticket.img}
                        </span>
                        <span className="flex-shrink-0 text-gray-400">
                          2.4mb
                        </span>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Download
                      </a>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Justificatif
              </dt>
              <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {ticket.img && (
                  <Link href={ticket.img}>
                    <Image
                      src={ticket.img}
                      width={500}
                      height={500}
                      alt="Frais"
                    />
                  </Link>
                )}
                {!ticket.img && (
                  <Image
                    src={
                      "https://res.cloudinary.com/dkzvyfx4u/image/upload/v1705440603/cld-sample-5.jpg"
                    }
                    width={100}
                    height={100}
                    alt="Frais"
                  />
                )}
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
  );
}
