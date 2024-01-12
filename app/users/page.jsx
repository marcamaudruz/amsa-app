import { fetchUsers } from '../lib/data'
import UserTable from './userTable'
import Link from "next/link"
import { SubmitButton } from "../components/Submit-button"
export default async function UsersPage() {

  const { users } = await await fetchUsers() //pourquoi retourne pas un array ??

  return (
    <main>
      <nav>
        <div>
          <h2>Utilisateurs</h2>
        </div>
      </nav>
      <div className="flex justify-center my-8">
        <Link href="/users/create">
          <SubmitButton name={"Ajouter un utilisateur"} />
        </Link>
      </div>
      {users.lenght === 0 && (
        <p>no users</p>
      )}
        <UserTable users={users} />
    </main>
  )
}
