import axios from "axios";


const API_URL="http://127.0.0.1:8000";



// REGISTER

export async function registerUser(
username,
email,
password
){

const response = await axios.post(

`${API_URL}/register`,

null,

{
params:{
username,
email,
password
}
}

);


return response.data;

}





// LOGIN

export async function loginUser(
email,
password
){


const response = await axios.post(

`${API_URL}/login`,

null,

{
params:{
email,
password
}
}

);


return response.data;

}





// PREDICT

export async function predictWaste(image){


const token =
localStorage.getItem("token");



const formData=new FormData();


formData.append(
"file",
image
);



const response = await axios.post(

`${API_URL}/predict`,

formData,

{

headers:{

Authorization:
`Bearer ${token}`,

"Content-Type":
"multipart/form-data"

}

}

);



return response.data;


}






// HISTORY


export async function getHistory(){


const token =
localStorage.getItem("token");



const response = await axios.get(

`${API_URL}/history`,

{

headers:{

Authorization:
`Bearer ${token}`

}

}

);



return response.data;


}