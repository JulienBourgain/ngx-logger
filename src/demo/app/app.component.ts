import { Component } from '@angular/core';
import { LoggerService } from 'ngx-logger';

@Component({
  selector: 'demo-app',
  template: `
    <h3>Open your console</h3>
  `,
})
export class AppComponent {
  constructor(logger: LoggerService) {
    logger.log('Init App component');
    setInterval(() => {
      logger.warn('Interval', new Date());
    }, 1000);
  }
}
