import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { FormGroup } from "@mui/material";
import { Link } from "react-router-dom";
import CustomButton from "./ButtonComp";

const EditUser = () => {
  let history = useNavigate();

  const [users, setUsers] = useState({
    name: "",
    phone: "",
    website: "",
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
    setUsers({ ...users, [evt.target.name] : evt.target.value });
  };

  const onsubmit = async (evt) => {
    evt.preventDefault();
    await axios.put(`http://localhost:3004/users/${id}`, users);
    history("/");
}

  const { name, phone, email, website } = users;
  return (
    <div>
        <FormGroup> 
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input
                type="text"
                name="name"
                value={name}
                onChange={(evt) => ontextChange(evt)}
                />
            </FormControl><br/><br/>
            <FormControl>
                <InputLabel>Number</InputLabel>
                <Input
                type="text"
                name="phone"
                value={phone}
                onChange={(evt) => ontextChange(evt)}
                />
            </FormControl><br/><br/>
            <FormControl>
                <InputLabel>Website</InputLabel>
                <Input
                type="text"
                name="website"
                value={website}
                onChange={(evt) => ontextChange(evt)}
                />
            </FormControl><br/><br/>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input align="right"
                type="email"
                name="email"
                value={email}
                onChange={(evt) => ontextChange(evt)}
                />
            </FormControl><br/><br/>
        </FormGroup>
            <CustomButton title="Update" variant="outlined" color="secondary" onClick={evt => onsubmit(evt)}/>
    </div>
  );
};

export default EditUser;
