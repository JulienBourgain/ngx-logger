import { Component, OnInit } from '@angular/core';
import { LoggerService, Logger } from 'ngx-logger';

@Component({
  selector: 'demo-app',
  template: `
    <h3>Open your console</h3>
  `,
})
export class AppComponent implements OnInit {
  logger: Logger;

  constructor(loggerService: LoggerService) {
    this.logger = loggerService.create(this.constructor.name);
  }

  ngOnInit() {
    this.logger.log('Init App component');
    setInterval(() => {
      this.logger.warn('Interval', new Date());
    }, 1000);

  }
}
