import axios from "axios";
import { API_URL } from "../constants";

const CreateUser = () => {
  const createUser = async () => {
    try {
      const response = await axios.get(`${API_URL}/user`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteUsers = async () => {
    try {
      const response = await axios.delete(`${API_URL}/user`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={createUser}>Create user</button>
      <button onClick={deleteUsers}>Delete users</button>
    </div>
  );
};
export default CreateUser;
