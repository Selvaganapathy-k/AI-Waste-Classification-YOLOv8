import {useEffect, useState} from "react";

import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

import {getHistory} from "../api/api";


function Analytics(){


const [history,setHistory]=useState([]);



useEffect(()=>{

loadData();

},[]);



async function loadData(){

try{

const data = await getHistory();

console.log("Analytics Data:",data);

setHistory(data);


}
catch(error){

console.log(error);

}

}





const data=[

{
name:"Recyclable",
value:
history.filter(
item=>item.predicted_class==="Recyclable"
).length
},


{
name:"Organic",
value:
history.filter(
item=>item.predicted_class==="Organic"
).length
},



{
name:"Hazardous",
value:
history.filter(
item=>item.predicted_class==="Hazardous"
).length
}

];




return(

<div className="analytics-page">


<h1>
📊 Waste Analytics
</h1>



<div className="analytics-cards">



<div className="analytics-card">

<h2>
{history.length}
</h2>

<p>
Total Scans
</p>

</div>




<div className="analytics-card">

<h2>
{
data[0].value
}
</h2>

<p>
♻ Recyclable
</p>

</div>





<div className="analytics-card">

<h2>
{
data[2].value
}
</h2>

<p>
⚠ Hazardous
</p>

</div>


</div>





<div className="chart-box">


<h2>
Waste Distribution
</h2>



<ResponsiveContainer
width="100%"
height={350}
>


<PieChart>


<Pie

data={data}

dataKey="value"

cx="50%"

cy="50%"

outerRadius={120}

label

>


{
data.map(
(entry,index)=>(

<Cell

key={index}

/>

)

)
}


</Pie>



<Tooltip/>

<Legend/>


</PieChart>


</ResponsiveContainer>



</div>



</div>

)

}


export default Analytics;