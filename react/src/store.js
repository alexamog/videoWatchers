import create from "zustand";
import produce from "immer";
import { persist, createJSONStorage } from 'zustand/middleware';

export const useStore = create((set) => ({
  token: null,
  profile: {
    "first": "Developer mode",
    "last": "on",
    "username": ""
  },
  currentVideo: {
    "videoURL": "https://www.youtube.com/watch?v=hWFDujYzvbI",
    "videoTitle": "JomaTech - Day in a life of a FAANG SWE",
    "videoPicture": "https://i.ytimg.com/vi/hWFDujYzvbI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD1qibHWhuWlEURP2phi8snHEehbg",
  },

  currentVideoArray: [],
  authentication: (authentication) =>
    set(
      produce((state) => {
        authentication != null ? state.token = authentication : state.token = null;
      })
    ),
  setVideo: (video) => set(
    produce((state) => {
      state.currentVideo = {
        "videoURL": video.url,
        "videoTitle": video.title,
        "videoPicture": video.picture
      }
    })
  ),
  updateVideos: (videos) =>
    set(
      produce((state) => {
        state.currentVideoArray = []
        videos.map((video) => {
          const payload = {
            "videoURL": video.video_path,
            "videoTitle": video.video_title,
            "videoPicture": null
          }

          video.video_image ? payload.videoPicture = video.video_image : payload.videoPicture = "https://i.imgur.com/UHPcMV1.png"
          state.currentVideoArray.push(payload)
        })
      })
    ),
  setProfile: (profile) =>
    set(
      produce((state) => {
        state.profile = {
          "first": profile.firstName,
          "last": profile.lastName,
          "username": profile.username
        }
      })
    ),
}));