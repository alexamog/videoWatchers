import create from "zustand";
import produce from "immer";

export const useStore = create((set) => ({
  token: null,
  authentication: (authentication) =>
    set(
      produce((state) => {
        state.token =
        "123123";
        // console.log(state.token);

    })
    ),
}));