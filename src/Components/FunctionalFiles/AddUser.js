import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { FormGroup } from "@mui/material";
import CustomButton from "./ButtonComp";

const AddUser = (props) => {
  let history = useNavigate();

  const [user, setUser] = useState({
    id: "",
    name: "",
    website: "",
    phone: "",
    email: "",
  });

  const ontextChange = (evt) => {
    setUser({ ...user, [evt.target.name]: evt.target.value });
  };

  const onclick = async (evt) => {
    evt.preventDefault();
    await axios.post(`http://localhost:3004/${props.api}`, user);
    history(`/${props.api}`);
  };
  return (
    <div>
      <FormGroup>
        {props.tableHeader.map((field) => {
          return (
            <FormControl>
              <InputLabel>{field}</InputLabel>
              <Input
                type="text"
                id="id"
                value={user[field]}
                onChange={(evt) => ontextChange(evt)}
              />
            </FormControl>
          );
        })}
      </FormGroup>
      <CustomButton
        title="Add"
        variant="outlined"
        color="secondary"
        onClick={(evt) => onclick(evt)}
      />
    </div>
  );
};

export default AddUser;
