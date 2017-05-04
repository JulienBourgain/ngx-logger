import { LoggerService } from '../logger.service';
import { Injectable, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';

@Injectable()
export class ConsoleConsumer implements OnDestroy {
  constructor(private loggerService: LoggerService) {
    loggerService.logs
      .filter(Boolean)
      .subscribe(log => console.log(log.payload));
  }
}
