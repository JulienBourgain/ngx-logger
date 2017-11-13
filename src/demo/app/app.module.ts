import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConsoleConsumer, LoggerModule, LogLevel, LogLevelEnum } from 'ngx-logger';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    LoggerModule.forRoot(LogLevelEnum.warn)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    ConsoleConsumer
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  // Inject eager provider to avoid lazy loading for this
  constructor(private consoleConsumer: ConsoleConsumer) {}
}
