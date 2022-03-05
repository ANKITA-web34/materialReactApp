import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import CustomButton from "./FunctionalFiles/ButtonComp";
import { useNavigate } from "react-router";

const MainTable = (props) => {
  const [users, setUsers] = useState([]);
  let history = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get(`http://localhost:3004/${props.api}`);
    setUsers(response.data.reverse());
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3004/${props.api}/${id}`);
    fetchUsers();
  };

  const onEditPath = (id) => {
    history(`/${props.api}/edit/${id}`);
  };

  const onViewPath = (id) => {
    history(`/${props.api}/view/${id}`);
  };

  const onAddUSerPath = () => {
    history(`/${props.api}/add`);
  };

  return (
    <div>
      <CustomButton
        title={`Add New ${props.title}`}
        variant="outlined"
        color="secondary"
        onClick={() => onAddUSerPath()}
      />
      <h1>{props.title ? props.title : "Error check the api"}</h1>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {props.tableHeader.map((head) => {
                console.log(head);
                return <TableCell>{head}</TableCell>;
              })}
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {props.tableHeader.map((head) => {
                  return <TableCell>{user[head]}</TableCell>;
                })}
                <TableCell>
                  <CustomButton
                    id={user.id}
                    title="View"
                    variant="outlined"
                    color="primary"
                    onClick={() => onViewPath(user.id)}
                  />
                  <CustomButton
                    id={user.id}
                    title="Edit"
                    variant="outlined"
                    color="secondary"
                    onClick={() => onEditPath(user.id)}
                  />
                  <CustomButton
                    id={user.id}
                    title="Delete"
                    variant="outlined"
                    color="error"
                    onClick={() => deleteUser(user.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MainTable;
