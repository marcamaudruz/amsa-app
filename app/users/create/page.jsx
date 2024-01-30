import styles from "./userForm.module.css";
import { addUser } from "../../lib/actions";

const AddUserPage = () => {
  return (
    <div>
      <form action={addUser} className={styles.container}>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input
          type="password"
          placeholder="password"
          name="password_from_field"
          required
        />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;
