import { addTicket } from "../../lib/actions";

const AddTicketPage = () => {
    return (
        <div>
            <form action={addTicket}>
            <label>
                <span>titre:</span>
                <input
                required 
                type="text"
                name="titre"
                />
            </label>
            <label>
                <span>Catégorie:</span>
                <select 
                required
                name="categorie"
                >
                <option value="" disabled>Selectionner une catégorie</option>
                <option value="repas client">Repas client</option>
                <option value="repas interne">Repas interne</option>
                <option value="parking">Frais de parking</option>
                <option value="matériel">Matériel chantier</option>
                <option value="autre">Autre frais</option>
                </select>
            </label>
            <label>
                <span>Description:</span>
                <textarea
                required
                name="desc"
                />
            </label>
            <label>
                <span>Affaire:</span>
                <input
                required 
                type="number"
                name="affaire"
                />
            </label>
            <label>
                <span>Montant:</span>
                <input
                required 
                type="number"
                name="prix"
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    </div>
    )
}
export default AddTicketPage;