import * as fromAction from '../actions/auth.action';
import { Authentication } from '../../contracts/authenticate';

export interface State extends Authentication {
    token: string,
    expire_in: number,
    isLoading: boolean,
    error: any
};

const initialState: State = {
    token: null,
    expire_in: 0,
    isLoading: false,
    error: null
};

export function reducer(state = initialState, action: fromAction.AuthActions): State {
    switch (action.type) {


        case fromAction.AuthActionsType.AUTH_LOAD: {
            return {
                ...state
            }
        }

        case fromAction.AuthActionsType.AUTH_SUCCESS: {
            return {
                isLoading: true,
                error: undefined,
                ...action.payload // {token, expire_is}:Authentication
            };
        }
        case fromAction.AuthActionsType.AUTH_FAIL: {

            return {
                isLoading: true,
                error: action.payload,
                token: null,
                expire_in: 0
            };
        }
        case fromAction.AuthActionsType.USER_LOGOUT: {

            return {
                isLoading: true,
                error: null,
                token: null,
                expire_in: 0
            } //initialState

        }

        default: {
            return state;
        }
    }
}

export const getAuthenticationError = (state: State) => state.error;
export const getAuthenticationToken = (state: State) => state.token;
export const getAuthenticationLoading = (state: State) => state.isLoading;
