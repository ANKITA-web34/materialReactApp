import "./App.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainTable from "./Components/mainTable";
import Button  from "./Components/FunctionalFiles/Button";
import Edit from "./Components/FunctionalFiles/Edit";

// import {
//   Button,
//   ButtonGroup,
//   Checkbox,
//   FormControlLabel,
//   TextField,
// } from "@mui/material";
// import SaveAltIcon from "@mui/icons-material/SaveAlt";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import React from "react";
// import CheckBoxIcon from "@mui/icons-material/CheckBox";
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles({
//   root: {
//     background: 'linear-gradient(45deg, pink, blue)',
//     color: 'white',
//     padding: '5px 15px',
//     border: 0,
//     marginBottom: '20px',
//     borderRadius: '15px'
//   }
// });

// function App() {
//   return (
//     <div className="App">
//       <ButtonStyles/>
//       <TextField
//         type={"email"}
//         variant="filled"
//         placeholder="hy harray"
//         color="secondary"
//       />
//       <CheckboxExample />
//       <ButtonGroup variant="contained">
//         <Button endIcon={<SaveAltIcon />}>Save</Button>
//         <Button endIcon={<DeleteForeverIcon />} color="secondary">
//           Delete
//         </Button>
//       </ButtonGroup>
//     </div>
//   );
// }

// function ButtonStyles() {
//   const classes = useStyles();
//   return <div className={classes.root}>Styled Button</div>
  
// }

// function CheckboxExample() {
//   const [checked, setChecked] = React.useState(true);

//   return (
//     <FormControlLabel
//       control={
//         <Checkbox
//           checked={checked}
//           icon={<CheckBoxIcon />}
//           checkedIcon={<CheckBoxIcon />}
//           onChange={(e) => setChecked(e.target.checked)}
//         />
//       }
//       label="Chackbox"
//     />
//   );
// }

// export default A


function App() {
  return (
  <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MainTable className="table"/>}/>
        <Route exact path="/view/:id" element={<Button/>}/>
        <Route exact path="/edit/:id" element={<Edit/>}/>
      </Routes>
    </div>
  </Router>
  )
};

export default App;