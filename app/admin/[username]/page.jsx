import { fetchValidatedTicketsByUser } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";

const NoteDeFrais = async ({ params }) => {
  // console.log("username", params.username);
  const tickets = await fetchValidatedTicketsByUser(params.username);
  // console.log("tickets", tickets);

  //get ticket total
  let total = 0.0;
  tickets.forEach((ticket) => {
    total += ticket.prix;
  });

  return (
    <>
      <main>
        <nav>
          <div>
            <h1>Page de note de frais</h1>
          </div>
        </nav>
            {tickets?.map((ticket) => (
              <div
                key={ticket.user}
                className="shadow-md rounded flex border border-blue-gray-50 mt-5"
              >
                <div className="ml-2 flex w-1/3">{ticket.titre}</div>
                <div className="flex w-1/3">{ticket.prix}</div>
                <div className="flex w-1/3">
                  {ticket.img && (
                    <Link href={ticket.img}>
                      <Image
                        src={ticket.img}
                        width={200}
                        height={200}
                        alt="Frais"
                      />
                    </Link>
                  )}
                </div>
              </div>
            ))}
        <div className="flex justify-center mt-10">
          <p>Total de la note de frais: {total}</p>
        </div>
      </main>
    </>
  );
};
export default NoteDeFrais;
