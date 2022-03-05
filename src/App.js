import "./App.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainTable from "./Components/mainTable";
import View  from "./Components/FunctionalFiles/View";
import Edit from "./Components/FunctionalFiles/Edit";
import AddUser from "./Components/FunctionalFiles/AddUser";
import CustomButton from "./Components/FunctionalFiles/ButtonComp";

function App() { 
  return (
  <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<CustomButton title="User" variant="outlined" color="secondary" onClick={evt => onclick(evt)} />} />
        <Route exact path="/users" element={<MainTable className="table"  api="users" title="users" tableHeader={["id", "name", "number", "email"]} />}/>
        <Route exact path="/comment" element={<MainTable className="table"  api="comment" title="Comment" tableHeader={["id", "name", "text"]} />}/>
        <Route exact path="/product" element={<MainTable className="table"  api="product" title="product" tableHeader={["id", "name", "text"]} />}/>
        <Route exact path="/users/add" element={<AddUser api="users" title="users"  tableHeader={["id", "name", "number", "email"]}/>}/>
        <Route exact path="/comment/add" element={<AddUser api="comment" title="comment" tableHeader={["id", "name", "text"]} />}/>
        <Route exact path="/product/add" element={<AddUser api="product" title="product"  tableHeader={["id", "name", "number", "email"]}/>}/>
        <Route exact path="/users/view/:id" element={<View api="users" title="users"  tableHeader={["id", "name", "number", "email"]}/>}/>
        <Route exact path="/comment/view/:id" element={<View api="comment" title="comment" tableHeader={["id", "name", "text"]} />}/>
        <Route exact path="/product/view/:id" element={<View api="product" title="product"  tableHeader={["id", "name", "number", "email"]}/>}/>
        <Route exact path="/comment/edit/:id" element={<Edit api="comment" title="comment" tableHeader={["id", "name", "text"]} />}/>
        <Route exact path="/users/edit/:id" element={<Edit api="users" title="users"  tableHeader={["id", "name", "number", "email"]}/>}/>
        <Route exact path="/product/edit/:id" element={<Edit api="product" title="product"  tableHeader={["id", "text", "name"]}/>}/>
      </Routes>
    </div>
  </Router>
  )
};

export default App;


 {/* <Route exact path="/comments" element={<MainTable className="table"  {...comment} />}/> */}