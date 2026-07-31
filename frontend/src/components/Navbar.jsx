import {
Leaf,
LogOut,
Moon,
User
} from "lucide-react";


import {
useNavigate
} from "react-router-dom";



function Navbar(){


const navigate=useNavigate();


const username =
localStorage.getItem("username")
||
"User";



function logout(){

localStorage.clear();

navigate("/login");

}



return(

<div className="navbar">


<div className="brand">

<Leaf/>

<h2>
EcoVision AI
</h2>

</div>




<div className="nav-right">


<div className="username">

<User/>

{username}

</div>



<button>

<Moon/>

</button>



<button
onClick={logout}
>

<LogOut/>

Logout

</button>



</div>



</div>

)

}


export default Navbar;