import { HStack, VStack } from '@chakra-ui/react'
import { useState } from 'react';
import Login from '../login/Login';
import { useStore } from "../store";
import VidPreview from "../vidPreview/VidPreview";
import ButtonControl from "./ButtonControl";
import axios from 'axios';

export default function Homepage() {
    const token = useStore((state) => state.token);
    const videoArr = useStore((state) => state.currentVideoArray);
    const profile = useStore((state) => state.profile);
    const [filter, setFilter] = useState("")

    if (token == "token_here") {
        return (<div>
            <VStack>
                <h1>Welcome {profile.first} {profile.last} </h1>
                <label>Filter videos: </label>
                <input onChange={(e) => {
                    setFilter(e.target.value)
                }} />
                <ButtonControl />
            </VStack>
            <VStack>
                <HStack>
                    {filter == "" && videoArr.map((video, idx) => {
                        return (
                            <VidPreview
                                key={idx}
                                videoPicture={video.videoPicture}
                                videoURL={video.videoURL}
                                videoTitle={video.videoTitle}
                            />
                        )
                    })}
                    {!filter == "" && videoArr.filter(video => video.videoTitle.toLowerCase().includes(filter.toLowerCase()) || video.videoTitle.toLowerCase().startsWith(filter.toLowerCase())).map(video => (
                        <VidPreview
                            key={video.videoURL}
                            videoPicture={video.videoPicture}
                            videoURL={video.videoURL}
                            videoTitle={video.videoTitle}
                        />
                    ))}
                </HStack>
            </VStack>
        </div>)
    }
    else {
        return <Login />
    }
}