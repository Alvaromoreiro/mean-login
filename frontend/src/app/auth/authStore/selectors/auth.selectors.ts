import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { AuthState } from "../reducers/auth.reducers";

export const selectAuthState = (state: AppState) => state.authState;

export const selectIsAuthenticatedState = createSelector(
  selectAuthState,
  (state: AuthState) => state.isAuthenticated
)

export const selectUserInfoState = createSelector(
  selectAuthState,
  (state: AuthState) => state.user
)
