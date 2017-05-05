# Warning

This logger is under active development and hasn't yet reached its final form.

It may not be fully compatible with current versions of Angular.

# Ngx-logger
[![Build Status][travis-badge]][travis-badge-url]

This is a simple library to log in Angular 

Features:
- a simple logger service
- a simple log consumer which log in console
- unit tests for the library
- a demo application 

Common tasks are present as npm scripts:

- `npm start` to run a live-reload server with the demo app
- `npm run test` to test in watch mode, or `npm run test:once` to only run once
- `npm run build` to build the library
- `npm run lint` to lint 
- `npm run clean` to clean
- `npm run integration` to run the integration e2e tests
- `npm install ./relative/path/to/lib` after `npm run build` to test locally in another app

[travis-badge]: https://travis-ci.org/julienbourgain/angular-ngx-logger.svg?branch=master
[travis-badge-url]: https://travis-ci.org/julienbourgain/angular-ngx-logger

*To use this librairie :*

```typescript
@NgModule({
  imports: [
    LoggerModule.forRoot(LogLevelEnum.debug) // Set here the minimum log level
  ],
  providers: [
    ConsoleConsumer // Provide one or many Consumers
  ]
})
export class LoggerModule {
  // Inject eager provider to avoid lazy loading for this
  constructor(private consoleConsumer: ConsoleConsumer) {}
}
```

*To write some log consumers :*

```typescript
@Injectable()
export class ConsoleConsumer {
  constructor(private loggerService: LoggerService) {
    loggerService.getLogs()
      .subscribe(log => console[LogLevelEnum[log.level]](... log.payload));
  }
}
```

Just replace `console[LogLevelEnum[log.level]](... log.payload)` with your own code and instantiate your consumer.

*For use the logger :*

You have to inject in your constructor the LoggerService and get an new instance given the class name (prefix) and use this instance for log the information

Example: 

```typescript
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
```

