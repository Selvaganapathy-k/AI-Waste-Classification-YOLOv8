import {
    Recycle,
    Leaf,
    AlertTriangle
} from "lucide-react";


function PredictionCard({result}){


if(!result)

return(

<div className="prediction empty">

<h2>
🤖 AI Prediction
</h2>

<p>
Upload image to analyse waste
</p>

</div>

);





function getIcon(){


if(result.predicted_class==="Hazardous")

return <AlertTriangle size={50}/>;


if(result.predicted_class==="Organic")

return <Leaf size={50}/>;


return <Recycle size={50}/>;

}





function recommendation(){


if(result.predicted_class==="Hazardous")

return "Dispose carefully in hazardous waste bin";


if(result.predicted_class==="Organic")

return "Use for composting";


return "Place this waste in recycling bin";


}





return(

<div className="prediction">


<h2>
🤖 AI Analysis Complete
</h2>



<div className="prediction-result">


<div className="result-icon">

{
getIcon()
}

</div>



<h1>

{
result.class
}

</h1>



</div>





<div className="confidence-box">


<p>
Confidence
</p>


<div className="confidence-bar">


<div

style={{
width:
`${result.confidence*100}%`
}}

/>


</div>



<h3>

{
(result.confidence).toFixed(2)
}%

</h3>


</div>





<div className="recommendation">


<h3>
💡 Recommendation
</h3>


<p>
{
recommendation()
}
</p>


</div>



</div>

)

}


export default PredictionCard;