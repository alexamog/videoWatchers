import create from "zustand";
import produce from "immer";

export const useStore = create((set) => ({
  token: null,
  profile: {
    "first": "Alex",
    "last": "Amog",
  },
  authentication: (authentication) =>
    set(
      produce((state) => {
        state.token =
          "123123";
      })
    ),
  setProfile: (profile) =>
    set(
      produce((state) => {
        state.profile = {
          "first": profile.firstName,
          "last": profile.lastName
        }
      })
    ),
}));