import { useNavigate } from "@tanstack/react-location";
export default function Homepage(){
    const navigate = useNavigate();
    return(
        <div>
            <h1>Welcome to the homepage</h1>
            <button onClick={()=>{
                  navigate({ to: "upload", replace: true });
            }}>Upload a video!</button>
            <button>Watch a video!</button>
        </div>
    )
}