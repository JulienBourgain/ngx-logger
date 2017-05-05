import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Log } from '../entities/log';
import { LogLevelEnum } from '../entities/log-level.enum';
import { LogLevel } from '../log-level';
import {Logger} from "../entities/logger";

@Injectable()
export class LoggerService {
  private logs = new BehaviorSubject<Log>(undefined);

  constructor(@Inject(LogLevel) private logLevel:LogLevelEnum) {
  }

  create(prefix:string):Logger {
    return <Logger> {
      log: (...args:any[]) => this.handleLogs(LogLevelEnum.log, [prefix, ...args]),
      info: (...args:any[]) => this.handleLogs(LogLevelEnum.info, [prefix, ...args]),
      warn: (...args:any[]) => this.handleLogs(LogLevelEnum.warn, [prefix, ...args]),
      error: (...args:any[]) => this.handleLogs(LogLevelEnum.error, [prefix, ...args]),
    }
  }

  getLogs() {
    return this.logs.filter(Boolean);
  }

  private handleLogs(logLevel:LogLevelEnum, args:any) {
    if (!this.logLevel || this.logLevel <= logLevel) {
      this.logs.next(new Log(logLevel, args));
    }
  }

}
