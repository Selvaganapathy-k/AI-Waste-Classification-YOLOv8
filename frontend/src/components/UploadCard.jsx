import { useState } from "react";

import {
    UploadCloud
} from "lucide-react";

import {
    predictWaste
} from "../api/api";


function UploadCard({setResult}){


    const [image,setImage] = useState(null);

    const [preview,setPreview] = useState(null);

    const [loading,setLoading] = useState(false);


async function handleImage(e) {

    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));

    try {

        setLoading(true);

        const data = await predictWaste(file);

        console.log(data);

        setResult(data);

    } catch (error) {

        console.log(error);

        alert("Prediction Failed");

    } finally {

        setLoading(false);

    }

}




    async function handlePredict(){


        if(!image){

            alert("Please select image");

            return;

        }


        try{


            setLoading(true);



            const data = await predictWaste(image);



            console.log(data);



            setResult(data);



        }
        catch(error){


            console.log(error);


            alert("Prediction failed");


        }
        finally{


            setLoading(false);


        }


    }


return (

<div className="upload-card">


<h2>
📤 Upload Waste Image
</h2>



<div className="upload-area">


<input

type="file"

accept="image/*"

onChange={handleImage}

/>



<div className="upload-content">


<h3>
Drag & Drop Image
</h3>


<p>
or click to choose file
</p>


</div>


</div>





{
preview &&

<div className="image-preview-card">


<img

src={preview}

alt="preview"

/>


<div>


<h3>
{image.name}
</h3>


<p>
Ready for Prediction
</p>


</div>



</div>

}










</div>

)
}


export default UploadCard;