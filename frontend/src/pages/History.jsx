import {useEffect,useState} from "react";

import HistoryCard from "../components/HistoryCard";

import {getHistory} from "../api/api";


function History(){


const [history,setHistory]=useState([]);



useEffect(()=>{

loadHistory();

},[]);



async function loadHistory(){

const data=await getHistory();

setHistory(data);

}



return(

<div className="history-page">


<h1>
📜 My Waste History
</h1>


<div className="history-container">


{
history.map(item=>(

<HistoryCard

key={item.id}

item={item}

/>

))

}


</div>


</div>

)

}


export default History;