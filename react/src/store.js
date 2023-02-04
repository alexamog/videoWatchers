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
  authentication: (authentication) =>
    set(
      produce((state) => {
        authentication != null ? state.token = authentication : state.token = null;
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