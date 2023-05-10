import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { register, logIn, logOut, fetchCurrentUser } from './operations';

const authInitialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.pending, () => {})
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, () => {})
      .addCase(logIn.pending, () => {})
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, () => {})
      .addCase(logOut.pending, () => {})
      .addCase(logOut.fulfilled, () => {
        return authInitialState;
      })
      .addCase(logOut.rejected, () => {})
      .addCase(fetchCurrentUser.pending, (state) => {
        state.isFetchingCurrentUser = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      })
      .addCase(fetchCurrentUser.rejected, (state) => {
        state.isFetchingCurrentUser = false;
      });
  },
});

export const authPersistedReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);