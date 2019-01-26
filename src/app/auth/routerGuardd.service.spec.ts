
import { AppRouterGuard } from './routerGuard.service';
import { AppState } from '../reducers';
import { State } from '../store/reducers/auth.reducer';
import { TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { MockStore, provideMockStore } from 'src/testings/utils';
import { RouterTestingModule } from '@angular/router/testing';
import { isAuthentication } from '../store';

describe('RouterGuardSevice', () => {
    let authGuardService: AppRouterGuard;
    let store: MockStore<AppState>;
    let state: AppState;

    sessionStorage.setItem('jwt-token', 'test-token');
    const initialState: State = {
        token: 'test-token',
        expire_in: 10,
        isLoading: true,
        error: null
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [StoreModule.forRoot({}), RouterTestingModule.withRoutes([])],
            providers: [AppRouterGuard, provideMockStore()]
        });
        authGuardService = TestBed.get(AppRouterGuard);
        store = TestBed.get(Store);
        state = createState(initialState);
        store.setState(state);
    });

    it('should be created', () => {
        expect(authGuardService).toBeTruthy();
    });

    it('should return isAuthenticated true from authState', () => {

        store.select(isAuthentication).subscribe(res => {
            expect(res).toBe(true);
        })

    });

});

function createState(authState: State) {
    return {
        auth: authState
    } as AppState;
}