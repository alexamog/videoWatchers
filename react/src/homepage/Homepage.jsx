import { useNavigate } from "@tanstack/react-location";
import { useStore } from "../store";
import VideoPlayer from "../videoPlayer/VideoPlayer";

export default function Homepage(){
    const navigate = useNavigate();
    const token = useStore((state)=> state.token);

    return(
        <div>
            <h1>Welcome to the homepage</h1>
            {token && 
               <div>
                <VideoPlayer/>
                 <button onClick={()=>{
                    navigate({ to: "/upload", replace: true });
                }}>Upload a video!</button>
                </div>
            }
        
            {!token &&
                <div>
                    <button onClick={()=>{
                            navigate({ to: "login", replace: true });
                      }}>Login</button>
                                  <button onClick={()=>{
                            navigate({ to: "register", replace: true });
                      }}>Register</button>
                    </div>
                       }
        </div>
    )
}