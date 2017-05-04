import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Log } from '../entities/log';
import { LogLevelEnum } from '../entities/log-level.enum';
import { LogLevel } from '../log-level';

@Injectable()
export class LoggerService {
  logs = new BehaviorSubject<Log>(undefined);

  constructor(
    @Inject(LogLevel) private logLevel: LogLevelEnum
  ) { }

  log(... args: any[]) {
    this.handleLogs(LogLevelEnum.log, args);
  }

  debug(... args: any[]) {
    this.handleLogs(LogLevelEnum.debug, args);
  }

  info(... args: any[]) {
    this.handleLogs(LogLevelEnum.info, args);
  }

  warn(... args: any[]) {
    this.handleLogs(LogLevelEnum.warn, args);
  }

  error(... args: any[]) {
    this.handleLogs(LogLevelEnum.error, args);
  }

  private handleLogs(logLevel: LogLevelEnum, args: any) {
    if (!this.logLevel || this.logLevel <= logLevel) {
      this.logs.next(new Log(logLevel, args));
    }
  }
}
