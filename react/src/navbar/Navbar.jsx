import { HStack, Tabs, Tab, TabList } from "@chakra-ui/react";
import { useNavigate } from "@tanstack/react-location";
import { useStore } from "../store";
import axios from 'axios'

export default function Navbar() {
    const token = useStore((state) => state.token);
    const setAuth = useStore((store) => store.authentication);
    const setVideos = useStore((store) => store.updateVideos);

    const updateVideoState = async () => {
        await axios.get('http://localhost:3001/db/videos')
            .then((response) => {
                console.log(response.data)
                setVideos(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const navigate = useNavigate();
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
                            <Tab onClick={() => navigate({ to: "/", replace: true })}>
                                Home{" "}
                            </Tab>
                            <Tab onClick={() => {
                                updateVideoState()
                                navigate({ to: "/homepage", replace: true })
                            }}>
                                Homepage{" "}
                            </Tab>
                            <Tab onClick={() => navigate({ to: "/upload", replace: true })}>
                                Upload
                            </Tab>
                            <Tab onClick={() => {
                                setAuth(null);
                                navigate({ to: "/", replace: true });
                            }}>
                                Logout
                            </Tab>
                        </TabList>
                    </Tabs>
                </HStack>
            </div >
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