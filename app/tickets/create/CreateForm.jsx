import { addTicket } from "../../lib/actions";
import { SubmitButton } from '../../components/Submit-button'


export default function CreateForm() {
    return (
        <div className="grid place-items-center">
            <form action={addTicket} className="w-full max-w-sm">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Titre
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            required
                            type="text"
                            name="titre"
                        />
                    </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Catégorie
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <select
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            required
                            name="categorie"
                        >
                            {/* <option value="" disabled>Selectionner une catégorie</option> */}
                            <option value="repas client">Repas client</option>
                            <option value="repas interne">Repas interne</option>
                            <option value="parking">Frais de parking</option>
                            <option value="matériel">Matériel chantier</option>
                            <option value="autre">Autre frais</option>
                        </select>
                    </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Description
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            required
                            type="text"
                            name="desc"
                        />
                    </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Affaire
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            required
                            type="number"
                            name="affaire"
                        />
                    </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Montant
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            required
                            type="number"
                            name="prix"
                        />
                    </div>
                </div>
                {/* <button type="submit">Submit</button> */}
                <div className="grid place-items-center">
                <SubmitButton name={"ajouter"} />
                </div>
                
            </form>
        </div>


    )
}