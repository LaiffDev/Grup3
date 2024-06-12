import { TestBed } from '@angular/core/testing';

import { CarRegistrationService } from './car-registration.service';

describe('CarRegistrationService', () => {
  let service: CarRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
