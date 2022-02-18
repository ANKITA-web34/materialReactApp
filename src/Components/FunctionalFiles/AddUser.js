import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { FormGroup } from "@mui/material";
import { Button} from "@mui/material";
import CustomButton from "./ButtonComp";

const AddUser = () => {
    let history = useNavigate();

    const [user, setUser] = useState({
        name: "",
        website: "",
        phone: "",
        email: ""
    });

    const ontextChange = (evt) => {
        setUser({...user, [evt.target.name] : evt.target.value});
    }    

    const onclick = async (evt) => {
        evt.preventDefault();
        await axios.post("http://localhost:3004/users", user);
        history("/");
    }

    const { name, website, phone, email } = user;

    return (
        <div>
            <FormGroup>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input type="text" name="name" value={name} onChange={(evt)=> ontextChange(evt)}/>
                </FormControl>
                <FormControl>
                    <InputLabel>website</InputLabel>
                    <Input type="text" name="website" value={website} onChange={(evt)=> ontextChange(evt)}/>
                </FormControl>
                <FormControl>
                    <InputLabel>Number</InputLabel>
                    <Input type="number" name="phone" value={phone} onChange={(evt)=> ontextChange(evt)}/>
                </FormControl>
                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input type="email" name="email" value={email} onChange={(evt)=> ontextChange(evt)}/>
                </FormControl>
            </FormGroup>
            <CustomButton title="Add" variant="outlined" color="secondary" onClick={evt => onclick(evt)}/>
        </div>
    )
}

export default AddUser;