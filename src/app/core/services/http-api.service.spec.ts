/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpApiService } from './http-api.service';

describe('Service: HttpApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpApiService]
    });
  });

  xit('should ...', inject([HttpApiService], (service: HttpApiService) => {
    expect(service).toBeTruthy();
  }));
});
