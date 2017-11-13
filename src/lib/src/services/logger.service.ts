import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Log } from '../entities/log';
import { LogLevelEnum } from '../entities/log-level.enum';
import { LogLevel } from '../log-level';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoggerService {
  private logs = new BehaviorSubject<Log>(undefined);

  constructor(
    @Inject(LogLevel) private logLevel: LogLevelEnum
  ) {}

  getLogs(): Observable<Log> {
    return this.logs.pipe(filter(Boolean));
  }

  log(... args: any[]) {
    this.handleLogs(LogLevelEnum.log, args);
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
