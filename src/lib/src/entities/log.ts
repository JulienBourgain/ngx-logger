import { LogLevelEnum } from './log-level.enum';

export class Log {
  constructor(
    public level: LogLevelEnum,
    public payload: any
  ) {}
}
