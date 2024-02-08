import { Suspense } from "react";
import Loading from "../loading";
import Link from "next/link";
import ListeFrais from "./ListeFrais2";
import { SubmitButton } from "../components/Submit-button";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import { SearchComp } from "../components/SearchComp";

export default async function Tickets({ searchParams }) {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/tickets");
  }

  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <main>
      <nav>
        <div>
          <h2>Notes de frais</h2>
        </div>
      </nav>
      <div className="flex justify-center my-8">
        <Link href="/tickets/create">
          <SubmitButton name={"Ajouter une Note de frais"} />
        </Link>
      </div>

      <SearchComp />

      <Suspense key={query + currentPage} fallback={<Loading />}>
        <ListeFrais
          query={query}
          currentPage={currentPage}
          user={session.user}
        />
      </Suspense>
    </main>
  );
}
