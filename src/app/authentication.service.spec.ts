import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AuthenticationService } from './authentication.service';
import { fakeBackendProvider } from './mock/http.mock.interceptor';

describe('AuthenticationService', () => {
  let injector: TestBed;
  let service: AuthenticationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthenticationService,fakeBackendProvider]
    });
    injector = getTestBed();
    service = injector.get(AuthenticationService);
    httpMock = injector.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });

  describe('#LoginUser', () => {
    it('should send Post Error', () => {

      service.login('email.com', 'wrong-pass').subscribe(users => {
        expect(users.length).toBe(0);
      });

    
    });
    it('should send Post Success', () => {

      service.login('test@mail', '123').subscribe(users => {
        expect(users.length).toBe(1);
        expect(users).toContain("token");
      });

    
    });
  });
});


