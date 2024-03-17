import { countValidatedTicketsByUser } from "../lib/data";
import Link from "next/link";
import styles from './styles.module.css'


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
        <table className={styles.listeFrais}>
          <thead>
            <tr>
              <th>User</th>
              <th>Nombre de frais</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list?.map((item) => (
              <tr key={item.user}>
                <td>{item.user}</td>
                <td>{item.numberOfTickets}</td>
                <td>{item.numberOfTickets > 0 && (
                    <Link
                      href={`/admin/${item.user}`}
                      className="hover:text-red-800"
                    >
                      Créer
                    </Link>
                )}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
};
export default Admin;
