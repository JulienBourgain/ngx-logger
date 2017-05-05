import { TestBed, inject } from '@angular/core/testing';

import { LoggerService } from './logger.service';
import {LogLevel} from "../log-level";
import {LogLevelEnum} from "../entities/log-level.enum";

describe('LibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoggerService,
        {
          provide: LogLevel,
          useClass: LogLevelEnum.info
        }]
    });
  });

  it('should create services', inject([LoggerService], (service: LoggerService) => {
    expect(service).toBeTruthy();
  }));

});
