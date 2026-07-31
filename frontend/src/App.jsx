import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";


import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import Profile from "./pages/Profile";


function App(){


return(

<BrowserRouter>


<Routes>


<Route
path="/"
element={<Register/>}
/>


<Route
path="/login"
element={<Login/>}
/>



<Route
path="/dashboard"
element={<Dashboard/>}
/>



<Route
path="/history"
element={<History/>}
/>



<Route
path="/profile"
element={<Profile/>}
/>



</Routes>


</BrowserRouter>

)

}


export default App;