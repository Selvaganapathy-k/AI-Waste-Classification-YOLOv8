import {
    Recycle,
    Leaf,
    AlertTriangle
} from "lucide-react";


function HistoryCard({item}){


function getIcon(){

    if(item.predicted_class==="Hazardous")
        return <AlertTriangle/>;


    if(item.predicted_class==="Organic")
        return <Leaf/>;


    return <Recycle/>;

}



function getColor(){

    if(item.predicted_class==="Hazardous")
        return "hazard";


    if(item.predicted_class==="Organic")
        return "organic";


    return "recycle";

}



return(

<div className="history-card">


<div className="history-image">


<img

src={`https://ecovision-ai-backend-95u4.onrender.com/uploads/${item.image_name}`}

alt="waste"

/>


</div>




<div className="history-content">



<div className={`category ${getColor()}`}>


{getIcon()}


<h3>

{item.predicted_class}

</h3>


</div>





<p>
Confidence
</p>



<div className="history-progress">


<div

style={{
width:`${item.confidence*100}%`
}}

/>


</div>



<h4>

{
(item.confidence*100).toFixed(2)
}%

</h4>




<p className="date">

📅

{
new Date(item.created_at)
.toLocaleString()
}

</p>



</div>



</div>


)

}


export default HistoryCard;