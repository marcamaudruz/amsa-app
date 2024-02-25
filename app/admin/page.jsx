import { countValidatedTicketsByUser } from "../lib/data";
import Link from "next/link";

const Admin = async () => {
  const list = await countValidatedTicketsByUser();
  console.log("in page", list);
  return (
    <>
      <main>
        <nav>
          <div>
            <h1>Admin page</h1>
          </div>
        </nav>
        {/* VERSION DIV */}
        {/* {list?.map((item) => (
          <div
            key={item.user}
            className="shadow-md rounded flex h-10 border border-blue-gray-50 mt-5"
          >
            <div className="ml-4 flex items-center w-52">{item.user}</div>
            <div className="flex items-center w-52">Total frais: {item.numberOfTickets}</div>
            {item.numberOfTickets > 0 && (
              <div className="flex items-center">
                <Link
                  href={`/admin/${item.user}`}
                  className="hover:text-red-800"
                >
                  Note de frais
                </Link>
              </div>
            )}
            
          </div>
        ))} */}

        {/* VERSION Table */}

        <table className="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Sliding Mr. Bones</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
            <tr>
              <td>Witchy Woman</td>
              <td>The Eagles</td>
              <td>1972</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
            </tr>
          </tbody>
        </table>

        {list?.map((item) => (
          <div
            key={item.user}
            className="shadow-md rounded flex h-10 border border-blue-gray-50 mt-5"
          >
            <div className="ml-4 flex items-center w-52">{item.user}</div>
            <div className="flex items-center w-52">Total frais: {item.numberOfTickets}</div>
            {item.numberOfTickets > 0 && (
              <div className="flex items-center">
                <Link
                  href={`/admin/${item.user}`}
                  className="hover:text-red-800"
                >
                  Note de frais
                </Link>
              </div>
            )}
            
          </div>
        ))}
      </main>
    </>
  );
};
export default Admin;
