import { LoggerService } from '../logger.service';
import { Injectable } from '@angular/core';
import { LogLevelEnum } from '../../entities/log-level.enum';

@Injectable()
export class ConsoleConsumer {
  constructor(private loggerService: LoggerService) {
    loggerService.getLogs()
      .subscribe(log => console[LogLevelEnum[log.level]](... log.payload));
  }
}
