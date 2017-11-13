/**
 * Logger astract class, this will implement by the LoggerService
 */
export abstract class Logger {

  abstract log(...args:any[]):void;

  abstract info(...args:any[]):void;

  abstract warn(...args:any[]):void;

  abstract error(...args:any[]):void;

}


