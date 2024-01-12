import { Suspense } from "react";
import Loading from "../loading";
import Link from "next/link";
import ListeFrais from "./ListeFrais2";
import { SubmitButton } from "../components/Submit-button";

export default function Tickets() {
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
      <p>
        <small>Note de frais actuellement ouverte</small>
      </p>

      <Suspense fallback={<Loading />}>
        <ListeFrais />
      </Suspense>
    </main>
  );
}
