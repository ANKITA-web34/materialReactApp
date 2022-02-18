import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const EditUser = () => {
  let history = useNavigate();

  const [users, setUsers] = useState({
    name: "",
    username: "",
    phone: "",
    email: "",
  });

  const { id } = useParams();

  const fetchUsersForEdit = async () => {
    const result = await axios.get(`http://localhost:3004/users/${id}`);
    setUsers(result.data);
  };

  useEffect(() => {
    fetchUsersForEdit();
  }, []);

  const ontextChange = (evt) => {
    setUsers({ ...users, [evt.target.name]: evt.target.value });
  };

  const { name, username, phone, email } = users;
  return (
    <div>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <br />
        <Input
          type="text"
          name="name"
          value={name}
          onChange={(evt) => ontextChange(evt)}
        />
        <br />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <br />
        <Input
          type="email"
          name="email"
          value={email}
          onChange={(evt) => ontextChange(evt)}
        />
      </FormControl>
    </div>
  );
};

export default EditUser;
