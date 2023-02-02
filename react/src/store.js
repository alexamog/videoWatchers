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
    "videoTitle": " A Day In The Life Of Silicon Valley Engineers",
    "videoPicture": ""
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
  {
    "videoURL": "https://www.youtube.com/watch?v=9EDZixuODrw",
    "videoPicture": "https://i.ytimg.com/vi/9EDZixuODrw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB08X5M9UHNlPCK6_yMVifJfm2jMg",
    "videoTitle": "Light switch - Charlie Puth (Xoos cover)",
  },
  {
    "videoURL": "https://www.youtube.com/watch?v=2pIJoPkh9IU",
    "videoPicture": "https://i.ytimg.com/vi/2pIJoPkh9IU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBFsacbUFJ1pUnZesiVKLtPY45tGQ",
    "videoTitle": "I got fired from Facebook",
  },
  {
    "videoURL": "https://www.youtube.com/watch?v=ZxCUnxwR89Q",
    "videoPicture": "https://i.ytimg.com/vi/ZxCUnxwR89Q/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6t5sIB-VyQeb5nifbKXEnpOXCnQ",
    "videoTitle": "Why everyone wants to get into FAANG",
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


// export const useStore = create(persist(
//   (set,get)=> ((set) => ({
//     token: "token_here",
//     profile: {
//       "first": "Developer mode",
//       "last": "on",
//       "username": ""
//     },
//     currentVideo: {
//       "videoURL": "https://www.youtube.com/watch?v=hWFDujYzvbI",
//       "videoTitle": " A Day In The Life Of Silicon Valley Engineers",
//       "videoPicture": ""
//     },
  
//     currentVideoArray: [{
//       "videoURL": "https://www.youtube.com/watch?v=K3Qzzggn--s",
//       "videoPicture": "https://i.ytimg.com/vi/K3Qzzggn--s/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAoxDsaFGEv0_Tx0xDDNKCdhwd2ww",
//       "videoTitle": "Joji - Slow Dancing in the dark M/V"
//     },
//     {
//       "videoURL": "https://www.youtube.com/watch?v=-yR1IBtixHY",
//       "videoPicture": "https://i.ytimg.com/vi/-yR1IBtixHY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDx_m4okoCo-zK3CzJ68tAp3p9H9g",
//       "videoTitle": "Atarashi Gakko - オトナブルー",
//     },
//     {
//       "videoURL": "https://www.youtube.com/watch?v=aeqnEJpPZVY",
//       "videoPicture": "https://i.ytimg.com/vi/aeqnEJpPZVY/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIEsoOzAP&rs=AOn4CLDEKAMYOoCylz2iPVY1kjfKHAsqEg",
//       "videoTitle": "TaehaTypes - Fjell keyboard",
//     },
//     {
//       "videoURL": "https://www.youtube.com/watch?v=9EDZixuODrw",
//       "videoPicture": "https://i.ytimg.com/vi/9EDZixuODrw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB08X5M9UHNlPCK6_yMVifJfm2jMg",
//       "videoTitle": "Light switch - Charlie Puth (Xoos cover)",
//     },
//     {
//       "videoURL": "https://www.youtube.com/watch?v=2pIJoPkh9IU",
//       "videoPicture": "https://i.ytimg.com/vi/2pIJoPkh9IU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBFsacbUFJ1pUnZesiVKLtPY45tGQ",
//       "videoTitle": "I got fired from Facebook",
//     },
//     {
//       "videoURL": "https://www.youtube.com/watch?v=ZxCUnxwR89Q",
//       "videoPicture": "https://i.ytimg.com/vi/ZxCUnxwR89Q/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6t5sIB-VyQeb5nifbKXEnpOXCnQ",
//       "videoTitle": "Why everyone wants to get into FAANG",
//     },
//     ],
//     authentication: (authentication) =>
//       set(
//         produce((state) => {
//           authentication != null ? state.token = authentication : state.token = null;
//         })
//       ),
//     setVideo: (video) => set(
//       produce((state) => {
//         state.currentVideo = {
//           "videoURL": video.url,
//           "videoTitle": video.title,
//           "videoPicture": video.picture
//         }
//       })
//     ),
//     addVideo: (video) =>
//       set(
//         produce((state) => {
//           state.currentVideoArray.append({
//             "videoURL": video.url,
//             "videoTitle": video.title,
//             "videoPicture": video.picture,
//           },
//           )
//         })
//       ),
//     setProfile: (profile) =>
//       set(
//         produce((state) => {
//           state.profile = {
//             "first": profile.firstName,
//             "last": profile.lastName,
//             "username": profile.username
//           }
//         })
//       ),
//   })
//   ),{
//     name: "video-storage",
//   }
// ));