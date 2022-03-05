import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { FormGroup } from "@mui/material";
import CustomButton from "./ButtonComp";

const EditUser = (props) => {
  let history = useNavigate();

  const [users, setUsers] = useState({
    name: "",
    phone: "",
    website: "",
    email: "",
  });

  const { id } = useParams();

  const fetchUsersForEdit = async () => {
    const result = await axios.get(`http://localhost:3004/${props.api}/${id}`);
    setUsers(result.data);
  };

  useEffect(() => {
    fetchUsersForEdit();
  }, []);

  const ontextChange = (evt) => {
    setUsers({ ...users, [evt.target.name]: evt.target.value });
  };

  const onsubmit = async (evt) => {
    evt.preventDefault();
    await axios.put(`http://localhost:3004/${props.api}/${id}`, users);
    console.log(`http://localhost:3004/${props.api}/${id}`, users);
    history(`/${props.api}`);
  };
  return (
    <div>
      <FormGroup>
        {props.tableHeader.map((field) => {
          console.log(field);
          return (
            <FormControl>
              <InputLabel>{field}</InputLabel>
              <Input
                type="text"
                name={users[field]}
                value={users[field]}
                onChange={(evt) => ontextChange(evt)}
              />{" "}
              <br />
            </FormControl>
          );
        })}
        <br />
      </FormGroup>
      <CustomButton
        title="Update"
        variant="outlined"
        color="secondary"
        onClick={(evt) => onsubmit(evt)}
      />
    </div>
  );
};

export default EditUser;
