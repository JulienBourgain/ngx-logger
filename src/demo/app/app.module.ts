import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConsoleConsumer, LoggerModule, LogLevel, LogLevelEnum } from 'ngx-logger';
import { EAGER_PROVIDER, EagerProviderLoaderModule } from 'angular-eager-provider-loader';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [
    EagerProviderLoaderModule,
    BrowserModule,
    LoggerModule.forRoot(LogLevelEnum.debug)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    {provide: LogLevel, useValue: LogLevelEnum.debug },
    ConsoleConsumer,
    {provide: EAGER_PROVIDER, useValue: ConsoleConsumer, multi: true}
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
