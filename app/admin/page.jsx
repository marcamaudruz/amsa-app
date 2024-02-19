import { countValidatedTicketsByUser } from "../lib/data";
import Link from "next/link";

const Admin = async () => {
  const list = await countValidatedTicketsByUser();
  console.log("in page", list);
  return (
    <>
      <div>
        <h1>Admin page</h1>
        <div className="flex justify-center mt-10">
          <div className="w-3/4 border border-red-50">
            {list?.map((item) => (
              <div
                key={item.user}
                className="flex h-10 border border-blue-gray-50 mt-5"
              >
                <div className="ml-2 flex w-1/3">{item.user}</div>
                <div className="flex w-1/3">{item.numberOfTickets}</div>
                {item.numberOfTickets > 0 && (
                  <div className="flex w-1/3">
                    <Link
                      href={`/admin/${item.user}`}
                      className="hover:text-red-800"
                    >Note de frais
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Admin;
