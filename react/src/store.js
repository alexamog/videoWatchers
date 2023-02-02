import create from "zustand";
import produce from "immer";

export const useStore = create((set) => ({
  token: null, 
  profile: {
    "first": "",
    "last": "",
    "username": ""
  },
  currentVideo: {
    "videoURL": "https://www.youtube.com/watch?v=fTHSmKd8OvY",
    "videoTitle": "BCIT Campus Tour",
    "videoPicture": "https://i.ytimg.com/vi/fTHSmKd8OvY/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_ML7D4zEM0m_8mDcYfyoNtJwAhQ",
  },
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