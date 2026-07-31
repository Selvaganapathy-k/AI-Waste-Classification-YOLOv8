import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    Mail,
    Lock,
    LogIn,
    Leaf
} from "lucide-react";

import toast from "react-hot-toast";

import { loginUser } from "../api/api";


function Login(){

    const navigate = useNavigate();


    const [email,setEmail] = useState("");

    const [password,setPassword] = useState("");

    const [loading,setLoading] = useState(false);



    async function handleLogin(e){

        e.preventDefault();

        setLoading(true);


        try{

            const data = await loginUser(
                email,
                password
            );


            console.log(data);


            // save login data

            localStorage.setItem(
                "token",
                data.token
            );


            localStorage.setItem(
                "username",
                data.username
            );


            localStorage.setItem(
                "email",
                data.email
            );



            toast.success(
                `Welcome ${data.username} 🎉`
            );



            setTimeout(()=>{

                navigate("/dashboard");

            },1500);



        }
        catch(error){

            console.log(error);


            toast.error(
                "Invalid Email or Password"
            );

        }


        setLoading(false);

    }




    return(

        <div className="login-page">


            <div className="login-card">


                <div className="brand">


                    <div className="logo-circle">

                        <Leaf size={45}/>

                    </div>


                    <h1>
                        EcoVision AI
                    </h1>


                    <p>
                        Smart Waste Classification
                    </p>


                </div>





                <form onSubmit={handleLogin}>


                    <div className="login-input">


                        <Mail size={22}/>


                        <input

                        type="email"

                        placeholder="Email"

                        value={email}

                        onChange={
                            e=>setEmail(e.target.value)
                        }

                        required

                        />

                    </div>






                    <div className="login-input">


                        <Lock size={22}/>


                        <input

                        type="password"

                        placeholder="Password"

                        value={password}

                        onChange={
                            e=>setPassword(e.target.value)
                        }

                        required

                        />


                    </div>





                    <button type="submit">


                        <LogIn size={22}/>


                        {

                        loading

                        ?

                        "Checking..."

                        :

                        "Login"

                        }


                    </button>



                </form>




                <p className="auth-link">

                    Don't have account?

                    <span
                    onClick={()=>navigate("/")}
                    >
                        Register
                    </span>

                </p>



            </div>


        </div>

    )

}


export default Login;