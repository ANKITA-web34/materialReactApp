import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import CustomButton from "./FunctionalFiles/ButtonComp";
import { useNavigate } from "react-router";

const MainTable = () => {
    const [users, setUsers] = useState([]);
    let history = useNavigate();
    
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async() => {
        const response = await axios.get("http://localhost:3004/users");
        setUsers(response.data.reverse());
    };

    const deleteUser = async (id) => {
      await axios.delete(`http://localhost:3004/users/${id}`);
      fetchUsers();
    }

    const onEditPath = (id) => {
      history(`/edit/${id}`)
    }

    const onViewPath = (id) => {
      history(`/view/${id}`)
    }
    
    const onAddUSerPath = () => {
      history("/add")
    }

  return (
    <div>
        <CustomButton title="Add New User" variant="outlined" color="secondary" onClick={() => onAddUSerPath()}/>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Number</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user, index) => (
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <CustomButton id={user.id} title="View" variant="outlined" color="primary" onClick={() => onViewPath(user.id)}/>
                    <CustomButton id={user.id} title="Edit" variant="outlined" color="secondary" onClick={() => onEditPath(user.id)}/>
                    <CustomButton id={user.id} title="Delete" variant="outlined" color="error" onClick={() => deleteUser(user.id)}/>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  );
}

export default MainTable;