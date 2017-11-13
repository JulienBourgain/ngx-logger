import { TestBed, inject } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggerService]
    });
  });

  it('should create services', inject([LoggerService], (service: LoggerService) => {
    expect(service).toBeTruthy();
  }));

  it('should return 42 from getMeaning', inject([LoggerService], (service: LoggerService) => {
    expect(service.getLogs()).toBe(42);
  }));
});
