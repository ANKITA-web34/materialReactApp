import React, {useState, useEffect} from "react";
import { useParams } from "react-router";
import axios from "axios";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const ButtonComponent = () => {
    const [users, setUsers] = useState({
        name: "",
        email: "",
        phone: "",
        website: "",
    });

    const { id } = useParams();

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async() => {
        const res = await axios.get(`http://localhost:3004/users/${id}`);
        setUsers(res.data);
    };

    return(        
        <List>
          <ListItem>Id: {users.id}</ListItem>
          <ListItem>Name: {users.name}</ListItem>
          <ListItem>Email: {users.email}</ListItem>
          <ListItem>Number: {users.phone}</ListItem>
          <ListItem>Website: {users.website}</ListItem>
        </List>
    )

}

export default ButtonComponent;