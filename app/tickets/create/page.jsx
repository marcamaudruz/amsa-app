import CreateForm from "./CreateForm";
import { getServerSession } from "next-auth";
import { options } from "../../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const AddTicketPage = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/signin");
  }

  return (
    <main>
      <CreateForm user={session.user} />
    </main>
  );
};
export default AddTicketPage;
