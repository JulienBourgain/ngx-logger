import { ModuleWithProviders, NgModule } from '@angular/core';

import { LoggerService } from './services/logger.service';
import { LogLevelEnum } from './entities/log-level.enum';
import { LogLevel } from './log-level';

@NgModule()
export class LoggerModule {
  public static forRoot(logLevel: LogLevelEnum): ModuleWithProviders {
    return {
      ngModule: LoggerModule,
      providers: [
        LoggerService,
        {provide: LogLevel, useValue: logLevel }
      ]
    };
  }
}
