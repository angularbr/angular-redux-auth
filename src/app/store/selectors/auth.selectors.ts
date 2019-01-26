import { createSelector } from '@ngrx/store';
import * as fromFeaturer from '../../reducers'
import * as fromAuth from '../reducers/auth.reducer'

export const getCurrentToken = createSelector(fromFeaturer.authFeatureState, fromAuth.getAuthenticationToken);
export const getLoading = createSelector(fromFeaturer.authFeatureState, fromAuth.getAuthenticationLoading);
export const getCurrentError = createSelector(fromFeaturer.authFeatureState, fromAuth.getAuthenticationError);
export const isAuthentication = createSelector(getCurrentToken, token => {
    const session = sessionStorage.getItem('jwt-token');
    return token !== null && token === session;
});