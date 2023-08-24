import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { ApiInterceptor } from './api.interceptor';

describe('ApiInterceptor', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
      ],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should prepend baseURL to the request URL', () => {
    const testUrl = 'test-endpoint';
    httpClient.get(testUrl).subscribe();

    const req = httpTestingController.expectOne(request =>
      request.url.includes('https://fakestoreapi.com/' + testUrl)
    );
    expect(req.request.method).toEqual('GET');
    req.flush({});
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
