import {useEffect,useState} from "react";

import {
    User,
    Mail,
    Recycle,
    Leaf,
    AlertTriangle
} from "lucide-react";


import {getHistory} from "../api/api";



function Profile(){


const username =
localStorage.getItem("username")
||
"User";


const email =
localStorage.getItem("email")
||
"";



const [history,setHistory]=useState([]);




useEffect(()=>{


loadHistory();


},[]);





async function loadHistory(){


try{


const data = await getHistory();


setHistory(data);


}

catch(error){

console.log(error);

}


}





const recyclable =
history.filter(
item=>item.predicted_class==="Recyclable"
).length;



const organic =
history.filter(
item=>item.predicted_class==="Organic"
).length;



const hazardous =
history.filter(
item=>item.predicted_class==="Hazardous"
).length;





return(

<div className="profile-page">



<div className="profile-card">



<div className="profile-avatar">

<User size={50}/>

</div>





<h1>

{username}

</h1>




<div className="profile-email">


<Mail/>

{email}


</div>






<div className="profile-stats">



<div>

<h2>

{history.length}

</h2>

<p>
Total Scans
</p>

</div>





<div>

<Recycle/>

<h2>

{recyclable}

</h2>

<p>
Recyclable
</p>

</div>






<div>

<Leaf/>

<h2>

{organic}

</h2>

<p>
Organic
</p>

</div>






<div>

<AlertTriangle/>

<h2>

{hazardous}

</h2>

<p>
Hazardous
</p>

</div>



</div>




<p className="member">

🌱 EcoVision AI Member

</p>



</div>


</div>


)

}


export default Profile;