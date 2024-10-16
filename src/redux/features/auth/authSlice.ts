import { RootState } from "@/redux/app/store";
import { createSlice } from "@reduxjs/toolkit";

export type TUser = {
  role: string;
  name: string;
  email: string;
  picture: string;

  user: {
    name: string;
    email: string;
    phone?: string;
    role: string;
    address?: string;
    profilePic: string;
    _id: string;
  };
  iat: number;
  exp: number;
};

type TAuthState = {
  user: null | TUser;
  token: null | string;
};

const initialState: TAuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState) => state.auth.user;
