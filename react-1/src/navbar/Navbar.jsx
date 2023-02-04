import { HStack, Tabs, Tab, TabList } from "@chakra-ui/react";
import { useNavigate } from "@tanstack/react-location";
import { useStore } from "../store";
import axios from 'axios';

export default function Navbar() {
    const token = useStore((state) => state.token);
    const setAuth = useStore((store) => store.authentication);
    const navigate = useNavigate();
    const setAddVideo = useStore((store) => store.addVideo);
    const getVideos = async () => {
        const res = await axios.get('http://localhost:3001/db/videos')
        .then(function (response) {
            console.log(response.data);
            for(let video of response.data){
                const myvid = {
                    "url": video.video_Path,
                    "title": video.video_title,
                    "picture": "https://i.imgur.com/UHPcMV1.png"
                }
                console.log(myvid)
                setAddVideo(myvid);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    if (token == "token_here") {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}>
                <HStack as="nav">
                    <Tabs variant="soft-rounded" colorScheme="blue">
                        <TabList>
                            <Tab onClick={() => {
                                getVideos()
                                navigate({ to: "/homepage", replace: true })
                            }}>
                                Homepage{" "}
                            </Tab>
                            <a href="http://localhost:5173/upload">
                            <Tab>
                                Upload{" "}
                            </Tab>
                            </a>
                            <Tab onClick={() => {
                                setAuth(null);
                                navigate({ to: "/", replace: true });
                            }}>
                                Logout
                            </Tab>
                        </TabList>
                    </Tabs>
                </HStack>
            </div>
        );
    }
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
            }}>
            <HStack as="nav">
                <Tabs variant="soft-rounded" colorScheme="blue">
                    <TabList>
                        <Tab onClick={() => navigate({ to: "/login", replace: true })}>
                            Login{" "}
                        </Tab>
                        <Tab onClick={() => navigate({ to: "/register", replace: true })}>
                            Register
                        </Tab>
                    </TabList>
                </Tabs>
            </HStack>
        </div>
    )

}