import styles from "./userForm.module.css";
import { addUser } from "../../lib/actions";

const AddUserPage = () => {
  return (
    <div className="flex justify-center my-8">
      <form action={addUser} className={styles.container}>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input
          type="password"
          placeholder="password"
          name="password_from_field"
          required
        />
        <select name="role" id="role">
          <option value="user">user</option>
          <option value="repr">repr</option>
          <option value="admin">admin</option>
        </select>
        <select name="dpt" id="dpt">
          <option value="100">dpt100</option>
          <option value="130">dpt130</option>
          <option value="140">dpt140</option>
          <option value="160">dpt160</option>
          <option value="520">dpt520</option>
        </select>
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
