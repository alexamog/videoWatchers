import create from "zustand";
import produce from "immer";

export const useStore = create((set) => ({
  token: "token_here",
  profile: {
    "first": "Developer mode",
    "last": "on",
    "username": ""
  },
  currentVideo: {
    "videoURL": "https://www.youtube.com/watch?v=fTHSmKd8OvY",
    "videoTitle": "BCIT Campus Tour",
    "videoPicture": "https://i.ytimg.com/vi/fTHSmKd8OvY/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_ML7D4zEM0m_8mDcYfyoNtJwAhQ",
  },

  currentVideoArray: [{
    "videoURL": "https://www.youtube.com/watch?v=K3Qzzggn--s",
    "videoPicture": "https://i.ytimg.com/vi/K3Qzzggn--s/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAoxDsaFGEv0_Tx0xDDNKCdhwd2ww",
    "videoTitle": "Joji - Slow Dancing in the dark M/V"
  },
  {
    "videoURL": "https://www.youtube.com/watch?v=-yR1IBtixHY",
    "videoPicture": "https://i.ytimg.com/vi/-yR1IBtixHY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDx_m4okoCo-zK3CzJ68tAp3p9H9g",
    "videoTitle": "Atarashi Gakko - オトナブルー",
  },
  {
    "videoURL": "https://www.youtube.com/watch?v=aeqnEJpPZVY",
    "videoPicture": "https://i.ytimg.com/vi/aeqnEJpPZVY/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIEsoOzAP&rs=AOn4CLDEKAMYOoCylz2iPVY1kjfKHAsqEg",
    "videoTitle": "TaehaTypes - Fjell keyboard",
  },
  ],
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
  addVideo: (video) =>
    set(
      produce((state) => {
        state.currentVideoArray.append({
          "videoURL": video.url,
          "videoTitle": video.title,
          "videoPicture": video.picture,
        },
        )
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