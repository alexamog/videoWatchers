import { useEffect, useRef } from "react";
import { VStack, Heading } from "@chakra-ui/react"
export default function LandingPage(){
    const title = useRef();
    return (<div>
        <VStack>
        <h1>VideoWatchers</h1>
        <Heading as="h1" fontSize="3rem">
            <span ref={title}></span>
        </Heading>
        </VStack>

    </div>
    )
}