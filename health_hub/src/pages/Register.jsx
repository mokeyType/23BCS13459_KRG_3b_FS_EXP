import { useState } from "react";
import API from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";
function Register() {

    const navigate = useNavigate();

    const[form ,setForm] = useState({
        username:"",
        password:"",
        role:"USER"//
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e)=>{
        setForm({...form,
            [e.target.name]:e.target.value

        });
    }
    

    const handleSubmit = async (e)=>{
        e.preventDefault();

        try{
            setLoading(true)
            const res = await API.post("/api/user",form);
            console.log("User Registered ", res.data);
            alert("REgistration Successful");
            navigate("/login");
        } catch(err){
            console.log(err);
            alert("Registration Failed");
        } finally{
            setLoading(false);
        }
    };


    return (
        <>
        <div className="register-container">
            <h2> Register</h2>
            <form onSubmit={handleSubmit} className="register">
                
                <input type="text" name="username"
                placeholder="Username"
                value={form.username}
                onChange={handleChange} required
                />

                <input type="password" name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange} 
                required
                />
                 
                 <select 
                 name="role" 
                 value={form.role}
                 onChange={handleChange}>
                  <option value="USER">USER</option>
                  <option value="ADMIN">ADMIN</option>
                 </select>

                 <button type="submit" disabled={loading}> {loading?"Registering...":"Register"}</button>

            </form>
        </div>


        <button onClick={()=>navigate("/login")}
            style={{margin:"10px",
                background:"#3498db",
                color:"white",
                border:"none",
                padding:"8px",
                cursor:"pointer"
            }}>
           Login
        </button>

        
        
        </>
    )
  
}

export default Register;