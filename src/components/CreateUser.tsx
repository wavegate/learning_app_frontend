import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../constants";
import { io } from "socket.io-client";

const socket = io(API_URL);

const CreateUser = () => {
  const [users, setUsers] = useState<any[]>([]);
  const createUser = async () => {
    try {
      const response = await axios.post(`${API_URL}/user`);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/user`);
        if (response.status === 200) {
          setUsers(response.data.users);
        }
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    socket.on("new user", () => {
      fetchData();
    });
    return () => {
      socket.off("new user");
    };
  }, []);

  return (
    <div>
      <button onClick={createUser}>Create user</button>
      <button onClick={deleteUsers}>Delete users</button>
      <table>
        <thead>
          <tr>
            {users.length > 0 &&
              Object.keys(users[0]).map((key, index) => {
                return <th key={index}>{key}</th>;
              })}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user._id}>
                {Object.keys(users[0]).map((key, index) => {
                  if (key in user) {
                    return <td key={index}>{user[key]}</td>;
                  } else {
                    return <td key={index}></td>;
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default CreateUser;
