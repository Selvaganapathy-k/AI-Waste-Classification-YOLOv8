import {
useState
} from "react";


import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import UploadCard from "../components/UploadCard";
import PredictionCard from "../components/PredictionCard";



function Dashboard(){


const [result,setResult]=useState(null);



return(

<div className="layout">


<Sidebar/>



<div className="main">


<Navbar/>



<div className="dashboard">


<h1>

Welcome back 👋

</h1>


<p>

Smart AI Waste Classification System

</p>



<div className="dashboard-grid">


<UploadCard

setResult={setResult}

/>



<PredictionCard

result={result}

/>



</div>


</div>


</div>


</div>

)


}


export default Dashboard;