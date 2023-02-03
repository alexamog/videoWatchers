import { HStack, Tabs, Tab, TabList } from "@chakra-ui/react";
import { useNavigate } from "@tanstack/react-location";
import { useStore } from "../store";

export default function Navbar() {
    const token = useStore((state) => state.token);
    const setAuth = useStore((store) => store.authentication);
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
                            <a href="http://localhost:5174/">
                            <Tab>
                                Watch Videos{" "}
                            </Tab>
                            </a>

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