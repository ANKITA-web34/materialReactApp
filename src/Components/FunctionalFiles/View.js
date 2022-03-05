import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { Link } from "react-router-dom";

const View = (props) => {
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

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3004/${props.api}/${id}`);
    setUsers(res.data);
  };

  return (
    <div>
      <Link to={`/${props.api}`}>
        <ArrowBackRoundedIcon />
      </Link>
      <h1>{props.title}</h1>
      <List>
        {props.tableHeader.map((ListItems) => {
          return <ListItem>{users[ListItems]}</ListItem>;
        })}
      </List>
    </div>
  );
};

export default View;
