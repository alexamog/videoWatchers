import { useStore } from "../store";
import ButtonControl from "./ButtonControl";
export default function Homepage() {
    const token = useStore((state) => state.token);
    const profile = useStore((state) => state.profile);

    if (token == "token_here") {
        return (<div>

            <h1>Welcome {profile.first} {profile.last} </h1>
            <ButtonControl />
        </div >)

    }
    else {
        return (<div>
            <h1>Welcome to the homepage</h1>
        </div>
        )
    }
}
