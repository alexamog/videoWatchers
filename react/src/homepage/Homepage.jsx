import { Stack, HStack, VStack } from '@chakra-ui/react'
import { useStore } from "../store";
import VidPreview from "../vidPreview/VidPreview";
import ButtonControl from "./ButtonControl";
export default function Homepage() {
    const token = useStore((state) => state.token);
    const profile = useStore((state) => state.profile);

    if (token == "token_here") {
        return (<div>
            <VStack>

                <h1>Welcome {profile.first} {profile.last} </h1>
                <ButtonControl />
            </VStack>

            <VStack>

                <HStack>
                    <VidPreview
                        videoURL="https://www.youtube.com/watch?v=K3Qzzggn--s"
                        videoPicture="https://i.ytimg.com/vi/K3Qzzggn--s/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAoxDsaFGEv0_Tx0xDDNKCdhwd2ww"
                        videoTitle={"Joji - Slow Dancing in the dark M/V"}
                    />
                    <VidPreview
                        videoURL="https://www.youtube.com/watch?v=-yR1IBtixHY"
                        videoPicture="https://i.ytimg.com/vi/-yR1IBtixHY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDx_m4okoCo-zK3CzJ68tAp3p9H9g"
                        videoTitle={"Atarashi Gakko - オトナブルー "}
                    />
                    <VidPreview
                        videoURL="https://www.youtube.com/watch?v=aeqnEJpPZVY"
                        videoPicture="https://i.ytimg.com/vi/aeqnEJpPZVY/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIEsoOzAP&rs=AOn4CLDEKAMYOoCylz2iPVY1kjfKHAsqEg"
                        videoTitle={"TaehaTypes - Fjell keyboard"}
                    />
                </HStack>
            </VStack>

        </div>)
    }
    else {
        return (<div>
            <h1>Welcome to the homepage</h1>
        </div>
        )
    }
}
