import { fetchUsers } from "../lib/data";
import UserTable from "./userTable";
import Link from "next/link";
import { SubmitButton } from "../components/Submit-button";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export default async function UsersPage() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/users");
  }

  const { users } = await await fetchUsers(); //pourquoi retourne pas un array ??

  return (
    <main>
      <nav>
        <div>
          <h2>Utilisateurs</h2>
          <div className="pt-5">
            <h3>Mes données</h3>
            <p>Name: {session.user.username}</p>
            <p>Role: {session.user.role}</p>
          </div>
        </div>
      </nav>
      <div className="flex justify-center my-8">
        <Link href="/users/create">
          <SubmitButton name={"Ajouter un utilisateur"} />
        </Link>
      </div>
      {users.lenght === 0 && <p>no users</p>}
      <UserTable users={users} />
    </main>
  );
}
