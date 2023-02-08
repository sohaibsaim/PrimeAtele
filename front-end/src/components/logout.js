import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ()=>{
    const navigate = useNavigate();
    useEffect(()=>{
    setTimeout(() => {
        localStorage.clear();
        navigate("/login");
    }, 2000);
    },[]);
return (<>
    <h4>Loging out...</h4>
</>);
}


export default Logout;